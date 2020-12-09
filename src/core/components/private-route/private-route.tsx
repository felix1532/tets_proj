import React from 'react';
import { Route } from 'react-router-dom';
import { Props } from './types';

export const PrivateRoute = ({
  component,
  user,
  path,
  ...other
}: Props): JSX.Element => {
  return user && <Route {...other} path={path} component={component} />;
};
