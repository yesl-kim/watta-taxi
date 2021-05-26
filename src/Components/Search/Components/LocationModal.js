import React from 'react';
import styled from 'styled-components';
import { RgbaBtn } from '../../Button';
import { selectBox } from './style';

function LocationModal({ name, spots, close, select }) {
  const isEmptyObject = obj => {
    return !Object.keys(obj).length;
  };

  const handleClick = (e, name, code) => {
    select({ name, code });
    close(e.target.name);
  };

  return (
    <Modal>
      <LocationSelect>
        <Title>
          선착장 선택
          <RgbaBtn
            width="30px"
            height="30px"
            color="darkGray"
            onClick={() => close(name)}
          >
            X
          </RgbaBtn>
        </Title>
        <SpotList>
          {!isEmptyObject(spots) &&
            spots.map(spot => (
              <Spot key={spot.id}>
                <label>
                  <input
                    type="radio"
                    name={name}
                    onClick={e => handleClick(e, spot.name, spot.code)}
                  />
                  {spot.name}
                </label>
              </Spot>
            ))}
        </SpotList>
      </LocationSelect>
    </Modal>
  );
}

export default LocationModal;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
`;

const LocationSelect = styled(selectBox)`
  ${({ theme }) => theme.posCenter()};
  width: 50%;
`;

const Title = styled.h3`
  ${({ theme }) => theme.flexBox('between', 'center')}
  margin-bottom: 26px;
  font-size: 18px;
  font-weight: 600;
`;

const SpotList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Spot = styled.li`
  padding: 14px 8px;
  width: 25%;
  flex-basis: 25%;
  flex-grow: 0;
  border-bottom: 1px solid #e9ecef;

  label {
    padding: 6px 8px;
    border-radius: 2px;
    transition: all 0.08s ease 0s;
    cursor: pointer;

    &:hover {
      background-color: #f5f6f7;
    }
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
  }
`;

const Hidden = styled.div`
  opacity: 0;
  visibility: 0;
`;
