import { css } from 'styled-components';

export const bold = css`
  font-weight: 600;
`;

export const size = value => {
  const sizes = {
    xs: '13px',
    s: '14px',
    m: '16px',
    l: '20px',
  };
  return css`
    font-size: ${sizes[value]};
  `;
};

// 회색 폰트 컬러
export const color = (value = 400) => {
  const colors = {
    100: '#848c94',
    200: '#666d75',
    400: '#343a40',
  };
  return css`
    color: ${colors[value]};
  `;
};
