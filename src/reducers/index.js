import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';

import {gridReducer as grid} from '../modules/Framework/Grid';

import AppReducer from '../modules/App/Reducers/AppReducer';

const rootReducer = combineReducers({
  routing,
  form,
  grid,

  app: AppReducer
});

export default rootReducer;
