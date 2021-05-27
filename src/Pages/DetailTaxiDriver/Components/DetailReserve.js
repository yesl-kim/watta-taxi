import React from 'react';
import styled from 'styled-components';
function DetailReserve() {
  return (
    <div>
      <DetailSide>
        <DateButton>
          <i class="fas fa-calendar-week"></i>
          <p>날짜를 선택해주세요</p>
        </DateButton>
        <DateButton>
          <i class="far fa-clock"></i>
          <p>시간을 선택해주세요</p>
        </DateButton>
        <ButtonContainer>
          <SeatButton>특가석</SeatButton>
          <SeatButton>일반석</SeatButton>
          <SeatButton>특별석</SeatButton>
          <CalculationButton>금액 조회하기</CalculationButton>
        </ButtonContainer>
        <ReserveLine />
        <Price>20,000원</Price>
        <ReservationButton>예약하기</ReservationButton>
      </DetailSide>
    </div>
  );
}

export default DetailReserve;

const DetailSide = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}

  position: sticky;
  top: 50px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.white};
  flex-direction: column;
  padding: 20px;
`;

const DateButton = styled.button`
  display: flex;
  padding: 10px 20px;
  margin: 20px auto 0;
  background-color: #f5f6f7;
  color: #343a40;
  border: none;
  border-radius: 4px;

  :hover {
    border: 1px solid black;
  }
`;

const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}
  margin-top: 20px;
`;

const SeatButton = styled.button`
  width: 60px;
  height: 30px;
  margin: 0px 5px 0px 0px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 5px;
  border: none;
`;

const CalculationButton = styled.button`
  outline: none;
  border: 0;
  background: none;
`;

const ReserveLine = styled.hr`
  width: 250px;
  margin: 20px 0px;
  color: #e9ecef;
`;

const Price = styled.p`
  font-size: 20px;
  padding-left: 180px;
`;

const ReservationButton = styled.button`
  width: 250px;
  margin-top: 20px;
  height: 40px;
  background-color: ${({ theme }) => theme.blue};
  color: white;
  border: none;
  border-radius: 5px;
`;
