import {Platform, StyleSheet} from 'react-native';
import {Colors} from './colors';

export const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white_FFFFFF,
    paddingVertical: Platform.OS === 'android' ? 16 : 0,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
  },
  marginTop8: {
    marginTop: 8,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginTop24: {
    marginTop: 24,
  },
  marginTop48: {
    marginTop: 48,
  },
  marginBot8: {
    marginBottom: 8,
  },
  marginBot16: {
    marginBottom: 16,
  },
  marginBot24: {
    marginBottom: 24,
  },
  marginLeft8: {
    marginLeft: 8,
  },
  marginLeft16: {
    marginLeft: 16,
  },
  marginLeft24: {
    marginLeft: 24,
  },
  marginLeft48: {
    marginLeft: 48,
  },
  marginRight8: {
    marginRight: 8,
  },
  marginRight16: {
    marginRight: 16,
  },
  marginRight24: {
    marginRight: 24,
  },
  marginRight48: {
    marginRight: 48,
  },
  marginVertical16: {
    marginVertical: 16,
  },
  marginVertical24: {
    marginVertical: 24,
  },
  marginHorizontal16: {
    marginHorizontal: 16,
  },
  marginHorizontal24: {
    marginHorizontal: 24,
  },
  paddingVertical16: {
    paddingVertical: 16,
  },
  paddingVertical24: {
    paddingVertical: 24,
  },
  paddingHorizontal8: {
    paddingHorizontal: 8,
  },
  paddingHorizontal16: {
    paddingHorizontal: 16,
  },
  paddingHorizontal24: {
    paddingHorizontal: 24,
  },
  width25: {
    width: '25%',
  },
  width50: {
    width: '50%',
  },
  width75: {
    width: '75%',
  },
  width100: {
    width: '100%',
  },
});
