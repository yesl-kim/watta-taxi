import React from 'react';
import styled from 'styled-components';

const DetailDriverInfo = props => {
  const getStar = grade => {
    const yellowGrade = Math.floor(grade);
    const yellowStar = [...Array(yellowGrade)].map(() => (
      <I color="true" size="true" className="fas fa-star" />
    ));
    const grayStar = [...Array(5 - yellowGrade)].map(() => (
      <I size="true" className="fas fa-star" />
    ));

    return [...yellowStar, ...grayStar];
  };

  return (
    <>
      <DriverTitle>
        <TitleContent>
          <h1>[Watta Taxi] {props.name} 기사님</h1>
        </TitleContent>
        <TitleRating>
          <ReviewStar>{getStar(props.averageGrade)}</ReviewStar>
          <TitleRatingGrade>
            <p>{Math.floor(props.averageGrade * 100) / 100}</p>
          </TitleRatingGrade>
        </TitleRating>
      </DriverTitle>
      <DriverDescription>
        <DriverImg alt="기사님 사진" src={props.profile} />
        <DriverIntroduction>
          <div>
            <CompanyLogo alt={props.company} src={props.companyLogo} />
          </div>
          <div>성함 :{props.name}</div>
          <div>회사 :{props.company}</div>
          <div>소개 :{props.introduction} </div>
          <div></div>
        </DriverIntroduction>
      </DriverDescription>
    </>
  );
};

export default DetailDriverInfo;

const DriverTitle = styled.header`
  ${({ theme }) => theme.flexBox()}

  flex-direction: column;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.white};
`;

const TitleContent = styled.div`
  color: #343a40;
  font-weight: 700;
  font-size: 32px;
`;

const TitleRating = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}
`;

const TitleRatingGrade = styled.div`
  font-size: 12px;
`;

//기사님 사진, 소개
const DriverDescription = styled.article`
  ${({ theme }) => theme.flexBox('start', 'center')}
`;

const CompanyLogo = styled.img`
  width: 100px;
  border-radius: 70%;
`;

const DriverImg = styled.img`
  width: 250px;
  height: 300px;
  margin: 20px;
`;

const DriverIntroduction = styled.div`
  font-size: 18px;
  margin: 20px;
`;

const ReviewStar = styled.div`
  padding: 0px 5px;
  margin-bottom: 5px;
`;

const I = styled.i`
  color: ${props => (props.color ? props.theme.main : 'gray')};
  font-size: ${props => (props.size ? '10px' : '40px')};
  margin: ${props => (props.size ? '0' : '5px')};
`;
