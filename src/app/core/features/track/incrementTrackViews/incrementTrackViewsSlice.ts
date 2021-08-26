import { createSelector } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import { RootState } from 'app/core/redux/rootReducer';
import { createReduxSlice } from 'app/core/redux/reduxCommon';

export const incrementTrackViewsSlice = createReduxSlice<String>('incrementTrackViews');

export const {
  request: incrementTrackViews,
  success: incrementTrackViewsSuccess,
  failure: incrementTrackViewsFailure,
} = incrementTrackViewsSlice.actions;

export const incrementTrackViewsSelector = createSelector(
  (state: RootState) => state.track.incrementTrackViews,
  (item: any) => item
);

export const INCREMENT_TRACK_VIEWS_MUTATION = gql`
  mutation Mutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        id
        numberOfViews
      }
    }
  }
`;
