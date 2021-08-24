import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import { Banner } from '../components/Banner';
import { MainDriver } from '../components/MainDriver';
import { MainCourse } from '../components/MainCourse';
import { Footer } from '../components/Footer';

export const Main = () => {
  return (
    <>
      <Nav />
      <Container>
        <MainCourse />
        <Banner />
        <MainDriver />
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 1050px;
`;
