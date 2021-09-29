import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

import { history } from 'app/ui/utils';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['router'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true, // turn middleware immutable of RTK
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
      }, // turn middleware serializable of RTK
    }).concat(sagaMiddleware, routerMiddleware(history)), // add other middleware
  devTools: true, // open React Developer Tools
});
export const persistor = persistStore(store);
console.log('persistor', persistor);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
