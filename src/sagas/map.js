/* eslint-disable no-constant-condition */
import {
    take,
    fork,
    takeLatest,
    put,
    call,
    select,
    cancel,
    cancelled
  } from 'redux-saga/effects';
  import { push } from 'react-router-redux';
  import request from '../utils/request';
  
 
  export function* logIn (username, password) {
    try {
      yield put({ type: 'login/request' });
      // 登录成功之后用户信息写到全局State。
      yield call(request, '/login', {
        method: 'POST',
        body: {
          username:'smileyqp',
          password:'123456'
        }
      });
      yield [
        put({ type: 'login/success' }),
        yield put({
          type: 'account/update',
          payload: { username }
        })
      ];
      // 跳转到管理后台主页面
      yield put(push('/'));
    } catch (error) {
      yield put({ type: 'LOGIN_ERROR' });
      yield put({
        type: 'login/failed',
        payload: error.message
      });
    } finally {
      if (yield cancelled()) {
        // ... put special cancellation handling code here
        yield put({ type: 'login/logout' });
      }
    }
  }
  

  export function* watchLogin () {
    while (true) {
      const { username, password } = yield take('LOGIN_REQUEST');
  
      // fork return a Task object
      const task = yield fork(logIn, username, password);
      const action = yield take(['LOGOUT', 'LOGIN_ERROR']);
      if (action.type === 'LOGOUT') {
        yield cancel(task);
      }
    }
  }
  
  
 
  
  export default [
    watchLogin
    
  ];
  