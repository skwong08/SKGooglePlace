const setSearchResult = result => {
  return {
    type: 'SET_SEARCH_RESULT',
    payload: result,
  };
};

const setGeoLocationResult = result => {
  return {
    type: 'SET_GEOLOCATION_RESULT',
    payload: result,
  };
};

export default {
  setSearchResult,
  setGeoLocationResult,
};
