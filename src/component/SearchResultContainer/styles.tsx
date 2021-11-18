import {StyleSheet} from 'react-native';
import {Colors} from '../../common/colors';
import {Styles} from '../../common/styles';

export const SearchResultStyles = StyleSheet.create({
  container: {
    width: Styles.width100.width,
    height: 200,
    paddingHorizontal: Styles.paddingHorizontal8.paddingHorizontal,
    backgroundColor: Colors.white_FFFFFF,
    position: 'absolute',
    top: 50,
    borderWidth: 1,
    borderColor: Colors.grey_E6E6E6,
  },
  item: {
    justifyContent: 'center',
    height: 40,
    borderBottomColor: Colors.grey_E6E6E6,
    borderBottomWidth: 1,
  },
});
