import React, { Component } from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <LoginContainer>
      <MovingIcon width="430" scrollamount="600">
        🚤
      </MovingIcon>
      <Title>Welcome!</Title>
      <SubText>한강을 누비자! 와따택시</SubText>
      <KakaoLoginButton>
        <KaKaoIcon alt="kakaoicon" src="/images/kakao.png" />
        카카오로 계속하기
      </KakaoLoginButton>
      <EmailLogin>
        <EmailIcon alt="emailicon" src="/images/email.png" />
        이메일
      </EmailLogin>
      <SignUpArea>
        아직 회원이 아니신가요?
        <SignUpButton>회원가입</SignUpButton>
      </SignUpArea>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  ${({ theme }) => theme.flexBox('center', 'center')};
  ${({ theme }) => theme.posCenter()}
  flex-direction: column;
  width: 430px;
  padding: 0 48px;
  border: 0.5px solid lightgray;
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
  width: 80px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const EmailIcon = styled.img`
  width: 20%;
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
  border: transparent;
  color: ${({ theme }) => theme.darkGray};
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
