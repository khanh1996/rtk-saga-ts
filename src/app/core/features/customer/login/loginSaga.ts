import { PayloadAction } from '@reduxjs/toolkit';
import { history } from 'app/ui/utils';
import Cookies from 'js-cookie';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginFailure, LoginParam, loginSlice, loginSuccess } from './loginSlice';

function* handleLogin(action: PayloadAction<LoginParam>) {
  const { email, password } = action.payload;
  console.log('user', action.payload);
  try {
    const data = {
      token: 'token',
    };
    Cookies.set('customer_token', data.token);
    if (data) {
      yield put(loginSuccess(data));
      history.push('/customer/tracks');
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* loginSaga() {
  yield takeLatest(`${loginSlice.name}/request`, handleLogin);
}
