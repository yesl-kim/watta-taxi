import { css } from 'styled-components';

const flexMap = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
  center: 'center',
};

const flexBox = (js, ai) => css`
  display: flex;
  justify-content: ${flexMap[js] || js};
  align-items: ${flexMap[ai] || ai};
`;

const posCenter = (type = 'absolute') => css`
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const posCenterX = (type = 'absolute') => css`
  position: ${type};
  left: 50%;
  transform: translateX(-50%);
`;

const posCenterY = (type = 'absolute') => css`
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
`;

const mixin = {
  flexBox,
  posCenter,
  posCenterX,
  posCenterY,
};

export default mixin;
