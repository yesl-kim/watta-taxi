import React from 'react';
import styled from 'styled-components';

function FilterBox({ title, onChange, children, ...rest }) {
  return (
    <Container onChange={onChange} {...rest}>
      <li>
        <h2>{title}</h2>
        <div>{children}</div>
      </li>
    </Container>
  );
}

export default FilterBox;

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
