import { useEffect } from 'react';
import { Redirect, Route, RouteProps, useHistory, useLocation } from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  [hey: string]: any;
} & RouteProps;

export function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  component,
  ...routeProps
}: ProtectedRouteProps) {
  const currentLocation = useLocation();
  const history = useHistory();
  console.log(currentLocation);
  console.log('isAuthenticated:', isAuthenticated);
  console.log('authenticationPath:', authenticationPath);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (e) {
      window.scroll(0, 0);
    }
  }, [history.location.pathname]);

  if (isAuthenticated) {
    console.log('AAAA');
    return <Route {...routeProps} component={component} />;
  } else {
    console.log('BBB');
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
}
