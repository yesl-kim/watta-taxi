import styled, { css } from 'styled-components';

export const Box = styled.div`
  background-color: #fff;
  border-radius: 2px;
`;

export const InputBox = styled(Box)`
  ${({ theme }) => theme.flexBox('start', 'center')};
  flex-basis: ${({ size }) => size};
  margin-left: 4px;
  padding: 0 14px;
  height: 48px;
  transition: all 0.2s ease;

  &:nth-child(2) {
    margin-left: 0;
  }

  &:hover {
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 15%), 0 0 1px 0 rgb(0 0 0 / 10%),
      0 0 0 3px rgb(255 255 255 / 30%);
  }

  ${({ iconUrl }) =>
    iconUrl &&
    css`
      padding-left: 44px;
      background: url(${iconUrl}) no-repeat 12px center/22px #fff;
    `}
`;

export const Input = styled.input.attrs(props => ({ readOnly: true }))`
  width: 100%;
  height: 100%;
  font-size: 16px;
  cursor: pointer;

  &::placeholder {
    font-size: 16px;
    color: #d7dbde;
  }
`;

export const selectBox = styled(Box)`
  display: block;
  padding: 28px 32px;
  box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%), 0 1px 4px 0 rgb(0 0 0 / 15%);
`;

export const TooltipBox = styled(selectBox)`
  position: absolute;
  top: 54px;
  left: 4px;
  width: ${({ size }) => size};
`;
