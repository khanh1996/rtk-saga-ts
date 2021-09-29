import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { colors } from '@apollo/space-kit/colors';

interface Props {
  width?: string;
  height?: string;
  borderWidth?: string;
}

const Loading = (props: Props) => {
  const { width, height, borderWidth } = props;
  return (
    <WrapperLoading className="lds-ring">
      <ItemLoading width={width} height={height} borderWidth={borderWidth}></ItemLoading>
      <ItemLoading width={width} height={height} borderWidth={borderWidth}></ItemLoading>
      <ItemLoading width={width} height={height} borderWidth={borderWidth}></ItemLoading>
      <ItemLoading width={width} height={height} borderWidth={borderWidth}></ItemLoading>
    </WrapperLoading>
  );
};

const WrapperLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotateLoading = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ItemLoading = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${(props: Props) => props.width || '64px'};
  height: ${(props: Props) => props.height || '64px'};
  margin: 8px;
  border: ${(props: Props) => props.borderWidth || '8px'} solid ${colors.silver.dark};
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

export default Loading;
