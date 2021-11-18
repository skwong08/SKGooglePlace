import axios from 'axios';
import {Dispatch} from 'react';
import {Alert} from 'react-native';
import {autoCompleteURL, geolocationURL} from '../common/config';
import allActions from '../redux/actions';

export const apiSearch = async (keyword: string, dispatch: Dispatch<any>) => {
  return axios
    .request({
      method: 'post',
      url: `${autoCompleteURL}&input=${keyword}`,
    })
    .then(res => {
      dispatch(allActions.searchActions.setSearchResult(res.data.predictions));
      return {success: true};
    })
    .catch(err => {
      Alert.alert('Error', err);
      return {success: false};
    });
};

export const apiGeoLocation = async (
  keyword: string,
  dispatch: Dispatch<any>,
) => {
  return axios
    .request({
      method: 'post',
      url: `${geolocationURL}&address=${keyword}`,
    })
    .then(res => {
      dispatch(allActions.searchActions.setGeoLocationResult(res.data.results));
      return {success: true, data: res.data.results};
    })
    .catch(err => {
      Alert.alert('Error', err);
      return {success: false, data: []};
    });
};
