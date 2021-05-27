import React from 'react';
import styled, { css } from 'styled-components';

function LineTo({ type, color, size }) {
  return type === 'oneWay' ? (
    <OneLine color={color} size={size} />
  ) : (
    <RoundLine color={color} size={size} />
  );
}

export default LineTo;

const Line = styled.span`
  position: relative;
  width: ${({ size }) => size};
  height: 1px;
  border: 0;
`;

const roundArrow = (direction, color) => css`
  ${({ theme }) => theme.posCenterY()};
  ${direction}: 0;
  display: block;
  width: 8px;
  height: 8px;
  border: 1px solid ${color};
  border-radius: 50%;
  transform: translateX(${direction === 'left' ? '-100%' : '100%'});
  -webkit-transform: translate(
    ${direction === 'left' ? '-100%' : '100%'},
    -50%
  );
  content: '';
`;

const arrow = color => css`
  position: absolute;
  right: 1.5px;
  bottom: -1px;
  display: block;
  width: 1px;
  height: 6px;
  background-color: ${color};
  transform: rotate(-60deg);
  content: '';
`;

const background = color => css`
  background-color: ${color};
`;

const RoundLine = styled(Line)`
  ${({ color }) => css`
    ${background(color)};
    &:before {
      ${roundArrow('left', color)}
    }
    &:after {
      ${roundArrow('right', color)}
    }
  `}
`;

const OneLine = styled(Line)`
  ${({ color }) => css`
    ${background(color)};
    &:after {
      ${arrow(color)};
    }
  `}
`;

LineTo.defaultProps = {
  size: '76px',
};
