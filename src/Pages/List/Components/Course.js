import React from 'react';
import styled, { css } from 'styled-components';
import { bold, size, color } from './fontStyle';
import LineTo from '../../../Components/LineTo';
import Button from '../../../Components/Button';
import { getDate } from '../../../util';

const getTime = time => {
  return time.slice(-8, -3);
};

function Course({ info, selectCourse }) {
  const { price, seat_remain, courses, seat_type } = info;
  const {
    departure_time,
    arrival_time,
    taxi_code,
    arrival_location_code,
    departure_location_code,
    taxi_company,
    taxi_company_url,
  } = courses;

  return (
    <Container>
      <FlexBox>
        <Logo>
          <img alt={`${taxi_company} 로고`} src={taxi_company_url} />
        </Logo>
        <Company>
          <Word>{taxi_company}</Word>
          <Word>{taxi_code}</Word>
        </Company>
      </FlexBox>
      <Schedule>
        <Departure>
          <FlightTime>{getTime(departure_time)}</FlightTime>
          <SpotCode>{departure_location_code}</SpotCode>
        </Departure>
        <TimeGroup>
          <LineTo type="oneWay" color="#848c94" />
          <Time>1시간 10분</Time>
        </TimeGroup>
        <Arrival>
          <FlightTime>{getTime(arrival_time)}</FlightTime>
          <SpotCode>{arrival_location_code}</SpotCode>
        </Arrival>
      </Schedule>
      <Word>{seat_type.seat_name}</Word>
      <Word>{seat_remain}석</Word>
      <FlexBox>
        <Price>{Number(price).toLocaleString()}원</Price>
        <Button
          width="64px"
          height="40px"
          color="blue"
          onClick={() => selectCourse(info)}
        >
          선택
        </Button>
      </FlexBox>
    </Container>
  );
}

export default Course;

export function SelectedCourse({ course }) {
  const {
    direction,
    departure_date,
    departure_location_name,
    arrival_location_name,
    price,
    courses,
    seat_type,
  } = course;
  const {
    departure_time,
    arrival_time,
    taxi_code,
    arrival_location_code,
    departure_location_code,
    taxi_company,
    taxi_company_url,
  } = courses;
  const DEPARTURE_DATE = getDate.toMediumString(new Date(departure_date));

  return (
    <SelectedContainer>
      <FlexBox>
        <DirectionIcon>{direction}</DirectionIcon>
        <Spot>{departure_location_name}</Spot>
        <LineTo type="oneWay" color="#848c94" size="20px" />
        <Spot>{arrival_location_name}</Spot>
        <DepartureDate bold>{DEPARTURE_DATE}</DepartureDate>
      </FlexBox>
      <FlexBox>
        <Logo>
          <img alt={`${taxi_company} 로고`} src={taxi_company_url} />
        </Logo>
        <Company>
          <Word>{taxi_company}</Word>
          <Word>{taxi_code}</Word>
        </Company>
      </FlexBox>
      <Schedule>
        <Departure>
          <FlightTime>{getTime(departure_time)}</FlightTime>
          <SpotCode>{departure_location_code}</SpotCode>
        </Departure>
        <TimeGroup>
          <LineTo type="oneWay" color="#848c94" />
          <Time>1시간 10분</Time>
        </TimeGroup>
        <Arrival>
          <FlightTime>{getTime(arrival_time)}</FlightTime>
          <SpotCode>{arrival_location_code}</SpotCode>
        </Arrival>
      </Schedule>
      <Word>{seat_type.seat_name}</Word>
      <Price>{`${Number(price).toLocaleString()}원`}</Price>
      <Cancel color="#e9ecef" textColor="#495056">
        항공편 변경
      </Cancel>
    </SelectedContainer>
  );
}

export function UserCourse({ direction, date, departure, arrival }) {
  const DEPARTURE_DATE = getDate.toMediumString(new Date(date));

  return (
    <SelectedContainer>
      <FlexBox>
        <DirectionIcon outline>{direction}</DirectionIcon>
        <Spot>{departure}</Spot>
        <LineTo type="oneWay" color="#848c94" size="20px" />
        <Spot>{arrival}</Spot>
        <DepartureDate>{DEPARTURE_DATE}</DepartureDate>
      </FlexBox>
    </SelectedContainer>
  );
}

// Course Component Style
const Container = styled.li`
  ${({ theme }) => theme.flexBox('between', 'center')};
  margin-top: 8px;
  padding: 20px 24px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 1px 0 rgb(0 0 0 / 15%);
  transition: box-shadow ease-in-out 0.25s;
  &:hover {
    box-shadow: 0 0 1px 0 rgb(0 0 0 / 15%), 0 1px 4px 0 rgb(0 0 0 / 15%);
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
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

const Time = styled.span`
  ${size('xs')};
  ${color(100)}
`;

const Price = styled.span`
  margin-right: 12px;
  ${bold};
  ${size('l')};
  ${color()};
`;

// SelectedCourse Component Style
const SelectedContainer = styled(Container)`
  margin: 0 0 8px;
  padding: 16px 24px;
  &:hover {
    box-shadow: none;
  }
`;

const Cancel = styled(Button)`
  padding: 8px 10px;
  ${size('s')};
`;

const DirectionIcon = styled.span`
  padding: 5px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.blue};
  ${size('s')};
  color: #fff;

  ${({ outline, theme }) =>
    outline &&
    css`
      background-color: #fff;
      border: 1px solid ${theme.blue};
      color: ${theme.blue};
    `}
`;

const Spot = styled.span`
  margin: 0 8px;
  ${bold};
  ${size('m')};
  ${color()};
`;

const DepartureDate = styled.span`
  margin-left: 8px;
  font-weight: ${({ bold }) => (bold ? '600' : '400')} ${size('s')};
  ${color()};
`;
