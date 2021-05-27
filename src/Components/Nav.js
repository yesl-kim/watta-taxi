import React, { Component } from 'react';
import styled from 'styled-components';
import Button, { RgbaBtn } from './Button';

const Nav = () => {
  return (
    <Container>
      <WidthController>
        <LogoTitleSearchBarAndLogin>
          <LogoAndSearchBar>
            <LogoImg alt="watta_logo" src="/images/wa-ttaLogo_0.5.png" />
            <LogoText inputColor="#495056">Wa:tta Taxi</LogoText>
            <SearchBar type="text" placeholder="가고 싶은 역을 검색해보세요" />
          </LogoAndSearchBar>
          <LoginAndInfos>
            {/* 추후제작될 버튼 컴포넌트 사용 예정 */}
            <RgbaBtn width="120px" height="36px" color="darkGray">
              파트너 등록하기
            </RgbaBtn>
            <RgbaBtn width="70px" height="36px" color="darkGray">
              로그인
            </RgbaBtn>
            <Button width="100px" height="36px" color="blue">
              회원가입
            </Button>
          </LoginAndInfos>
        </LogoTitleSearchBarAndLogin>
        <div>
          <NavButton>🚤 와타택시 예약</NavButton>
          <NavButton>👮🏻‍♂️ 와타기사 정보</NavButton>
          <NavButton>🏨 숙소 정보</NavButton>
          <NavButton>🛳 투어</NavButton>
        </div>
      </WidthController>
    </Container>
  );
};

export default Nav;

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.5px solid lightgray;
`;

const WidthController = styled.div`
  max-width: 1060px;
  width: 100%;
`;

const LogoTitleSearchBarAndLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`;

const LogoAndSearchBar = styled.h1`
  background-color: white;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 9%;
  margin: 3px;
`;

const LogoText = styled.span`
  margin: 0 15px 0 3px;
  font-size: 26px;
  font-weight: bold;
  color: ${props =>
    props.inputColor || props.theme.main}; //props.theme.inputColor 외안됨
  /* color: ${({ theme }) => theme.main}; */
`;

const SearchBar = styled.input`
  background-color: #f5f6f7;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border-color: transparent;
  width: 250px;

  &:focus {
    outline: none;
    background-color: white;

    &::placeholder {
      opacity: 0;
    }
  }
`;

const LoginAndInfos = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 320px;
  width: 100%;
`;

const NavButton = styled.button`
  text-align: center;
  color: #495056;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  padding: 2px 15px 10px 15px;

  &:hover {
    border-bottom: 3px solid skyblue;
  }
`;
