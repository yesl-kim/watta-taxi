import React from 'react';
import SearchMenu from './Components/SearchMenu';
import styled from 'styled-components';

function MainTaxi() {
  return (
    <Top>
      <TestNav />
      <SearchMenu />
    </Top>
  );
}

export default MainTaxi;

const Top = styled.div`
  position: relative;
  background: url('/images/loadingBg.jpg') no-repeat center center/cover;

  &::before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(17, 17, 77, 0.15);
    mix-blend-mode: color-burn;
    content: '';
  }
`;

const TestNav = styled.nav`
  position: relative;
  height: 122px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;
