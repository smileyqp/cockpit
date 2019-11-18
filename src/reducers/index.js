import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = {
  routing: routerReducer
};

const context = require.context('./', false, /(?<!spec)\.js$/);
context.keys()
  .filter(item => item !== './index.js')
  .forEach(key => {
    const reducer = context(key);
    reducers[reducer.namespace] = reducer.default;
  });

export default combineReducers(reducers);
