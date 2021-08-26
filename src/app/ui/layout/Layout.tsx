import React from 'react';
import styled from 'styled-components';
import { unit, widths } from '../utils/styles';

interface Props {
  fullWidth?: number | undefined | boolean;
  children?: any;
  grid?: string | boolean;
}

const Layout = ({ fullWidth, children, grid }: Props) => {
  return (
    <>
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div<any>`
  display: flex;
  justify-content: ${(props) => (props.grid ? 'center' : 'top')};
  flex-direction: ${(props) => (props.grid ? 'row' : 'column')};
  flex-wrap: wrap;
  align-self: center;
  flex-grow: 1;
  max-width: ${(props) => (props.fullWidth ? null : widths.regularPageWidth)}px;
  width: 100%;
  padding: ${(props) => (props.fullWidth ? 0 : unit * 2)}px;
  padding-bottom: ${unit * 5}px;
`;

export default Layout;
