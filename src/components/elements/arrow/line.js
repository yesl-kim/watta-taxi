import styled, { css } from 'styled-components';
import { roundArrow, arrow } from './arrow';

const background = color => css`
  background-color: ${color};
`;

const Line = styled.span`
  position: relative;
  width: ${({ size }) => size};
  height: 1px;
  border: 0;
`;

export const RoundLine = styled(Line)`
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

export const OneLine = styled(Line)`
  ${({ color }) => css`
    ${background(color)};
    &:after {
      ${arrow(color)};
    }
  `}
`;
