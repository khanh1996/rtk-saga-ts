import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

import { history } from 'app/ui/utils';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true, // turn middleware immutable of RTK
      serializableCheck: true, // turn middleware serializable of RTK
    }).concat(sagaMiddleware, routerMiddleware(history)), // add other middleware
  devTools: true, // open React Developer Tools
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
