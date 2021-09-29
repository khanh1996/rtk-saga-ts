import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/space_cat_logo.png';
import { Button, colors, IconDoubleArrowRight, widths } from 'app/ui/utils/styles';
import { useAppDispatch, useAppSelector } from 'app/core/redux/hooks';
import { logout, logoutSelector } from 'app/core/features/customer/logout/logoutSlice';
import Loading from './Loading';
import { loginSelector } from 'app/core/features/customer/login/loginSlice';

/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
interface Props {
  children?: any;
}
const Header = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { isFetching, data } = useAppSelector(logoutSelector);
  const { data: customer } = useAppSelector(loginSelector);
  const isShowButtonLogout = Boolean(localStorage.getItem('customer_token'));
  function onClickLogout() {
    console.log('onClickLogout');
    dispatch(logout());
  }
  console.log(data);
  console.log('token');
  console.log('isFetching', isFetching);

  console.log('isShowButtonLogout', isShowButtonLogout);

  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <LogoContainer>
                <Logo src={logo} />
              </LogoContainer>
              <Title>
                <h3>Catstronaut</h3>
                <div>Kitty space academy</div>
              </Title>
            </HomeButton>
          </HomeLink>
          {customer?.token && (
            <ButtonLogout onClick={onClickLogout} color="#f25cc1">
              {isFetching ? <Loading width="30px" height="30px" borderWidth="3px" /> : 'Logout'}
            </ButtonLogout>
          )}
        </HomeButtonContainer>
        {children}
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `solid 1px ${colors.pink.light}`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

const HomeLink = styled(Link)({
  textDecoration: 'none',
});

const ButtonLogout = styled(Button)`
  background-color: ${colors.accent};
  border-radius: 4px;
  border-width: 0px;
  cursor: pointer;
  font-size: 18px;
  padding-left: 12px;
  padding-right: 12px;
  color: ${colors.white};
  height: 33px;
`;

const HomeButtonContainer = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
});

const HomeButton = styled.div({
  display: 'flex',
  flexDirection: 'row',
  color: colors.accent,
  alignItems: 'center',
  ':hover': {
    color: colors.pink.dark,
  },
});

const LogoContainer = styled.div({ display: 'flex', alignSelf: 'center' });

const Logo = styled.img({
  height: 60,
  width: 60,
  marginRight: 8,
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
  },
});
