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
      </DriverTitle>
      <DriverDescription>
        <DriverImg alt="기사님 사진" src={props.profile} />
        <DriverIntroduction>
          <TitleRating>
            <ReviewStar>{getStar(props.averageGrade)}</ReviewStar>
            <TitleRatingGrade>
              <p>{Math.round(props.averageGrade * 100) / 100}</p>
            </TitleRatingGrade>
          </TitleRating>
          <DriverIntro>"{props.introduction}"" </DriverIntro>
          <CompanyInfos>
            <CompanyLogo alt={props.company} src={props.companyLogo} />
            <CompanyName>{props.company}</CompanyName>
          </CompanyInfos>
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
  font-size: 30px;
  margin-left: 10px;
`;

//기사님 사진, 소개
const DriverDescription = styled.article`
  ${({ theme }) => theme.flexBox('start', 'center')}
`;

const CompanyInfos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 340px;
  padding: 10px;
  color: ${({ theme }) => theme.darkgray};
  /* background-color: ${({ theme }) => theme.gray}; */
  border-radius: 10px;
  justify-content: flex-end;
  position: relative;
  top: 30%;
`;

const CompanyLogo = styled.img`
  width: 50px;
  border-radius: 70%;
  border-style: solid;
  border-width: 6px;
  color: ${({ theme }) => theme.main};
`;

const DriverImg = styled.img`
  width: 250px;
  height: 300px;
  margin: 20px;
  border-radius: 15px;
`;

const CompanyName = styled.span`
  margin: 5px;
  color: ${({ theme }) => theme.darkgray};
  /* font-weight: bold; */
  font-size: 20px;
`;

const DriverIntro = styled.p`
  font-size: 20px;
  padding: 10px;
  line-height: 30px;
  vertical-align: middle;
`;

const DriverIntroduction = styled.div`
  font-size: 18px;
  padding: 20px;
  height: 100%;
  max-height: 700px;
`;

const ReviewStar = styled.div`
  padding: 0px 5px;
  margin-bottom: 5px;
`;

const I = styled.i`
  color: ${props => (props.color ? ({ theme }) => theme.main : 'gray')};
  font-size: ${props => (props.size ? '30px' : '40px')};
  margin: ${props => (props.size ? '0' : '5px')};
`;
