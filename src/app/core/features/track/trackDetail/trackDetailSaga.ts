import { PayloadAction } from '@reduxjs/toolkit';
import { clientRequest } from 'app/core/network/GraphQLAPI';
import { put, takeLatest } from 'redux-saga/effects';
import {
  getTrackDetailFailure,
  getTrackDetailSlice,
  getTrackDetailSuccess,
  GET_TRACK_DETAIL_QUERY,
} from './trackDetailSlice';

function* handleGetTrackDetailSaga(action: PayloadAction<String>) {
  try {
    const { data } = yield clientRequest('GET').query({
      query: GET_TRACK_DETAIL_QUERY,
      variables: {
        trackId: action.payload,
      },
    });
    if (data) {
      yield put(getTrackDetailSuccess(data));
    }
  } catch (errors: any) {
    yield put(getTrackDetailFailure(errors.message));
  }
}

export default function* trackDetailSaga() {
  yield takeLatest(`${getTrackDetailSlice.name}/request`, handleGetTrackDetailSaga);
}
