import { css } from 'styled-components';

export const roundArrow = (direction, color) => css`
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

export const arrow = color => css`
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
