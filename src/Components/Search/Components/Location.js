import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputBox, Input } from './style';
import LocationModal from './LocationModal';

function Location({ modalState, departureState, arrivalState, switchSpot }) {
  const [spots, setSpots] = useState({});
  const [isModalOn, openModal, closeModal] = modalState;
  const [departure, setDeparture] = departureState;
  const [arrival, setArrival] = arrivalState;

  useEffect(() => {
    fetch('/data/spots.json')
      .then(spots => spots.json())
      .then(spots => setSpots(spots));
  }, []);

  return (
    <>
      <InputBox size="40%" onClick={openModal}>
        <Input
          placeholder="출발지가 어디인가요?"
          name="departure"
          value={departure.name}
        />
        <SwitchButton type="button" onClick={switchSpot}>
          도착지 출발지 교체
        </SwitchButton>
        <Input
          placeholder="도착지가 어디인가요?"
          name="arrival"
          value={arrival.name}
        />
      </InputBox>
      {isModalOn.departure && (
        <LocationModal
          name="departure"
          spots={spots}
          close={closeModal}
          select={setDeparture}
        />
      )}
      {isModalOn.arrival && (
        <LocationModal
          name="arrival"
          spots={spots}
          close={closeModal}
          select={setArrival}
        />
      )}
    </>
  );
}

export default Location;

const SwitchButton = styled.button`
  margin: 0 14px;
  padding: 0 16px;
  height: 32px;
  border-radius: 2px;
  background: rgb(0 0 0 / 20%) url('/images/switch.png') no-repeat center center /
    24px;
  font-size: 0;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.35;
  }
`;
