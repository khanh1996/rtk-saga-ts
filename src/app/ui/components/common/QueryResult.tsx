import styled, { keyframes } from 'styled-components';
import { GenericState } from 'app/core/redux/reduxCommon';
import { colors } from 'app/ui/utils/styles';

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
        <WrapperLoading className="lds-ring">
          <ItemLoading></ItemLoading>
          <ItemLoading></ItemLoading>
          <ItemLoading></ItemLoading>
          <ItemLoading></ItemLoading>
        </WrapperLoading>
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

const rotateLoading = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const WrapperLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const ItemLoading = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${colors.silver.dark};
  border-radius: 50%;
  animation: ${rotateLoading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${colors.silver.dark} transparent transparent transparent;
  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &::nth-child(2) {
    animation-delay: -0.3s;
  }
  &::nth-child(3) {
    animation-delay: -0.15s;
  }
`;
