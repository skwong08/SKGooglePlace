import React from 'react';
import {View, TextInput, Keyboard} from 'react-native';
import SearchResultContainer from '../SearchResultContainer';
import {SearchBarStyles} from './styles';

interface ISearchBarProps {
  searchKeyword: string;
  searchResult: Array<unknown>;
  isShowingResults: boolean;
  onSearchLocation: (keyword: string) => void;
  onPress: (selection: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  searchKeyword,
  searchResult,
  isShowingResults,
  onSearchLocation,
  onPress,
}) => {
  return (
    <View style={SearchBarStyles.autocompleteContainer}>
      <TextInput
        placeholder="Search..."
        returnKeyType="search"
        style={SearchBarStyles.searchBox}
        onChangeText={onSearchLocation}
        value={searchKeyword}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      {isShowingResults && (
        <SearchResultContainer searchResult={searchResult} onPress={onPress} />
      )}
    </View>
  );
};

export default SearchBar;
