import { gql, useQuery } from '@apollo/client';
import { createSelector } from '@reduxjs/toolkit';
import { createReduxSlice, GenericState } from 'app/core/redux/reduxCommon';
import { RootState } from 'app/core/redux/rootReducer';

// undefined dispath action haven't params
export const getTracksSlice = createReduxSlice<undefined>('getTracks');

export const {
  request: getTracks,
  reset: getTracksReset,
  success: getTracksSuccess,
  failure: getTracksFailure,
} = getTracksSlice.actions;

export const getTracksSelector = createSelector(
  (state: RootState) => state.track.getTracks,
  (item: any) => item
);

export const GET_TRACKS_QUERY = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;
