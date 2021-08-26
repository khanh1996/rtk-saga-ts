import { createReduxSlice } from 'app/core/redux/reduxCommon';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/core/redux/rootReducer';

export interface LoginParam {
  email: string;
  password: string;
}

export const loginSlice = createReduxSlice<LoginParam>('login');

export const { request: login, success: loginSuccess, failure: loginFailure } = loginSlice.actions;

export const loginSelector = createSelector(
  (state: RootState) => state.customer.login,
  (item) => item
);
