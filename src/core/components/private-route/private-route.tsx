import React from 'react';
import { Route } from 'react-router-dom';
import { Props } from './types-props';

export const PrivateRoute = ({
  component,
  user,
  path,
  ...rest
}: Props): JSX.Element => {
  return user && <Route {...rest} path={path} component={component} />;
};
