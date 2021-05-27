import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SearchBar from '../../../Components/Search/SearchBar';

function SearchMenu() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const tabBtnProps = {
    roundTrip: {
      clicked: isRoundTrip,
      onClick: () => {
        setIsRoundTrip(true);
      },
    },
    onwayTrip: {
      clicked: !isRoundTrip,
      onClick: () => {
        setIsRoundTrip(false);
      },
    },
  };

  return (
    <Container>
      <Tab>
        <TabBtn {...tabBtnProps.roundTrip}>왕복</TabBtn>
        <TabBtn {...tabBtnProps.onwayTrip}>편도</TabBtn>
      </Tab>
      <SearchBar isRoundTrip={isRoundTrip} />
    </Container>
  );
}

export default SearchMenu;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 55px 0;
  width: 1064px;
`;

const Tab = styled.ul`
  display: flex;
  margin-bottom: 17px;
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
