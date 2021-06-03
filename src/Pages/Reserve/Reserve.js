import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { bold, size, color } from '../List/Components/fontStyle';
import LineTo from '../../Components/LineTo';
import Nav from '../../../src/Components/Nav';
import Footer from '../Main/Components/MainFooter';

function Reserve() {
  const [reservedTaxi, setReservedTaxi] = useState([]);

  useEffect(() => {
    // fetch('/data/reserve.json')
    fetch('http://3.34.199.216:8000/orders', {
      headers: {
        AUTHORIZATION: sessionStorage.getItem('Watta_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setReservedTaxi(data.result);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <General>
        <GeneralTitle>내 예약 🚕</GeneralTitle>
        <GeneralSection>
          <ExpectCourse>
            <BlueLine></BlueLine>
            <CourseText>예정된 예약</CourseText>
          </ExpectCourse>
          {reservedTaxi.length === 0 ? (
            <NoReservations>예약된 내역이 없습니다.</NoReservations>
          ) : (
            <div>
              {reservedTaxi &&
                reservedTaxi.map(reserved => (
                  <>
                    <BigContainer>
                      <Container>
                        <div>
                          <FlexBox>
                            <Logo>
                              <img
                                alt="택시회사로고"
                                src={reserved.going_taxi_company_logo}
                              />
                            </Logo>
                            <Company>
                              <Word>{reserved.going_taxi_company_name}</Word>
                            </Company>
                          </FlexBox>
                        </div>
                        <ScheduleContainer>
                          <Area>{reserved.departure_location}</Area>
                          <Schedule>
                            <Departure>
                              <FlightTime>
                                {reserved.going_departure_time.slice(-8, -3)}
                              </FlightTime>
                              <SpotCode>
                                {reserved.departure_location_code}
                                <br />
                                {reserved.departure_date}
                              </SpotCode>
                            </Departure>
                            <TimeGroup>
                              <LineTo type="oneWay" color="#848c94" />
                            </TimeGroup>
                            <Arrival>
                              <FlightTime>
                                {reserved.going_arrival_time.slice(-8, -3)}
                              </FlightTime>
                              <SpotCode>
                                {reserved.arrival_location_code}
                                <br />
                                {reserved.departure_date}
                              </SpotCode>
                            </Arrival>
                          </Schedule>
                          <Area>{reserved.arrival_location}</Area>
                        </ScheduleContainer>
                        <Word>{reserved.passenger_number}명</Word>
                        <Word>{reserved.round_trip}</Word>
                        <PriceContainer>
                          <PriceTitle>비용</PriceTitle>
                          <PriceValue>
                            {Number(reserved.going_price).toLocaleString() +
                              '원'}
                          </PriceValue>
                        </PriceContainer>
                      </Container>
                      <Container>
                        <div>
                          <FlexBox>
                            <Logo>
                              <img
                                alt="택시회사로고"
                                src={reserved.coming_taxi_company_logo}
                              />
                            </Logo>
                            <Company>
                              <Word>{reserved.coming_taxi_company_name}</Word>
                            </Company>
                          </FlexBox>
                        </div>
                        <ScheduleContainer>
                          <Area>{reserved.arrival_location}</Area>
                          <Schedule>
                            <Departure>
                              <FlightTime>
                                {reserved.coming_departure_time.slice(-8, -3)}
                              </FlightTime>
                              <SpotCode>
                                {reserved.arrival_location_code}
                                <br />
                                {reserved.comeback_date}
                              </SpotCode>
                            </Departure>
                            <TimeGroup>
                              <LineTo type="oneWay" color="#848c94" />
                            </TimeGroup>
                            <Arrival>
                              <FlightTime>
                                {reserved.coming_arrival_time.slice(-8, -3)}
                              </FlightTime>
                              <SpotCode>
                                {reserved.departure_location_code}
                                <br />
                                {reserved.comeback_date}
                              </SpotCode>
                            </Arrival>
                          </Schedule>
                          <Area>{reserved.departure_location}</Area>
                        </ScheduleContainer>
                        <Word>{reserved.passenger_number}명</Word>
                        <Word>{reserved.round_trip}</Word>
                        <PriceContainer>
                          <PriceTitle>비용</PriceTitle>
                          <PriceValue>
                            {Number(reserved.coming_price).toLocaleString() +
                              '원'}
                          </PriceValue>
                        </PriceContainer>
                      </Container>
                    </BigContainer>
                  </>
                ))}
            </div>
          )}
        </GeneralSection>
      </General>
      <Footer />
    </>
  );
}

export default Reserve;

// Course Component Style

const BigContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.gray};
  padding: 0 10px 10px;
  margin: 10px 0;
`;

const NoReservations = styled.span`
  width: 100%;
  ${({ theme }) => theme.flexBox('center', 'center')};
  text-align: center;
  font-size: 36px;
  color: lightgray;
`;

const Container = styled.li`
  ${({ theme }) => theme.flexBox('between', 'center')};
  margin-top: 8px;
  max-width: 870px;
  padding: 20px 24px;
  width: 70vw;
  background-color: #fff;
  /* border: 1px solid #d6e3f0; */
  border-radius: 5px;
  box-shadow: 0 0 1px 0 rgb(0 0 0 / 15%);
  transition: box-shadow ease-in-out 0.25s;
  &:hover {
    box-shadow: 0 0 1px 0 rgb(0 0 0 / 15%), 0 1px 4px 0 rgb(0 0 0 / 15%);
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  width: 130px;
  margin: 3px 0px;
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ScheduleContainer = styled.div`
  ${({ theme }) => theme.flexBox('between', 'center')};
  width: 50%;
`;

const Area = styled.div`
  padding-left: ${props => (props.left ? '' : '')};
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.blue};
  padding: 10px;
  border-radius: 3px;
  width: 100px;
`;

const Schedule = styled.div`
  ${({ theme }) => theme.flexBox('between', 'center')};
  width: 202px;
`;

const WordGroup = (al = 'start') => styled.span`
  ${({ theme }) => theme.flexBox('around', al)}
  flex-direction: column;
  height: 40px;
`;

const Company = WordGroup();
const Departure = WordGroup('end');
const TimeGroup = WordGroup('center');
const Arrival = WordGroup();

const Word = styled.span`
  ${size('xs')};
  ${color()};
`;

const FlightTime = styled.span`
  ${bold};
  ${size('m')};
  ${color()};
`;

const SpotCode = styled.span`
  ${size('xs')};
  ${color(200)};
`;

const General = styled.section`
  margin: 50px auto 100px;
  max-width: 1060px;
`;

const GeneralSection = styled.div`
  ${({ theme }) => theme.flexBox('start', 'stretch')};
  max-width: 1060px;
  width: 100%;
  margin-top: 20px;
`;

const GeneralTitle = styled.h1`
  margin-top: 20px;
  font-size: 25px;
  margin-bottom: 8px;
  font-weight: 700;
  color: #343a40;
  margin-right: auto;
  margin-left: 30px;
`;

const ExpectCourse = styled.div`
  ${({ theme }) => theme.flexBox('center', 'center')};

  text-align: center;
  border: 1px solid #ced4da;
  margin: 0 20px;
  border-radius: 3px;
  height: 80px;
  margin-top: 10px;

  &:hover {
    background-color: #f5f6f7;
  }
`;

const PriceContainer = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')};
  flex-direction: column;
  background-color: ${({ theme }) => theme.blue};
  padding: 10px;
  border-radius: 5px;
  width: 120px;
`;

const PriceTitle = styled.span`
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 600;
  color: #fff;
`;

const PriceValue = styled.span`
  font-size: 12px;
  color: #fff;
`;

const BlueLine = styled.div`
  width: 8px;
  height: 80px;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 3px;
`;

const CourseText = styled.p`
  width: 100px;
  padding: 0px;
  font-size: 12px;
`;
