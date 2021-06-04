import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailComments from './Components/DetailComments';
import DetailDriverInfo from './Components/DetailDriverInfo';
import DetailReserve from './Components/DetailReserve';
import { API } from '../../config';
import { useParams } from 'react-router-dom';
import Nav from '../../Components/Nav';
import Footer from '../Main/Components/MainFooter';

const isValidObject = obj => !!Object.keys(obj).length;

const DetailDrivers = () => {
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
          <DetailDriverInfo
            id={taxiDriverInfo.id}
            name={taxiDriverInfo.name}
            profile={taxiDriverInfo.profile_url}
            company={taxiDriverInfo.taxi_company_name}
            introduction={taxiDriverInfo.introduction}
            averageGrade={taxiDriverInfo.average_rating}
            companyLogo={taxiDriverInfo.taxi_company_logo_url}
          />
          <DetailComments
            id={taxiDriverInfo.id}
            name={taxiDriverInfo.name}
            profile={taxiDriverInfo.profile_url}
            company={taxiDriverInfo.taxi_company_name}
            introduction={taxiDriverInfo.introduction}
            averageGrade={taxiDriverInfo.average_rating}
          />
        </DetailMain>
        <DetailReserve />
      </Container>
      <Footer />
    </>
  );
};

export default DetailDrivers;

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
