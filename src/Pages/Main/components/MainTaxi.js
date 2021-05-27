import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
function MainTaxi() {
  const history = useHistory();
  const goToDeTailPage = driver => {
    history.push(`/detail/${driver.id}`);
  };
  const [driverBox, setDriver] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // http://3.34.199.216:8000/taxis/taxidrivers
    // /data/MockData.json
    fetch('http://3.34.199.216:8000/taxis/taxidrivers')
      .then(res => res.json())
      .then(data => {
        setDriver(data.drivers);
      });
  }, []);
  const prevSlide = () => {
    // 버튼을 누르면 ImageWrap 안에 있는 transform : translateX() 의 값이 변한다.
    setCount(count >= 0 ? count === 0 : count + 1019);
  };
  const nextSlide = () => {
    setCount(count < -3060 ? count === 0 : count - 1019);
  };
  return (
    <Container>
      <h1>오늘의 기사님을 확인해보세요!</h1>
      <ListContainer>
        <ListParent>
          <ListChildren>
            <img src="./images/rank.png" alt="" />
            <span>별점 순</span>
          </ListChildren>
          <ListChildren>
            <img src="./images/recent.png" alt="" />
            <span>최근 본 순</span>
          </ListChildren>
        </ListParent>
      </ListContainer>
      <InfoBox>
        <h3>이 기사님은 어떠세요?</h3>
        <PrevBtn onClick={prevSlide}>
          <IoIosArrowBack size="23" />
        </PrevBtn>
        <DriverBox>
          {driverBox.map((driver, index) => (
            <Driver
              key={index}
              transform={count}
              onClick={() => {
                goToDeTailPage(driver);
              }}
            >
              <img src={driver.profile_url} alt="" />
              <DriverInfo>
                <span>서울 . 수상택시</span>
                <h2>{driver.name}</h2>
                <p>{driver.introduction}</p>
                <Star>
                  <span>STAR : {driver.star}</span>
                </Star>
              </DriverInfo>
            </Driver>
          ))}
        </DriverBox>
        <NextBtn onClick={nextSlide}>
          <IoIosArrowForward size="23" />
        </NextBtn>
      </InfoBox>
    </Container>
  );
}
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
`;
const NextBtn = styled(PrevBtn)`
  left: auto;
  right: 0;
  transform: translate(50%, -50%);
`;
const InfoBox = styled.div`
  position: relative;
  margin-top: -1px;
  padding: 24px 18px;
  width: 1060px;
  border: 1px solid #dee2e6;
  h3 {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;
const DriverBox = styled.div`
  display: flex;
  max-width: 99%;
  height: 420px;
  overflow: hidden;
`;
const Driver = styled.div`
  display: inline-block;
  margin-top: 13px;
  margin-right: 18px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 16%);
  min-width: 237px;
  cursor: pointer;
  transform: ${props =>
    props.transform !== 0 && `translateX(${props.transform}px)`};
  transition: ease 0.5s;
  &:hover {
  }
  img {
    width: 100%;
    height: 50%;
    border-radius: 4px;
  }
  span {
    font-size: 12px;
    letter-spacing: 2px;
    color: #848c94;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    border-bottom: 1px dotted #848c94;
  }
  p {
    margin-bottom: 4px;
    line-height: 18px;
  }
`;
const DriverInfo = styled.div`
  padding: 8px 16px 7px;
`;
const Container = styled.div`
  width: 1060px;
  margin-bottom: 100px;
  h1 {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }
`;
const ListContainer = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0;
`;
const ListParent = styled.div`
  position: relative;
  display: flex;
`;
const ListChildren = styled.div`
  display: flex;
  padding: 14px;
  width: 265px;
  border: 1px solid #dee2e6;
  border-radius: 5px 5px 0 0;
  background-color: #f5f6f7;
  &:hover {
    background-color: #fff;
    border-bottom: 1px solid #fff;
  }
  img {
    margin-left: 20px;
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    letter-spacing: 1px;
    color: #343a40;
  }
`;
const Star = styled.div`
  vertical-align: bottom;
  span {
    align-self: flex-end;
  }
`;
export default MainTaxi;
