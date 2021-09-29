import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from 'app/ui/layout/Layout';
import TrackCard from 'app/ui/components/TrackCard/TrackCard';
import { useAppDispatch, useAppSelector } from 'app/core/redux/hooks';
import QueryResult from 'app/ui/components/common/QueryResult';
import { getTracks, getTracksSelector } from 'app/core/features/track/tracks/tracksSlice';
import SearchTracks from 'app/ui/components/SearchTracks/SearchTracks';

const TracksPage = () => {
  console.log('tracks Page');
  const dispatch = useAppDispatch();
  const { data, isFetching, error } = useAppSelector(getTracksSelector);
  console.log(error);

  useEffect(() => {
    dispatch(getTracks());
  }, []);

  return (
    <Layout grid>
      <SearchTracks classNames="a" placeholder="enter something" searchText="searchText" />
      <QueryResult data={data} loading={isFetching} error={error}>
        {data?.tracksForHome?.map((track: any) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default TracksPage;
