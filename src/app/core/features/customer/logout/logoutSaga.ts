import { history } from 'app/ui/utils';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { resetToken } from '../login/loginSlice';
import { logoutSlice, logoutSuccess, resetLogout } from './logoutSlice';

function* handleLogoutSaga() {
  localStorage.clear();
  yield delay(2000);
  yield put(logoutSuccess('logout success'));
  yield put(resetToken());
  yield put(resetLogout());
  history.push('/customer/login');
}

export function* logoutSaga() {
  console.log('logoutSaga');
  console.log(logoutSlice.actions.request.type);
  yield takeLatest(logoutSlice.actions.request.type, handleLogoutSaga);
}
