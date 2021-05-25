import React from 'react';
import styled, { css } from 'styled-components';
import Destination from './Destination';

function DestinationBox() {
  return (
    <Container>
      <Destination course={courses.departure} />
      <Line />
      <Destination course={courses.arrival} />
    </Container>
  );
}

export default DestinationBox;

const courses = {
  departure: {
    spot: '김포',
    code: 'GMP',
    date: '2021년 05월 25일',
  },
  arrival: {
    spot: '제주',
    code: 'CJU',
    date: '2021년 05월 26일',
  },
};

const arrow = destination => css`
  ${({ theme }) => theme.posCenterY()};
  ${destination}: 0;
  display: block;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(256, 256, 256, 0.5);
  border-radius: 50%;
  transform: translateX(${destination === 'left' ? '-100%' : '100%'});
  -webkit-transform: translate(
    ${destination === 'left' ? '-100%' : '100%'},
    -50%
  );
  content: '';
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 32px 0;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const Line = styled.span`
  position: relative;
  margin: 0 2.5rem;
  width: 40px;
  height: 1px;
  background: rgba(256, 256, 256, 0.5);
  border: 0;

  &:before {
    ${arrow('left')}
  }

  &:after {
    ${arrow('right')}
  }
`;
