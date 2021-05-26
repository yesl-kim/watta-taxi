import React from 'react';
import styled from 'styled-components';
import { InputBox, Input, TooltipBox } from './style';
import Button, { RgbaBtn } from '../../Button';

function Passenger({
  size,
  selectBoxState,
  passenger,
  selectedSeat,
  add,
  substract,
  setSeat,
}) {
  const [isSelectBoxOn, openSelectBox, closeSelecBox] = selectBoxState;

  const handleSeat = e => {
    setSeat(e.target.value);
  };

  return (
    <Container size={size}>
      <InputBox iconUrl="/images/passenger.svg">
        <Input
          name="passenger"
          value={`승객 ${passenger}명, ${selectedSeat}`}
          onClick={openSelectBox}
        />
      </InputBox>
      {isSelectBoxOn && (
        <SelectBox size="130%">
          <Title as="h3">
            인원 &amp; 좌석등급
            <RgbaBtn
              width="30px"
              height="30px"
              color="darkGray"
              onClick={() => closeSelecBox('passenger')}
            >
              X
            </RgbaBtn>
          </Title>
          <NumsOfPassenger>
            <li>
              <span>인원 수</span>
              <Count>
                <CountBtn
                  type="button"
                  color="#ced4da"
                  outline
                  onClick={substract}
                >
                  -
                </CountBtn>
                <span>{passenger}</span>
                <CountBtn type="button" color="skyBlue" outline onClick={add}>
                  +
                </CountBtn>
              </Count>
            </li>
          </NumsOfPassenger>
          <SeatList>
            {seats.map(seat => {
              return (
                <li key={seat.id}>
                  <label>
                    <input
                      type="radio"
                      name="seat"
                      defaultValue={seat.name}
                      onChange={handleSeat}
                      checked={seat.name === selectedSeat}
                    />
                    {seat.name}
                  </label>
                </li>
              );
            })}
          </SeatList>
        </SelectBox>
      )}
    </Container>
  );
}

export default Passenger;

const Container = styled.div`
  flex-basis: ${({ size }) => size};
  position: relative;
`;

const SelectBox = styled(TooltipBox)`
  padding: 20px 24px 24px;
`;

const Title = styled.div`
  ${({ theme }) => theme.flexBox('between', 'center')};
  font-size: 14px;
  font-weight: 600;
`;

const NumsOfPassenger = styled.ul`
  padding: 12px 0 16px;

  li {
    display: flex;
    align-items: center;
    padding: 8px 0;
    font-size: 16px;
  }
`;

const Count = styled.div`
  ${({ theme }) => theme.flexBox('between', 'center')};
  width: 100px;
  margin-left: auto;
`;

const CountBtn = styled(Button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const SeatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0 16px;
  border-top: 1px solid #f1f3f5;
  li {
    ${({ theme }) => theme.flexBox('start', 'center')};
    width: 50%;
    flex-basis: 50%;
    flex-shrink: 0;
    padding: 8px 0;
    cursor: pointer;

    input {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      border: 1px solid #ced4da;
      border-radius: 100%;
      background-color: #fff;
      transition: all 0.08s ease-out;
      cursor: pointer;

      &:hover {
        border: 2px solid #adb5bd;
      }
    }

    label {
      cursor: pointer;
    }
  }
`;

const seats = [
  {
    id: '1',
    name: '일반석',
  },
  {
    id: '2',
    name: '프리미엄 일반석',
  },
  {
    id: '3',
    name: '비즈니스석',
  },
  {
    id: '4',
    name: '일등석',
  },
];
