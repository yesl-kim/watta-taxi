/* eslint-disable jsx-a11y/no-distracting-elements */
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
  const [box, setBox] = useState([]);

  useEffect(() => {
    const sorting = box === 'stars' ? 'rating' : 'review';

    fetch(`http://3.34.199.216:8000/taxis/taxidrivers?sort=${sorting}`)
      .then(res => res.json())
      .then(data => {
        setDriver(data.drivers);
      });
  }, [box]);
  const prevSlide = () => {
    setCount(count >= 0 ? count === 0 : count + 1019);
  };

  const nextSlide = () => {
    setCount(count < -3060 ? count === 0 : count - 1019);
  };

  const getSortedData = e => {
    setBox(e.target.id);
    console.log(box);
  };

  return (
    <Container>
      <h1>오늘의 기사님을 확인해보세요!</h1>
      <ListContainer>
        <ListParent>
          <ListChildren id="stars" onMouseEnter={getSortedData}>
            <font size="6">⭐️</font>
            <span>별점 순</span>
          </ListChildren>
          <ReviewPage id="review" onMouseEnter={getSortedData}>
            <font size="6">📝</font>
            <span>리뷰 많은 순</span>
          </ReviewPage>
        </ListParent>
      </ListContainer>
      <InfoBox>
        <h3>이 기사님은 어떠세요?</h3>
        <PrevBtn onClick={prevSlide}>
          <IoIosArrowBack size="23" />
        </PrevBtn>
        <marquee>
          <font size="10">🚤</font>
        </marquee>
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
                <div>
                  <span>서울 . 수상택시</span>
                  <p style={{ color: '#506ad4' }}>{driver.taxi_company_name}</p>
                </div>
                <div>
                  <h2>{driver.name}</h2>
                  <p>{driver.introduction}</p>

                  <Evaluate>
                    <span>
                      ⭐️{Math.round(driver.average_rating * 10) / 10}
                    </span>
                    <h4>📝Review : {driver.review_count}</h4>
                  </Evaluate>
                </div>
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
  overflow: hidden;
  border-top: 10px solid #a3cdd9;
  padding-bottom: 5px;
`;
const Driver = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 5px;
  margin-right: 18px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 16%);
  min-width: 237px;
  cursor: pointer;
  padding-bottom: 10px;
  height: 415px;
  transform: ${props =>
    props.transform !== 0 && `translateX(${props.transform}px)`};
  transition: ease 0.5s;

  &:hover {
    box-shadow: 0 8px 12px 0 rgb(33 37 41 / 15%);
    background-color: ${props => props.theme.lightGray};

    h2 {
      font-size: 16px;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 230px;
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
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 20px;
    color: gray;
  }

  h4 {
    color: ${props => props.theme.darkGray};
  }
`;
const DriverInfo = styled.div`
  padding: 8px 16px 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 12px;
  }
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
  justify-content: center;
  align-items: center;
  padding: 14px;
  width: 200px;
  border: 1px solid #dee2e6;
  border-radius: 5px 5px 0 0;
  background-color: #f5f6f7;
  &:hover {
    background-color: ${props => props.theme.main};
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 1px;
    color: #343a40;
  }
`;

const ReviewPage = styled(ListChildren)``;

const Evaluate = styled.div`
  position: absolute;
  bottom: 10px;
`;

export default MainTaxi;
