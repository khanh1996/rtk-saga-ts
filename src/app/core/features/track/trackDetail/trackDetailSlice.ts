import { createSelector } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import { createReduxSlice } from 'app/core/redux/reduxCommon';
import { RootState } from 'app/core/redux/rootReducer';

export const getTrackDetailSlice = createReduxSlice<String>('getTrackDetail');

export const {
  request: getTrackDetail,
  success: getTrackDetailSuccess,
  failure: getTrackDetailFailure,
} = getTrackDetailSlice.actions;

export const getTrackDetailSelector = createSelector(
  (state: RootState) => state.track.getTrackDetail,
  (item: any) => item
);

export const GET_TRACK_DETAIL_QUERY = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        name
        id
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;
