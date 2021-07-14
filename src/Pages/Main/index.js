import React from 'react';
import styled from 'styled-components';
import Nav from '../../Components/nav';
import { Banner } from '../../Components/banner';
import { MainDriver } from '../../Components/main-driver';
import { MainCourse } from '../../Components/main-course';
import { Footer } from '../../Components/footer';

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
