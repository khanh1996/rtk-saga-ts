import { useEffect } from 'react';
import QueryResult from 'app/ui/components/common/QueryResult';
import ModuleDetail from 'app/ui/components/ModuleDetail/ModuleDetail';
import Layout from 'app/ui/layout/Layout';
import { useAppDispatch, useAppSelector } from 'app/core/redux/hooks';
import { useParams, useRouteMatch } from 'react-router-dom';
import {
  getModuleAndParentTrack,
  getModuleAndParentTrackSelector,
  ModuleTrack,
} from 'app/core/features/module/moduleTrackSlice';
import { getTrackDetailSelector } from 'app/core/features/track/trackDetail/trackDetailSlice';

const ModulePage = () => {
  const dispatch = useAppDispatch();
  const { data, isFetching, error } = useAppSelector(getModuleAndParentTrackSelector);

  const param = useParams<ModuleTrack>();

  useEffect(() => {
    dispatch(getModuleAndParentTrack({ moduleId: param.moduleId, trackId: param.trackId }));
  }, []);

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={isFetching} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default ModulePage;
