import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { bold, size, color } from './Components/fontStyle';
import Course, { SelectedCourse } from './Components/Course';
import CheckBoxes from './Components/Checkbox';

function List() {
  const [checkCompany, setCheckCompany] = useState({
    다술: true,
    다모: true,
    예술: true,
    은혜: true,
  });
  const [checkDepartureTime, setCheckDepartureTime] = useState({
    새벽: true,
    오전: true,
    오후: true,
    야간: true,
  });

  const handleCheckCompany = e => {
    const { name, checked } = e.target;
    setCheckCompany(prev => ({ ...prev, [name]: checked }));
  };

  const handleCheckDepartureTime = e => {
    const { name, checked } = e.target;
    setCheckDepartureTime(prev => ({ ...prev, [name]: checked }));
  };

  useEffect(() => {
    const arr = Object.keys(checkCompany).filter(key => checkCompany[key]);
  }, [checkCompany]);

  return (
    <Container>
      <Main>
        <ul>
          <SelectedCourse />
        </ul>
        <Content className="flex relative">
          <Aside>
            <form>
              <CheckBoxes
                title={company.name}
                subTopics={company.subTopics}
                check={checkCompany}
                onChange={handleCheckCompany}
              />
              <CheckBoxes
                title={departureTime.name}
                subTopics={departureTime.subTopics}
                check={checkDepartureTime}
                onChange={handleCheckDepartureTime}
              />
            </form>
          </Aside>
          <CourseList>
            <SortBox>
              <p>
                <span>검색결과 총 295개</span>
                성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)
              </p>
              <Sort id="sort">
                <option value="price">가격 낮은 순</option>
                <option value="earlyTime">출발시간 빠른 순</option>
                <option value="lateTime">출발시간 늦은 순</option>
              </Sort>
            </SortBox>
            {/* <div>가는편</div> */}
            <ul>
              <Course />
            </ul>
          </CourseList>
        </Content>
      </Main>
    </Container>
  );
}

export default List;

const Container = styled.div`
  padding-top: 24px;
  background-color: ${({ theme }) => theme.bgGray};
`;

const Main = styled.main`
  width: 1064px;
  margin: 0 auto;
`;

const Content = styled.div`
  ${({ theme }) => theme.flexBox('between', 'start')}
  position: relative;
`;

const Aside = styled.aside`
  position: sticky;
  top: 0;
  width: 240px;
`;

const CourseList = styled.div`
  width: 784px;
`;

const SortBox = styled.div`
  ${({ theme }) => theme.flexBox('between', 'center')};

  p {
    ${color(100)};
    font-size: 12px;
    line-height: 1.5;

    span {
      display: block;
      ${bold};
      ${size('s')};
      ${color()};
    }
  }
`;

const Sort = styled.select`
  width: 190px;
  height: 40px;
  padding-left: 12px;
  font-size: 14px;
  border: 1px solid #dee2e6;
  border-radius: 2px;
  ${color()};
`;

const company = {
  id: '1',
  name: '운항사',
  subTopics: [
    {
      id: '1',
      name: '다술',
    },
    {
      id: '2',
      name: '다모',
    },
    {
      id: '3',
      name: '예술',
    },
    {
      id: '4',
      name: '은혜',
    },
  ],
};

const departureTime = {
  name: '출발시간',
  subTopics: [
    {
      id: '1',
      name: '새벽',
      time: '00:00 ~ 06:00',
    },
    {
      id: '2',
      name: '오전',
      time: '06:00 ~ 12:00',
    },
    {
      id: '3',
      name: '오후',
      time: '12:00 ~ 18:00',
    },
    {
      id: '4',
      name: '야간',
      time: '18:00 ~ 24:00',
    },
  ],
};
