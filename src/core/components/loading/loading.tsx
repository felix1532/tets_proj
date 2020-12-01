import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import { Props } from './types';

export const Loading = React.memo(function Loading({
  size = '#ffad06',
  color = 'large',
}: Props): JSX.Element {
  return <LoopCircleLoading size={size} color={color} />;
});
