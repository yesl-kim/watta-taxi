import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function MainFooter() {
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    fetch('/data/MockData.json')
      .then(res => res.json())
      .then(data => {
        setInputs(data.sns);
      });
  }, []);

  return (
    <Container>
      <Footer>
        <img src="./images/profile.png" alt="" />
        <InviteFriend>
          <p>
            친구 초대하면 <span>무제한 포인트</span>를 드립니다!
          </p>
          <span>친구에게 5,000원 쿠폰을 선물하고 2,000 포인트를 받으세요.</span>
        </InviteFriend>
        <Button>포인트 받기</Button>
      </Footer>
      <Section>
        <h1>Wa::tta Taxi의 여행 정보</h1>
        <TripSns>
          {inputs.map((input, index) => (
            <Sns key={index}>
              <img src={input.imageUrl} alt="" />
              <span>{input.text}</span>
              <p>{input.description}</p>
            </Sns>
          ))}
        </TripSns>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 1070px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 27px 32px;
  margin-top: 50px;
  margin-bottom: 56px;
  border-radius: 4px;
  border: 1px solid #e7f4fd;
  background-color: #f5fbff;

  img {
    margin-right: 20px;
    width: 70px;
    height: 55px;
  }
`;

const InviteFriend = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 56px;

  p {
    margin-top: 5px;
    margin-bottom: 12px;
    font-size: 19px;
    font-weight: 600;
    span {
      color: #2b96ed;
    }
  }
`;

const Button = styled.button`
  padding: 13px 5px;
  width: 100px;
  font-size: 14px;
  border: 1px solid #51abf3;
  border-radius: 4px;
  background-color: #51abf3;
  color: #fff;
`;

const Section = styled.div`
  margin-bottom: 120px;
  letter-spacing: 0px;

  h1 {
    margin-bottom: 16px;
    color: #343a40;
    font-size: 24px;
    font-weight: 700;
  }
`;

const TripSns = styled.div`
  text-align: center;
  padding: 42px 0px;
  width: 1070px;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
`;

const Sns = styled.div`
  display: inline-block;
  text-align: left;
  margin-right: 56px;
  width: 244px;

  img {
    width: 32px;
    height: 30px;
    background-color: transparent;
  }

  span {
    margin: 8px 0px 10px 0px;
    display: block;
    font-size: 15px;
    font-weight: 700;
    color: #2b96ed;
  }

  p {
    color: #666d75;
    font-size: 14px;
    line-height: 1.71;
  }
`;

export default MainFooter;
