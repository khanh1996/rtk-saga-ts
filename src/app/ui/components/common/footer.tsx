import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles';

interface Props {
  children?: any;
}
const Footer = ({ children }: Props) => {
  return <FooterContainer>2021 {children}</FooterContainer>;
};
export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.pink.base,
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: 'white',
  borderTop: `solid 1px ${colors.pink.light}`,
});
