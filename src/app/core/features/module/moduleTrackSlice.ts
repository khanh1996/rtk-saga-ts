import { createSelector } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import { createReduxSlice } from 'app/core/redux/reduxCommon';
import { RootState } from 'app/core/redux/rootReducer';

export interface ModuleTrack {
  moduleId: string;
  trackId: string;
}

export const getModuleAndParentTrackSlice =
  createReduxSlice<ModuleTrack>('getModuleAndParentTrack');

export const {
  request: getModuleAndParentTrack,
  success: getModuleAndParentTrackSuccess,
  failure: getModuleAndParentTrackFailure,
} = getModuleAndParentTrackSlice.actions;

export const getModuleAndParentTrackSelector = createSelector(
  (state: RootState) => state.module.getModuleAndParentTrack,
  (item: any) => item
);

export const GET_MODULE_AND_PARENT_TRACK_QUERY = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;
