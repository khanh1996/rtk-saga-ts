import { clientRequest } from 'app/core/network/GraphQLAPI';
import axiosClient from 'app/core/network/RestAPI';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  getTracksFailure,
  getTracksSlice,
  getTracksSuccess,
  GET_TRACKS_QUERY,
} from './tracksSlice';

function* handleGetTracksSaga() {
  console.log('getTracksCustomSaga');
  try {
    const { data } = yield clientRequest('GET').query({
      query: GET_TRACKS_QUERY,
    });
    if (data) {
      yield put(getTracksSuccess(data));
    }
  } catch (errors: any) {
    yield put(getTracksFailure(errors.message));
  }

  yield '';
}
// async function fetchTracksAPI() {
//   try {
//     const data = await axiosClient.get('/tracks');
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* getTracksSagaRestAPI() {
//   console.log('getTracksSagaRestAPI');
//   try {
//     yield call(fetchTracksAPI);
//   } catch (error) {
//     console.log(error);
//   }
// }
export default function* tracksSaga() {
  yield takeLatest(`${getTracksSlice.name}/request`, handleGetTracksSaga);
}
