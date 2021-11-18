import React from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import {SearchResultStyles} from './styles';

interface ISearchResultContainerProps {
  searchResult: Array<unknown>;
  onPress: (selection: string) => void;
}

const SearchResultContainer: React.FC<ISearchResultContainerProps> = ({
  searchResult,
  onPress,
}) => {
  return (
    <FlatList
      data={searchResult}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={SearchResultStyles.item}
            onPress={() => onPress(item.description)}>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.place_id}
      style={SearchResultStyles.container}
    />
  );
};

export default SearchResultContainer;
