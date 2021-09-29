import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take, takeEvery } from 'redux-saga/effects';
import {
  increment,
  incrementAsyncSaga,
  incrementAsyncSagaSuccess,
  incrementByAmount,
} from './counterSlice';

function* logIncrement(action: PayloadAction) {
  yield 'hello counter';
}

function* handleIncrementAsyncSaga(action: PayloadAction<number>) {
  yield delay(2000);

  yield put(incrementAsyncSagaSuccess(action.payload));
}

export default function* counterSaga() {
  yield takeEvery(increment.type, logIncrement);
  yield takeEvery(incrementAsyncSaga.toString(), handleIncrementAsyncSaga);
}
