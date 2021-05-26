import React, { useState } from 'react';
import styled from 'styled-components';
import Date from './Components/Date';
import Passenger from './Components/Passenger';
import Button from '../Button';
import Location from './Components/Location';

function SearchBar({ isRoundTrip }) {
  const [isModalOn, setIsModalOn] = useState({
    departure: false,
    arrival: false,
    date: false,
    passenger: false,
  });
  const [departure, setDeparture] = useState({
    name: '서울숲',
    code: 'SSS',
  });
  const [arrival, setArrival] = useState({
    name: '',
    code: '',
  });
  const [passenger, setPassenger] = useState(1);
  const [seat, setSeat] = useState('일반석');

  const openModal = e => {
    const { name } = e.target;
    for (let key in isModalOn) {
      isModalOn[key] = false;
    }
    setIsModalOn({ ...isModalOn, [name]: true });
  };

  const closeModal = name => {
    setIsModalOn(prev => ({ ...prev, [name]: false }));
  };

  const switchSpot = e => {
    setDeparture(() => arrival);
    setArrival(() => departure);
  };

  const add = e => {
    setPassenger(prev => ++prev);
  };

  const substract = e => {
    if (passenger > 0) setPassenger(prev => --prev);
  };

  return (
    <Container aria-label="왕복/ 편도 수상 택시 선택">
      <Location
        modalState={[isModalOn, openModal, closeModal]}
        departureState={[departure, setDeparture]}
        arrivalState={[arrival, setArrival]}
        switchSpot={switchSpot}
      />
      <Date
        size="30%"
        isRoundTrip={isRoundTrip}
        calendarState={[isModalOn.date, openModal, closeModal]}
      />
      <Passenger
        size="23%"
        selectBoxState={[isModalOn.passenger, openModal, closeModal]}
        passenger={passenger}
        selectedSeat={seat}
        add={add}
        substract={substract}
        setSeat={setSeat}
      />
      <SubmitButton size="7%" type="submit" color="blue">
        검색
      </SubmitButton>
    </Container>
  );
}

export default SearchBar;

const Container = styled.form`
  ${({ theme }) => theme.flexBox('between', 'stretch')}
  height: 48px;
`;

const SubmitButton = styled(Button)`
  margin-left: 4px;
  flex-basis: ${({ size }) => size};
`;
