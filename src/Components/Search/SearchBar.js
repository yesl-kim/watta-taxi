import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import DateInput from './Components/DateInput';
import Passenger from './Components/Passenger';
import Button from '../Button';
import Location from './Components/Location';
import { API } from '../../config';

function SearchBar({ isRoundTrip, history }) {
  const [selectBoxState, setSelectBoxState] = useState({
    departure: false,
    arrival: false,
    date: false,
    passenger: false,
  });
  const [spots, setSpots] = useState({});
  const [departure, setDeparture] = useState({
    name: '망원',
    code: 'MWN',
  });
  const [arrival, setArrival] = useState({
    name: '',
    code: '',
  });
  const [date, setDate] = useState([]);
  const [passenger, setPassenger] = useState(1);
  const [seat, setSeat] = useState('일반석');

  useEffect(() => {
    fetch(API.STATION)
      .then(spots => spots.json())
      .then(spots => setSpots(spots.station));
  }, []);

  const openModal = e => {
    const { name } = e.target;
    for (let key in selectBoxState) {
      selectBoxState[key] = false;
    }
    setSelectBoxState({ ...selectBoxState, [name]: true });
  };

  const closeModal = name => {
    setSelectBoxState(prev => ({ ...prev, [name]: false }));
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

  const search = () => {
    if (departure.name && arrival.name && date[0] && passenger && seat) {
      history.push(
        `/list?departure_date=${date}&departure_location_name=${departure.name}&departure_location_code=${departure.code}&arrival_location_name=${arrival.name}&arrival_location_code=${arrival.code}&seat_remain=${passenger}&seat_type=${seat}`
      );
    } else {
      alert('모두 기입해주세요');
    }
  };

  return (
    <Container aria-label="왕복/ 편도 수상 택시 선택">
      <Location
        size="40%"
        spots={spots}
        modalState={[selectBoxState, openModal, closeModal]}
        departureState={[departure, setDeparture]}
        arrivalState={[arrival, setArrival]}
        switchSpot={switchSpot}
      />
      <DateInput
        isRoundTrip={isRoundTrip}
        size="30%"
        calendarState={[selectBoxState.date, openModal, closeModal]}
        setDate={setDate}
      />
      <Passenger
        size="23%"
        selectBoxState={[selectBoxState.passenger, openModal, closeModal]}
        passenger={passenger}
        selectedSeat={seat}
        add={add}
        substract={substract}
        setSeat={setSeat}
      />
      <SearchButton
        size="7%"
        type="button"
        color="main"
        textColor="#333"
        onClick={search}
      >
        검색
      </SearchButton>
    </Container>
  );
}

export default withRouter(SearchBar);

const Container = styled.form`
  ${({ theme }) => theme.flexBox('between', 'stretch')}
  height: 48px;
  width: 1050px;
`;

const SearchButton = styled(Button)`
  margin-left: 4px;
  flex-basis: ${({ size }) => size};
`;
