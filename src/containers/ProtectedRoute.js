import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Auth from '../utils/auth';
import UserContext from '../containers/UserContext';

export default function ProtectedRoute({ path, component: Component }) {
  const context = useContext(UserContext);
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (Auth.isAuthenticaded() && context.user) {
          return <Component {...routeProps} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
