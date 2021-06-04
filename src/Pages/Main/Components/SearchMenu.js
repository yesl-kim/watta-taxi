import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import SearchBar from '../../../Components/Search/SearchBar';

function SearchMenu() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const setRoundTrip = () => {
    setIsRoundTrip(true);
  };

  const setOneWayTrip = () => {
    setIsRoundTrip(false);
  };

  return (
    <Container>
      <Tab>
        <TabBtn clicked={isRoundTrip} onClick={setRoundTrip}>
          왕복
        </TabBtn>
        <TabBtn clicked={!isRoundTrip} onClick={setOneWayTrip}>
          편도
        </TabBtn>
      </Tab>
      <SearchBar isRoundTrip={isRoundTrip} />
    </Container>
  );
}

export default SearchMenu;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 0;
  width: 100%;
  background-color: ${({ theme }) => darken(0.1, theme.blue)};
  z-index: 9999;
`;

const Tab = styled.ul`
  display: flex;
  margin-bottom: 17px;
  width: 1050px;
`;

const TabBtn = styled.li`
  margin-right: 8px;
  padding-bottom: 8px;
  width: 64px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 0.9;
  }

  ${({ clicked }) =>
    clicked &&
    css`
      border-bottom: 2px solid #fff;
      font-weight: normal;
      opacity: 1;
    `}
`;
