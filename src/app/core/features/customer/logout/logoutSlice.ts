import { createReduxSlice } from 'app/core/redux/reduxCommon';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/core/redux/rootReducer';

export const logoutSlice = createReduxSlice<undefined>('logout');

export const {
  request: logout,
  success: logoutSuccess,
  failure: logoutFailure,
  reset: resetLogout,
} = logoutSlice.actions;

console.log('logoutSlice', logoutSlice);

export const logoutSelector = createSelector(
  (state: RootState) => state.customer.logout,
  (item) => item
);
