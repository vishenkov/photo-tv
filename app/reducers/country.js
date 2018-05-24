import {
  GET_COUNTRY,
  GET_COUNTRIES,
  SET_COUNRTY,
  MATCH_COUNTRY,
} from '../actions/country';

const defaultState = {
  country: 'Default',
  countries: [],
};

export default function country(state = defaultState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return state;
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };
    case SET_COUNRTY:
      return {
        ...state,
        country: action.country,
      };
    case MATCH_COUNTRY:
      return {
        ...state,
        countries: action.countries.filter(c => c.includes(action.match)),
      };
    default:
      return state;
  }
}
