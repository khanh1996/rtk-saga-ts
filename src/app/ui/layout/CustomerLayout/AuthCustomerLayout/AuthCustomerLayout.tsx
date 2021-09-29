import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import { ProtectedRoute, ProtectedRouteProps } from 'app/ui/router';
import CustomerInfoPage from 'app/ui/pages/Customer/CustomerInfoPage';
import { useSessionContext } from 'app/ui/hooks/useSessionContext';
import CustomerLoginPage from 'app/ui/pages/Customer/CustomerLoginPage';
import Header from 'app/ui/components/common/header';
import Footer from 'app/ui/components/common/footer';
import TracksPage from 'app/ui/pages/Tracks/TracksPage';
import NotFound from 'app/ui/components/common/NotFound';
import TrackDetailPage from 'app/ui/pages/Tracks/TracksDetailPage';
import ModulePage from 'app/ui/pages/Module/ModulePage';
import QueryPage from 'app/ui/pages/Query';

const AuthCustomerLayout = () => {
  const { path } = useRouteMatch();
  const currentLocation = useLocation();

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: Boolean(localStorage.getItem('customer_token')),
    authenticationPath: '/customer/login',
  };
  return (
    <>
      <Header />
      <Switch>
        <ProtectedRoute {...defaultProtectedRouteProps} path={`${path}/info`} exact>
          <CustomerInfoPage />
        </ProtectedRoute>
        <ProtectedRoute {...defaultProtectedRouteProps} path={`${path}/tracks`} exact>
          <TracksPage />
        </ProtectedRoute>
        <ProtectedRoute {...defaultProtectedRouteProps} path={`${path}/track/:trackId`} exact>
          <TrackDetailPage />
        </ProtectedRoute>
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path={`${path}/track/:trackId/module/:moduleId`}
          exact
        >
          <ModulePage />
        </ProtectedRoute>

        <ProtectedRoute {...defaultProtectedRouteProps} path={`${path}/query`} exact>
          <QueryPage />
        </ProtectedRoute>
        <ProtectedRoute {...defaultProtectedRouteProps} path="*">
          <Redirect to={`${path}/tracks`}></Redirect>
        </ProtectedRoute>
      </Switch>
      <Footer />
    </>
  );
};

AuthCustomerLayout.propTypes = {};

export default AuthCustomerLayout;
