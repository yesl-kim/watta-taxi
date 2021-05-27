import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function MainBanner() {
  const [bannerBox, setBanner] = useState([]);

  useEffect(() => {
    // http://3.34.199.216:8000/taxis/coupons
    fetch('/data/MockData.json')
      .then(res => res.json())
      .then(data => {
        setBanner(data.banner);
      });
  }, []);

  return (
    <Section>
      <Carousel>
        {bannerBox.map((banner, index) => (
          <div key={index}>
            <img src={banner.imageUrl} alt="" />
          </div>
        ))}
      </Carousel>
    </Section>
  );
}

const Section = styled.div`
  margin-bottom: 96px;
`;

export default MainBanner;
