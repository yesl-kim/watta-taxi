import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button, { RgbaBtn } from './Button';
import { API } from '../config';
import { GetToken, SetToken, RemoveToken } from './GetSetToken';
import SearchMenu from '../Pages/Main/Components/SearchMenu';

export const token = {
  //왜 export 쓰지?
  get: GetToken,
  set: SetToken,
  remove: RemoveToken,
};

const Nav = ({ history }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [profileImg, setProfileImg] = useState('');
  const [searchMenuVisibility, setSearchMenuVisibility] = useState(false);

  const logout = () => {
    fetch(`${API.LOGOUT}`, {
      method: 'POST',
      body: JSON.stringify({
        access_token: token.get(),
      }),
    })
      .then(res => res.json())
      .then(res => {
        token.remove();
        setIsLogin(false);
        alert('로그아웃이 완료되었습니다.');
        goToMain();
      });
  };

  const goToMain = () => {
    history.push('/');
  };

  const goToReserve = () => {
    history.push('/reserve');
  };

  const goToLogin = () => {
    history.push('/login');
  };

  const goToSignUp = () => {
    history.push('/login/signup');
  };

  useEffect(() => {
    fetch(`${API.USER_INFO}`, {
      headers: {
        Authorization: sessionStorage.getItem('Watta_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'login_required') {
          alert('로그인을 해주세요');
          return;
        }
        if (res.message === 'success') {
          setProfileImg(res.user_info.profile_url);
          setIsLogin(true);
        }
      });
  }, []);

  return (
    <>
      <Container>
        <WidthController>
          <LogoTitleSearchBarAndLogin>
            <LogoAndSearchBar>
              <LogoImg
                alt="watta_logo"
                src="/images/wa-ttaLogo_0.5.png"
                onClick={() => goToMain()}
              />
              <LogoText inputColor="#495056" onClick={() => goToMain()}>
                Wa:tta Taxi
              </LogoText>
              <MiniSearchBar
                type="text"
                placeholder="가고 싶은 역을 검색해보세요"
              />
            </LogoAndSearchBar>
            <LoginAndInfos>
              <RgbaBtn width="120px" height="36px" color="darkGray">
                파트너 등록하기
              </RgbaBtn>
              {isLogin ? (
                <>
                  <RgbaBtn
                    width="70px"
                    height="36px"
                    color="darkGray"
                    onClick={logout}
                  >
                    로그아웃
                  </RgbaBtn>
                  <RgbaBtn
                    width="70px"
                    height="36px"
                    color="darkGray"
                    onClick={goToReserve}
                  >
                    예약내역
                  </RgbaBtn>
                  <ProfileImg alt="profileimage" src={profileImg} />
                </>
              ) : (
                <>
                  <RgbaBtn
                    width="70px"
                    height="36px"
                    color="darkGray"
                    onClick={goToLogin}
                  >
                    로그인
                  </RgbaBtn>
                  <Button
                    width="100px"
                    height="36px"
                    color="blue"
                    onClick={goToSignUp}
                  >
                    회원가입
                  </Button>
                </>
              )}
            </LoginAndInfos>
          </LogoTitleSearchBarAndLogin>
          <div>
            {/* <Link to="/list"> */}
            <NavButton
              onClick={() => setSearchMenuVisibility(!searchMenuVisibility)}
            >
              🚤 와타택시 예약
            </NavButton>
            {/* </Link> */}
            <NavButton>👮🏻‍♂️ 와타기사 정보</NavButton>
            <NavButton>🏨 숙소 정보</NavButton>
            <NavButton>🛳 투어</NavButton>
          </div>
        </WidthController>
      </Container>
      <SearchMenuHider visibility={searchMenuVisibility}>
        <SearchMenu visibility={searchMenuVisibility} />
      </SearchMenuHider>
    </>
  );
};

export default withRouter(Nav);

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
  width: 10%;
  margin: 3px;
  cursor: pointer;
`;

const LogoText = styled.span`
  margin: 0 15px 0 3px;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  color: ${props =>
    props.inputColor || props.theme.main}; //props.theme.inputColor 외안됨
  /* color: ${({ theme }) => theme.main}; */
`;

const MiniSearchBar = styled.input`
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
  justify-content: flex-end;
  margin-left: auto;
  max-width: 320px;
  width: 100%;
`;

const ProfileImg = styled.img`
  width: 10%;
  margin-left: 10px;
  border-radius: 70%;
  border-style: solid;
  border-width: 2px;
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

const SearchMenuHider = styled.div`
  height: ${props => (props.visibility ? '300px' : 0)};
  overflow: ${props => (props.visibility ? '' : 'hidden')};
  transition: height 0.5s;
`;
