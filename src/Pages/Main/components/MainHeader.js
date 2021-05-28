import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function MainHeader() {
  const [stationBox, setStation] = useState([]);

  useEffect(() => {
    fetch('/data/MockData.json')
      .then(res => res.json())
      .then(data => {
        setStation(data.station);
      });
  }, []);

  return (
    <Header>
      <Title>
        <h1>어디로 떠나세요?</h1>
      </Title>
      <SwiperContainer>
        <PrevBtn>
          <IoIosArrowBack size="23" />
        </PrevBtn>
        {stationBox.map((station, index) => (
          <SwiperToken key={index}>
            <img src={station.imageUrl} alt="" />
            <InfoBox>
              <LocationName>
                <span>{station.stationName}</span>
                <div>
                  <span>{station.description}</span>
                </div>
              </LocationName>
            </InfoBox>
            <Button>둘러보기</Button>
          </SwiperToken>
        ))}
        <NextBtn>
          <IoIosArrowForward size="23" />
        </NextBtn>
      </SwiperContainer>
    </Header>
  );
}

const effect = keyframes`
from{
  transform: scale(1.3);
    transition-duration: 3s;
    transition-timing-function: ease-in;
    z-index: -1;
}
`;

const Header = styled.div`
  margin-bottom: 64px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 56px 0px 32px;

  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: -0.2px;
    text-align: left;
  }
`;

const SwiperContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 359px;
`;

const PrevBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0%;
  top: 50%;
  width: 40px;
  transform: translate(-50%, -50%);
  padding: 8px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 5%), 0 3px 5px 0 rgb(0 0 0 / 10%);

  &:hover {
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 6px 0 rgb(0 0 0 / 35%),
      0 8px 12px 0 rgb(0 0 0 / 20%);
  }
`;

const NextBtn = styled(PrevBtn)`
  left: 100%;
  transform: translate(-100%, -50%);
`;

const SwiperToken = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 20px;
  width: 240px;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 8px 12px 0 rgb(33 37 41 / 15%);

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  img:hover {
    animation: ${effect} 3s linear infinite;
  }
`;
const InfoBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 202px;
  top: 32px;
  left: 24px;
  font-size: 30px;
`;

const LocationName = styled.div`
  position: absolute;
  margin-bottom: 8px;
  width: 200px;
  font-size: 30px;
  color: #fff;

  span {
    display: block;
    font-size: 28px;
  }

  div {
    margin-top: 12px;
    width: 200px;

    span {
      font-size: 18px;
      letter-spacing: 0px;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  width: 75px;
  padding: 10px;
  left: 24px;
  bottom: 28px;
  border-radius: 4px;
  background-color: #fff;
  font-weight: 600;
  font-size: 14px;
  color: #495056;
  cursor: pointer;
`;

export default MainHeader;
