import styled, { keyframes } from 'styled-components';
import { colors } from 'app/ui/utils/styles';
import Loading from './Loading';

interface Props {
  children?: any;
  loading: boolean;
  data: any;
  error?: string;
}

const QueryResult = ({ loading, data, children, error }: Props) => {
  if (error) {
    return <p>ERROR: {error}</p>;
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <Loading />
      </SpinnerContainer>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
