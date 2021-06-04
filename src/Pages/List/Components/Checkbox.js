import React from 'react';
import styled from 'styled-components';
import { FaCheckSquare } from 'react-icons/fa';
import { color, size } from './fontStyle';

function CheckBox({ children, checked, onChange, ...rest }) {
  return (
    <Label>
      <input type="checkbox" checked={checked} onChange={onChange} {...rest} />
      {checked ? <Checked /> : <Unchecked />}
      <span>{children}</span>
    </Label>
  );
}

function CheckBoxes({ title, subTopics, onChange, check }) {
  return (
    <Container>
      <li>
        <h2>{title}</h2>
        <div>
          {subTopics.map(subTopic => (
            <CheckBox
              key={subTopic.id}
              name={subTopic.name}
              checked={check[subTopic.name]}
              onChange={onChange}
            >
              {subTopic.time
                ? `${subTopic.name} ${subTopic.time}`
                : subTopic.name}
            </CheckBox>
          ))}
        </div>
      </li>
    </Container>
  );
}

export default CheckBoxes;

const Label = styled.label`
  ${({ theme }) => theme.flexBox('start', 'center')};
  margin-top: 8px;
  cursor: pointer;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    ${size('s')};
    ${color()};
  }
`;

const Unchecked = styled.i`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: #fff;
  border: 1px solid #ced4da;
  border-radius: 2px;
`;

const Checked = styled(FaCheckSquare)`
  margin-right: 10px;
  ${size('l')};
  color: ${({ theme }) => theme.skyBlue};
`;

const Container = styled.ul`
  padding-left: 20px;

  li {
    padding: 20px 0;
    border-top: 1px solid #dee2e6;

    h2 {
      margin-bottom: 20px;
      border-radius: 2px;
      cursor: pointer;
      transition: background-color ease-in-out 0.1s;

      &:hover {
        background-color: #e9ecef;
      }
    }
  }
`;
