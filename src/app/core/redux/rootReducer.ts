import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from 'app/ui/counter/counterSlice';
import { history } from 'app/ui/utils';
import { connectRouter } from 'connected-react-router';
import { loginSlice } from '../features/customer/login/loginSlice';
import { logoutSlice } from '../features/customer/logout/logoutSlice';
import { getModuleAndParentTrackSlice } from '../features/module/moduleTrackSlice';
import { incrementTrackViewsSlice } from '../features/track/incrementTrackViews/incrementTrackViewsSlice';
import { getTrackDetailSlice } from '../features/track/trackDetail/trackDetailSlice';
import { getTracksSlice } from '../features/track/tracks/tracksSlice';

const counterReducer = combineReducers({
  getCounter: counterSlice.reducer,
});
const customerReducer = combineReducers({
  login: loginSlice.reducer,
  logout: logoutSlice.reducer,
});

const moduleTrackReducer = combineReducers({
  getModuleAndParentTrack: getModuleAndParentTrackSlice.reducer,
});

const trackReducer = combineReducers({
  getTracks: getTracksSlice.reducer,
  getTrackDetail: getTrackDetailSlice.reducer,
  incrementTrackViews: incrementTrackViewsSlice.reducer,
});

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  track: trackReducer,
  module: moduleTrackReducer,
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
