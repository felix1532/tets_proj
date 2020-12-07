import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import { Props } from './types';

export const Loading = React.memo(function Loading({
  size = 'large',
  color = '#ffad06',
}: Props): JSX.Element {
  return <LoopCircleLoading size={size} color={color} />;
});
