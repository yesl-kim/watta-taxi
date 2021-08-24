import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { InputBox, Input } from './style';
import { DateRange, Calendar } from 'react-date-range';
import Button from '../../Button';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { getDate } from '../../../util';

export default function DateInput({ isRoundTrip, ...rest }) {
  return isRoundTrip ? <RoundTripDate {...rest} /> : <OneWayDate {...rest} />;
}

export function RoundTripDate({ size, calendarState, setDate }) {
  const [isCalendarOn, openCalendar, closeCalender] = calendarState;
  const [roundTripDate, setRoundTripDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const departureInput = useRef();
  const arrivalInput = useRef();

  const changeDate = date => {
    setRoundTripDate([date.selection]);
  };

  const selectDate = () => {
    const { startDate, endDate } = roundTripDate[0];
    const d1 = getDate.toFullNum(startDate);
    const d2 = getDate.toFullNum(endDate);
    setDate([d1, d2]);
    departureInput.current.value = getDate.toMediumString(startDate);
    arrivalInput.current.value = getDate.toMediumString(endDate);
    closeCalender('date');
  };

  return (
    <Container size={size}>
      <InputBox iconUrl="/images/calendar.svg">
        <Input
          placeholder="가는 날 선택"
          name="date"
          ref={departureInput}
          onClick={openCalendar}
        />
        <Span>-</Span>
        <Input
          placeholder="오는 날 선택"
          name="date"
          ref={arrivalInput}
          onClick={openCalendar}
        />
      </InputBox>
      {isCalendarOn && (
        <CalendarBox>
          <DateRange
            editableDateInputs={true}
            onChange={changeDate}
            moveRangeOnFirstSelection={false}
            ranges={roundTripDate}
          />
          <Button
            width="72px"
            height="32px"
            type="button"
            color="#519bff"
            onClick={selectDate}
          >
            적용
          </Button>
        </CalendarBox>
      )}
    </Container>
  );
}

export function OneWayDate({ size, calendarState, setDate }) {
  const [isCalendarOn, openCalendar, closeCalender] = calendarState;
  const [oneWayDate, setOneWayDate] = useState(new Date());
  const departureInput = useRef();

  const changeDate = date => {
    setOneWayDate(date);
  };

  const selectDate = () => {
    setDate(getDate.toFullNum(oneWayDate));
    departureInput.current.value = getDate.toMediumString(oneWayDate);
    closeCalender('date');
  };

  return (
    <Container size={size}>
      <InputBox iconUrl="/images/calendar.svg">
        <Input
          placeholder="가는 날 선택"
          name="date"
          ref={departureInput}
          onClick={openCalendar}
        />
      </InputBox>
      {isCalendarOn && (
        <CalendarBox>
          <Calendar date={oneWayDate} onChange={changeDate} />
          <Button
            width="72px"
            height="32px"
            type="button"
            color="#519bff"
            onClick={selectDate}
          >
            적용
          </Button>
        </CalendarBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  flex-basis: ${({ size }) => size};
  position: relative;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 32px;
  box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%), 0 1px 4px 0 rgb(0 0 0 / 15%);
  position: absolute;
  top: 54px;
  left: 4px;
  background-color: #fff;
  border-radius: 2px;

  button {
    margin-left: auto;
  }
`;

const Span = styled.span`
  margin: 0 10px;
`;
