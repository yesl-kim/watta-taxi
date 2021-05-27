import React, { useState } from 'react';
import styled from 'styled-components';
import { API } from '../../../src/config';
import { GetToken, SetToken } from '../../Components/GetSetToken';
import Nav from '../../Components/Nav';
import Footer from '../Main/Components/MainFooter';

const { Kakao } = window;

export const token = {
  get: GetToken,
  set: SetToken,
};

const Login = ({ history }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const KakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${API.KAKAO_SIGNIN_AND_SIGNUP}`, {
          method: 'POST',
          body: JSON.stringify({
            access_token: authObj.access_token,
            refresh_token: authObj.refresh_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            token.set(res.access_token);
            const errorStatus = {
              400: '이미 email로 가입된 기록이 있습니다.',
              401: '다시 로그인 하세요',
            };
            const errorMsg = errorStatus[res.status];

            if (errorMsg) {
              return alert(errorMsg);
            }

            alert(`${res.user}님 Wa:tta Taxi에 오신것을 환영합니다!`);
            history.push('/');
          });
      },
      fail: function (err) {
        alert('무언가 잘못되었습니다.');
      },
    });
  };

  return (
    <>
      <Nav />
      <LoginContainer>
        <MovingIcon width="430" scrollamount="600">
          🚤
        </MovingIcon>
        <Title>{isSignUp ? 'Join Wa:tta!' : 'Welcome!'}</Title>
        <SubText>한강을 누비자! 와따택시</SubText>
        <KakaoLoginButton onClick={() => KakaoLogin()}>
          <KaKaoIcon alt="kakaoicon" src="/images/kakao.png" />
          카카오로 {isSignUp ? '회원가입' : '로그인'}
        </KakaoLoginButton>
        <EmailLogin>
          <EmailIcon alt="emailicon" src="/images/email.png" />
          이메일로 {isSignUp ? '로그인' : '회원가입'}
        </EmailLogin>
        <SignUpArea>
          {isSignUp ? '' : '아직 회원이 아니신가요?'}
          <SignUpButton onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? '로그인' : '회원가입'}
          </SignUpButton>
        </SignUpArea>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  ${({ theme }) => theme.flexBox('center', 'center')};
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  flex-direction: column;
  width: 430px;
  padding: 0 48px;
  border: 0.5px solid lightgray;
  margin: 100px 0px;
`;

const MovingIcon = styled.marquee`
  font-size: 70px;
  margin: 40px;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-top: 26px;
`;

const SubText = styled.p`
  font-size: 16px;
  margin-top: 12px;
  color: gray;
`;

const KakaoLoginButton = styled.button`
  background-color: #f7e327;
  width: 100%;
  ${({ theme }) => theme.flexBox('center', 'center')};
  padding: 0 32px;
  height: 48px;
  margin-top: 24px;
  margin-bottom: 25px;
  border: none;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;
  }
`;

const KaKaoIcon = styled.img`
  width: 5%;
  margin: 5px;
`;

const EmailLogin = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.darkGray};
  ${({ theme }) => theme.flexBox('center', 'center')};
  margin-bottom: 20px;
  opacity: 0.3;
  width: 160px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const EmailIcon = styled.img`
  width: 10%;
  margin: 0 3px;
`;

const SignUpArea = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.darkGray};
  margin-bottom: 40px;
`;

const SignUpButton = styled.button`
  border-bottom: 0.5px solid lightgray;
  background-color: transparent;
  padding: 0 5px;
  border: transparent;
  color: ${({ theme }) => theme.darkGray};
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
