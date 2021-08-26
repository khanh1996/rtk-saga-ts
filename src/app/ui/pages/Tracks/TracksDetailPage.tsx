import { gql } from '@apollo/client';
import {
  getTrackDetail,
  getTrackDetailSelector,
} from 'app/core/features/track/trackDetail/trackDetailSlice';
import { useAppDispatch, useAppSelector } from 'app/core/redux/hooks';
import QueryResult from 'app/ui/components/common/QueryResult';
import TrackDetail from 'app/ui/components/TrackDetail/TrackDetail';
import Layout from 'app/ui/layout/Layout';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
  trackId: string;
}

const TrackDetailPage = () => {
  const dispatch = useAppDispatch();
  const { data, isFetching, error } = useAppSelector(getTrackDetailSelector);
  const { trackId } = useParams<RouteParams>();
  useEffect(() => {
    dispatch(getTrackDetail(trackId));
  }, []);

  return (
    <Layout>
      <QueryResult error={error} loading={isFetching} data={data}>
        <TrackDetail key={data?.track.id} track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
export default TrackDetailPage;
