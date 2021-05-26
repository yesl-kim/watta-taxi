import React from 'react';
import styled from 'styled-components';
import { selectBox, InputBox, Input } from './style';

function Date({ size, isRoundTrip, calendarState }) {
  const [isCalendarOn, openCalendar, closeCalender] = calendarState;

  return (
    <Container size={size}>
      <InputBox iconUrl="/images/calendar.svg">
        <Input placeholder="가는 날 선택" name="date" onClick={openCalendar} />
        {isRoundTrip && (
          <>
            <Span>-</Span>
            <Input
              placeholder="오는 날 선택"
              name="date"
              onClick={openCalendar}
            />
          </>
        )}
      </InputBox>
      {isCalendarOn && <Calendar>달력</Calendar>}
    </Container>
  );
}

export default Date;

const Container = styled.div`
  flex-basis: ${({ size }) => size};
  position: relative;
`;

const Calendar = styled(selectBox)`
  position: absolute;
  top: 54px;
  left: 4px;
  width: 608px;
  height: 400px;
`;

const Span = styled.span`
  margin: 0 10px;
`;
