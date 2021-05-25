import React from 'react';
import styled, { keyframes } from 'styled-components';
import DestinationBox from './Components/DestinationBox';

function Loading() {
  return (
    <Container>
      <Description>
        <span>김포</span>에서 <span>제주</span>까지
        <br />
        왕복 항공권을 찾고 있습니다.
      </Description>
      <DestinationBox />
      <Description small>
        와타택시에서 숙소 예약하고
        <br />
        <span>72,000원</span> 받아가세요
      </Description>
      <Icon>
        <span />
      </Icon>
    </Container>
  );
}

export default Loading;

const loading = keyframes`
  0% {
        background-position-x: 0px;
  }
  25% {
    background-position-x: -50px;
  }
  50% {
    background-position-x: -100px;
  }
  75% {
    background-position-x: -150px;
  }
  100% {
    background-position-x: 0px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0.7;
  }
  to {
    opacity: 0.25;
  }
`;

const moveToRight = keyframes`
  from {
    background-position: right center;
  }
  to {
    background-position: left center;
  }
`;

const Container = styled.div`
  position: relative;
  ${({ theme }) => theme.flexBox('center', 'center')}
  flex-direction: column;
  height: 100vh;
  background-image: url('/images/loadingBg.jpg');
  background-size: 105%;
  animation: ${moveToRight} 10s linear 1 forwards;

  &:before {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    animation: ${fadeIn} 5s ease 1 forwards;
    content: '';
  }
`;

const Description = styled.p`
  position: relative;
  color: #f5fbff;
  font-size: ${props => (props.small ? '15px' : '20px')};
  line-height: 1.4;
  text-align: center;

  span {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
  }
`;

const Icon = styled.div`
  position: relative;
  ${({ theme }) => theme.flexBox('center', 'center')}
  margin-top: 150px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #fff;

  span {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url('/images/loadingIcon.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 0;
    background-position-y: 0;
    animation: ${loading} 2s step-end infinite;
  }
`;
