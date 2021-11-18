const INITIAL_STATE = {
  searchResultList: [],
  geoLocationResultList: [],
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULT':
      return {
        ...state,
        searchResultList: action.payload,
      };
    case 'SET_GEOLOCATION_RESULT':
      return {
        ...state,
        geoLocationResultList: action.payload,
      };
    default:
      return state;
  }
};

export default search;
