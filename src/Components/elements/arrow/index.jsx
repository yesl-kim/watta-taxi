import React from 'react';
import { OneLine, RoundLine } from './line';

export const Arrow = ({ type, color, size }) =>
  type === 'oneWay' ? (
    <OneLine color={color} size={size} />
  ) : (
    <RoundLine color={color} size={size} />
  );

Arrow.defaultProps = {
  size: '76px',
};
