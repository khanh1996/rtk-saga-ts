import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from 'app/ui/components/common/header';
import AuthCustomerLayout from './AuthCustomerLayout/AuthCustomerLayout';
import UnauthCustomerLayout from './UnauthCustomerLayout/UnauthCustomerLayout';
import Footer from 'app/ui/components/common/footer';
import Tracks from 'app/ui/pages/Tracks/TracksPage';
import { useSessionContext } from 'app/ui/hooks/useSessionContext';

function CustomerLayout() {
  const { path } = useRouteMatch();
  const isAuth = Boolean(localStorage.getItem('customer_token'));
  console.log('CustomerLayout', isAuth);
  if (!isAuth) {
    return (
      <Route path={`${path}`}>
        <UnauthCustomerLayout />
      </Route>
    );
  }
  return (
    <Route path={`${path}`}>
      <AuthCustomerLayout />
    </Route>
  );
}
export default CustomerLayout;
