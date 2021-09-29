import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CustomerLoginPage from 'app/ui/pages/Customer/CustomerLoginPage';
import Header from 'app/ui/components/common/header';
import Footer from 'app/ui/components/common/footer';
import TracksPage from 'app/ui/pages/Tracks/TracksPage';
import TrackDetailPage from 'app/ui/pages/Tracks/TracksDetailPage';
import ModulePage from 'app/ui/pages/Module/ModulePage';
import NotFound from 'app/ui/components/common/NotFound';
import { ProtectedRoute, ProtectedRouteProps } from 'app/ui/router';
import ListPage from 'app/ui/pages/List';

const UnauthCustomerLayout = () => {
  const { path } = useRouteMatch();

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: Boolean(localStorage.getItem('customer_token')),
    authenticationPath: '/customer/login',
  };
  return (
    <>
      <Header />
      <Switch>
        <Route path={`${path}/login`} exact>
          <CustomerLoginPage />
        </Route>
        <Route path={`${path}/list`} exact>
          <ListPage />
        </Route>

        {/* <Route path={`${path}/tracks`} exact>
          <TracksPage />
        </Route> */}
        <ProtectedRoute {...defaultProtectedRouteProps} path="*">
          <NotFound />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </>
  );
};

export default UnauthCustomerLayout;
