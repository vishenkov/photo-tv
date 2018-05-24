// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import country from './country';
import agreement from './agreement';
import photo from './photo';
import share from './share';

const rootReducer = combineReducers({
  country,
  agreement,
  photo,
  share,
  router,
});

export default rootReducer;
