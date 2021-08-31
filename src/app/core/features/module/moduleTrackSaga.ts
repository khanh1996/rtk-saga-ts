import { ApolloError } from '@apollo/client';
import { PayloadAction } from '@reduxjs/toolkit';
import { clientRequest } from 'app/core/network/GraphQLAPI';
import { put, takeLatest } from 'redux-saga/effects';
import {
  getModuleAndParentTrackFailure,
  getModuleAndParentTrackSlice,
  getModuleAndParentTrackSuccess,
  GET_MODULE_AND_PARENT_TRACK_QUERY,
  ModuleTrack,
} from './moduleTrackSlice';

function* handleGetModuleAndParentTrack(action: PayloadAction<ModuleTrack>) {
  const { moduleId, trackId } = action.payload;
  try {
    const { data } = yield clientRequest('GET').query({
      query: GET_MODULE_AND_PARENT_TRACK_QUERY,
      variables: {
        moduleId: moduleId,
        trackId: trackId,
      },
    });
    if (data) {
      yield put(getModuleAndParentTrackSuccess(data));
    }
  } catch (errors: any) {
    yield put(getModuleAndParentTrackFailure(errors.message));
  }
}

export function* getModuleAndParentTrackSaga() {
  yield takeLatest(`${getModuleAndParentTrackSlice.name}/request`, handleGetModuleAndParentTrack);
}
