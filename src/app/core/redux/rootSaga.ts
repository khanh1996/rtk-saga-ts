import { all } from 'redux-saga/effects';
import counterSaga from 'app/ui/counter/counterSaga';
import trackDetailSaga from '../features/track/trackDetail/trackDetailSaga';
import tracksSaga from '../features/track/tracks/tracksSaga';
import incrementTrackViewsSaga from '../features/track/incrementTrackViews/incrementTrackViewsSaga';
import { getModuleAndParentTrackSaga } from '../features/module/moduleTrackSaga';
import { loginSaga } from '../features/customer/login/loginSaga';
import { logoutSaga } from '../features/customer/logout/logoutSaga';

function* helloRootSaga() {
  console.log('hello root saga');
  yield 'hello root saga';
}

export default function* rootSaga() {
  console.log('root saga');
  yield all([
    helloRootSaga(),
    counterSaga(),
    tracksSaga(),
    trackDetailSaga(),
    incrementTrackViewsSaga(),
    getModuleAndParentTrackSaga(),
    loginSaga(),
    logoutSaga(),
  ]);
}
