import { PayloadAction } from '@reduxjs/toolkit';
import { history } from 'app/ui/utils';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { loginFailure, LoginParam, loginSlice, loginSuccess } from './loginSlice';

function* handleLoginSaga(action: PayloadAction<LoginParam>) {
  const { email, password } = action.payload;
  console.log('user', action.payload);
  try {
    const data = {
      token: 'token',
    };
    localStorage.setItem('customer_token', data.token);
    yield delay(2000);
    if (data) {
      yield put(loginSuccess(data));
      history.push('/customer/tracks');
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* loginSaga() {
  yield takeLatest(`${loginSlice.name}/request`, handleLoginSaga);
}
