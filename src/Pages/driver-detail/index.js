import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Nav from '../../Components/nav';
import { Comments } from '../../Components/comments';
import { DriverBio } from '../../Components/driver-bio';
import { DriverReserving } from '../../Components/driver-reserving';
import { Footer } from '../../Components/footer';
import { API } from '../../config';

const isValidObject = obj => !!Object.keys(obj).length;

export const DriverDetail = () => {
  const params = useParams();
  const [taxiDriverInfo, setTaxiDriverInfo] = useState({});

  useEffect(() => {
    const driverId = params.id;
    fetch(`${API['TAXI_DRIVER_DETAIL']}/${driverId}`)
      .then(res => res.json())
      .then(driverInfo => {
        setTaxiDriverInfo(driverInfo.driver);
      });
  }, [params]);

  if (!isValidObject(taxiDriverInfo)) return 'Loading...';

  return (
    <>
      <Nav />
      <Container>
        <DetailMain>
          <DriverBio
            name={taxiDriverInfo.name}
            profile={taxiDriverInfo.profile_url}
            company={taxiDriverInfo.taxi_company_name}
            introduction={taxiDriverInfo.introduction}
            averageGrade={taxiDriverInfo.average_rating}
            companyLogo={taxiDriverInfo.taxi_company_logo_url}
          />
          <Comments
            id={taxiDriverInfo.id}
            averageGrade={taxiDriverInfo.average_rating}
          />
        </DetailMain>
        <DriverReserving />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.flexBox('center', 'stretch')}
  height: 100%;
  background-color: ${({ theme }) => theme.white};
`;
const DetailMain = styled.header`
  ${({ theme }) => theme.flexBox()}
  flex-direction: column;
  width: 700px;
  height: auto;
  margin: 10px 30px 10px 0;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.white};
`;
