import {applyMiddleware, createStore,compose} from 'redux';

import reducers from '../reducers';
import rootSaga from '../sagas';


import createSagaMiddleware from 'redux-saga';
/**
 * 自定义log中间件
 * https://cn.redux.js.org/docs/advanced/Middleware.html
 * @param store
 */

const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatching ', action);
    }
    const result = next(action);
    console.log('nextState ', store.getState());
    return result;
};


const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,
    logger
];
const store = createStore(reducers, compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);
/**
 * 创建store
 */
export default store;
