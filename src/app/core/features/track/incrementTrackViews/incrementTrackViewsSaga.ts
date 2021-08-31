import { PayloadAction } from '@reduxjs/toolkit';
import { clientRequest } from 'app/core/network/GraphQLAPI';
import { put, takeLatest } from 'redux-saga/effects';
import { getTrackDetail } from '../trackDetail/trackDetailSlice';
import {
  incrementTrackViewsFailure,
  incrementTrackViewsSlice,
  incrementTrackViewsSuccess,
  INCREMENT_TRACK_VIEWS_MUTATION,
} from './incrementTrackViewsSlice';

export function* handleIncrementTrackViewsSaga(action: PayloadAction<String>) {
  const trackId = action.payload;
  try {
    const { data } = yield clientRequest('POST').mutate({
      mutation: INCREMENT_TRACK_VIEWS_MUTATION,
      variables: {
        incrementTrackViewsId: trackId,
      },
    });
    yield put(incrementTrackViewsSuccess(data));
    console.log(data?.incrementTrackViews.success);
    if (data && data?.incrementTrackViews.success) {
      yield put(getTrackDetail(trackId));
    }
  } catch (errors: any) {
    yield put(incrementTrackViewsFailure(errors.message));
  }
}

export default function* incrementTrackViewsSaga() {
  yield takeLatest(`${incrementTrackViewsSlice.name}/request`, handleIncrementTrackViewsSaga);
}
