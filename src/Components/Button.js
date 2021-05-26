import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';

const Button = styled.button`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 2px;
  cursor: pointer;

  ${({ theme, color, outline, textColor }) => {
    const selected = theme[color] || color;
    if (outline) {
      return css`
        background-color: none;
        border: 1px solid ${selected};
        color: ${theme[textColor] || textColor || selected};
        &:hover {
          background-color: ${rgba(selected, 0.2)};
        }
      `;
    } else {
      return css`
        background-color: ${selected};
        color: ${theme[textColor] || textColor || '#fff'};
        &:hover {
          background-color: ${darken(0.1, selected)};
        }
      `;
    }
  }}
`;

export const RgbaBtn = styled(Button)`
  background-color: transparent;
  border: none;
  border-radius: 3px;
  ${({ color, theme }) => {
    const selected = theme[color] || color;
    return css`
      color: ${selected};

      &:hover {
        background-color: ${rgba(selected, 0.1)};
      }
    `;
  }}
`;

export default Button;
