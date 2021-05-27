import React from 'react';
import styled from 'styled-components';
import { bold, size, color } from './fontStyle';
import LineTo from '../../../Components/LineTo';
import Button from '../../../Components/Button';

function Course() {
  return (
    <Container>
      <FlexBox>
        <Logo>
          <img alt="택시회사로고" src="http://placehold.it/30x30" />
        </Logo>
        <Company>
          <Word>티웨이항공</Word>
          <Word>TW729</Word>
        </Company>
      </FlexBox>
      <Schedule>
        <Departure>
          <FlightTime>17:40</FlightTime>
          <SpotCode>GMP</SpotCode>
        </Departure>
        <TimeGroup>
          <LineTo type="oneWay" color="#848c94" />
          <Time>1시간 10분</Time>
        </TimeGroup>
        <Arrival>
          <FlightTime>18:50</FlightTime>
          <SpotCode>CJU</SpotCode>
        </Arrival>
      </Schedule>
      <Word>할인석</Word>
      <Word>9석</Word>
      <FlexBox>
        <Price>12,000원</Price>
        <Button width="64px" height="40px" color="blue">
          선택
        </Button>
      </FlexBox>
    </Container>
  );
}

export default Course;

export function SelectedCourse() {
  return (
    <SelectedContainer>
      <FlexBox>
        <DirectionIcon>가는편</DirectionIcon>
        <Spot>김포</Spot>
        <LineTo type="oneWay" color="#848c94" size="20px" />
        <Spot>제주</Spot>
        <Date>06월27일(일)</Date>
      </FlexBox>
      <FlexBox>
        <Logo>
          <img alt="택시회사로고" src="http://placehold.it/30x30" />
        </Logo>
        <Company>
          <Word>티웨이항공</Word>
          <Word>TW729</Word>
        </Company>
      </FlexBox>
      <Schedule>
        <Departure>
          <FlightTime>17:40</FlightTime>
          <SpotCode>GMP</SpotCode>
        </Departure>
        <TimeGroup>
          <LineTo type="oneWay" color="#848c94" />
          <Time>1시간 10분</Time>
        </TimeGroup>
        <Arrival>
          <FlightTime>18:50</FlightTime>
          <SpotCode>CJU</SpotCode>
        </Arrival>
      </Schedule>
      <Word>할인석</Word>
      <Price>12,000원</Price>
      <Cancel color="#e9ecef" textColor="#495056">
        항공편 변경
      </Cancel>
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
  margin: 0 0 24px;
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
`;

const Spot = styled.span`
  margin: 0 8px;
  ${bold};
  ${size('m')};
  ${color()};
`;

const Date = styled.span`
  margin-left: 8px;
  ${bold};
  ${size('s')};
  ${color()};
`;
