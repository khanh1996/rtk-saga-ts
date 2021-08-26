import { PayloadAction } from '@reduxjs/toolkit';
import history from 'app/ui/utils/history';
import Cookies from 'js-cookie';
import { put, takeLatest } from 'redux-saga/effects';
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
      console.log('history push');
      history.push('/customer/info');
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* loginSaga() {
  yield takeLatest(`${loginSlice.name}/request`, handleLogin);
}
