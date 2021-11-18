import React from 'react';
import {SafeAreaView, Keyboard} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {apiGeoLocation, apiSearch} from '../../api/apiSearch';
import Map from '../Map';
import {Styles} from '../../common/styles';
import SearchBar from '../../component/SearchBar';

const Main = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(state => state.searchState.searchResultList);

  const [searchKeyword, setSearchKeyword] = React.useState('');
  const [isShowingResults, setIsShowingResults] = React.useState(false);
  const [newLocationData, setNewLocationData] = React.useState({});

  const onSearchLocation = async (keyword: string) => {
    setSearchKeyword(keyword);

    if (keyword.length === 0) {
      setIsShowingResults(false);
      return;
    }

    apiSearch(keyword, dispatch).then(res => {
      if (res.success) {
        setIsShowingResults(true);
      }
    });
  };

  const onPress = (keyword: string) => {
    setSearchKeyword(keyword);
    setIsShowingResults(false);
    Keyboard.dismiss();

    apiGeoLocation(keyword, dispatch).then(res => {
      if (res.success) {
        if (res.data?.length > 0) {
          res.data.forEach(data => {
            setNewLocationData(data);
          });
        }
      }
    });
  };

  return (
    <SafeAreaView style={Styles.safeArea}>
      <SearchBar
        searchKeyword={searchKeyword}
        searchResult={searchResult}
        isShowingResults={isShowingResults}
        onSearchLocation={onSearchLocation}
        onPress={onPress}
      />
      <Map newLocationData={newLocationData} />
    </SafeAreaView>
  );
};

export default Main;
