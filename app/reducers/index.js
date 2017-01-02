// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import twitchAPI from './twitchAPI';

const rootReducer = combineReducers({
  counter,
  twitchAPI,
  routing
});

export default rootReducer;
