import {StyleSheet} from 'react-native';
import {Colors} from '../../common/colors';
import {Styles} from '../../common/styles';

export const SearchBarStyles = StyleSheet.create({
  autocompleteContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    margin: Styles.marginHorizontal24.marginHorizontal,
  },
  searchBox: {
    flexDirection: 'row',
    height: 50,
    fontSize: 16,
    borderRadius: 8,
    borderColor: Colors.grey_B6B6B6,
    color: Colors.black_000000,
    backgroundColor: Colors.white_FFFFFF,
    borderWidth: 1,
    paddingHorizontal: Styles.paddingHorizontal16.paddingHorizontal,
  },
});
