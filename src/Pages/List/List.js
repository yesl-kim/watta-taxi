import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { bold, size, color } from './Components/fontStyle';
import Course, { SelectedCourse, UserCourse } from './Components/Course';
import CheckBoxes from './Components/Checkbox';
import Loading from '../Loading/Loading';
import { queryToObj, objToQuery, customFetch } from '../../util';
import { API } from '../../config';
import InputRange from './Components/InputRange';
import Button from '../../Components/Button';
import Nav from '../../Components/Nav';
import Footer from '../Main/Components/MainFooter';

function List({ location }) {
  // 쿼리스트링 처리 =================
  // url에서 쿼리스트링을 객체로 가져오기
  const queryObj = queryToObj(decodeURI(location.search));

  const {
    departure_date,
    departure_location_name,
    arrival_location_name,
    seat_type,
    seat_remain,
  } = queryObj;

  // 왕복 출발 날짜 분리 (가는날짜, 오는날짜)
  const [startDate, endDate] = departure_date.split(',');
  // 티켓 데이터를 받아오는데 필요한 데이터만 모아서 새로운 객체, 새로운 쿼리스트링을 만들기 위해서

  const makeQueryObj = startOrEnd => {
    const isStart = startOrEnd === 'start';

    return {
      departure_date: isStart ? startDate : endDate,
      departure_location_name: isStart
        ? departure_location_name
        : arrival_location_name,
      arrival_location_name: isStart
        ? arrival_location_name
        : departure_location_name,
      seat_type,
      seat_remain,
    };
  };

  // 티켓 데이터를 받아오는 api의 쿼리스트링
  const listQueryStart = objToQuery(makeQueryObj('start')); // 가는 편
  const listQueryEnd = objToQuery(makeQueryObj('end')); // 오는 편
  const TICKET_NUM = departure_date.split(',').length;

  // ============= state ===============
  const direction = useRef('가는편');
  const [query, setQuery] = useState(listQueryStart);
  const [isReady, setIsReady] = useState(false);
  const [courses, setCourses] = useState([]);
  const [checkCompany, setCheckCompany] = useState({
    'Dasul Taxi': true,
    'Taxi Choi-gging': true,
    'Art Transportation': true,
    'Lama 운수': true,
    'DaMo taxi': true,
    'Muy bien Trans': true,
  });
  const [filterDepartureTime, setFilterDepartureTime] = useState({
    values: [23],
  });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [filterPrice, setFilterPrice] = useState({
    values: [60000],
  });
  const [sort, setSort] = useState('price');

  const handleCheckCompany = e => {
    const { name, checked } = e.target;
    setCheckCompany(prev => ({ ...prev, [name]: checked }));
  };

  const sortCourses = e => {
    const target = e.target.options;
    setSort(target[target.selectedIndex].value);
  };

  const selectCourse = ticket => {
    if (selectedCourses.length >= TICKET_NUM) return;
    const { departure_location_name, arrival_location_name, departure_date } =
      queryToObj(query);

    setSelectedCourses(prev => [
      ...prev,
      {
        direction: direction.current,
        departure_location_name,
        arrival_location_name,
        departure_date,
        ...ticket,
      },
    ]);
  };

  const postCourse = (token, body) => {
    customFetch(
      API.ORDER,
      {
        method: 'POST',
        headers: {
          AUTHORIZATION: token,
        },
        ...body,
      },
      res => {
        if (res.message === 'success') {
          alert('예약이 완료되었습니다 🎉');
        } else {
          alert(res.message);
        }
      }
    );
  };

  const reserve = () => {
    const loggedInfo = sessionStorage.getItem('Watta_token');
    const [가는편, 오는편] = selectedCourses;

    const params = {
      passenger_number: seat_remain,
      going_schedule_id: 가는편.id,
    };

    if (오는편) params.coming_schedule_id = 오는편.id;

    postCourse(loggedInfo, {
      body: JSON.stringify({ ...params }),
    });
  };

  useEffect(() => {
    customFetch(`${API.COURSE}${query}`, {}, course => {
      setIsReady(true);
      setCourses(course.Message);
    });
  }, []);

  useEffect(() => {
    const departureTime = `1900-01-01 ${filterDepartureTime.values[0]}:00`;
    const taxiCompanies = Object.keys(checkCompany)
      .filter(key => checkCompany[key])
      .map(el => `taxi_company=${el}`)
      .join('&');

    setQuery(
      `${listQueryStart}&departure_time=${departureTime}&${taxiCompanies}&price=${filterPrice.values[0]}&sort_list=${sort}`
    );
  }, [filterDepartureTime, checkCompany, filterPrice, sort]);

  useEffect(() => {
    direction.current = !selectedCourses.length ? '가는편' : '오는편';

    if (selectedCourses.length) setQuery(listQueryEnd);
  }, [selectedCourses]);

  useEffect(() => {
    fetch(`${API.COURSE}${query}`)
      .then(res => res.json())
      .then(res => setCourses(res.Message));
  }, [query]);

  if (!isReady) return <Loading courseInfo={queryObj} />;
  return (
    <>
      <Nav />
      <Container>
        <Main>
          <SelectCourseList>
            {selectedCourses.map(course => (
              <SelectedCourse key={course.id} course={course} />
            ))}
          </SelectCourseList>
          {selectedCourses.length < TICKET_NUM ? (
            <Content className="flex relative">
              <Aside>
                <form>
                  <CheckBoxes
                    title={company.name}
                    subTopics={company.subTopics}
                    check={checkCompany}
                    onChange={handleCheckCompany}
                  />
                  <InputRange
                    title="출발시간"
                    step={1}
                    min={0}
                    max={23}
                    value={filterDepartureTime.values}
                    onChange={setFilterDepartureTime}
                  />
                  <InputRange
                    title="가격범위"
                    step={1000}
                    min={0}
                    max={60000}
                    value={filterPrice.values}
                    onChange={setFilterPrice}
                  />
                </form>
              </Aside>
              <CourseList>
                <SortBox>
                  <p>
                    <span>{`검색결과 총 ${courses.length}개`}</span>
                    성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)
                  </p>
                  <Sort id="sort" onChange={sortCourses}>
                    <option value="price">가격 낮은 순</option>
                    <option value="dep_time">출발시간 빠른 순</option>
                    <option value="dep_time_late">출발시간 늦은 순</option>
                  </Sort>
                </SortBox>
                <UserCourse
                  direction={direction.current}
                  departure={query.departure_location_name}
                  arrival={query.arrival_location_name}
                  date={queryToObj(query).departure_date}
                ></UserCourse>
                <ul>
                  {courses.map(course => (
                    <Course
                      key={course.id}
                      info={course}
                      selectCourse={selectCourse}
                    />
                  ))}
                </ul>
              </CourseList>
            </Content>
          ) : (
            <Reservation>
              <p>
                총 예상요금
                <Price>{`${totalPrice(selectedCourses)}원`}</Price>
              </p>
              <Button
                type="button"
                width="120px"
                height="48px"
                color="blue"
                onClick={reserve}
              >
                예약하기
              </Button>
            </Reservation>
          )}
        </Main>
      </Container>
      <Footer />
    </>
  );
}

export default List;

const Container = styled.div`
  padding-bottom: 48px;
  background-color: ${({ theme }) => theme.bgGray};
`;

const Main = styled.main`
  width: 1064px;
  margin: 0 auto;
`;

const SelectCourseList = styled.ul`
  padding-top: 24px;
`;

const Content = styled.div`
  ${({ theme }) => theme.flexBox('between', 'start')}
  position: relative;
  padding-top: 24px;
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
  margin-bottom: 20px;

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

// 예약하기
const Reservation = styled.div`
  display: flex;
  padding: 20px 24px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 1px 0 rgb(0 0 0 / 15%);

  p {
    ${({ theme }) => theme.flexBox('between', 'center')}
    flex-basis: calc(100% - 120px);
    ${size('m')};
    ${bold};
  }
`;

const Price = styled.span`
  margin-right: 12px;
  ${bold};
  ${size('l')};
  ${color()};
`;

const company = {
  id: '1',
  name: '운항사',
  subTopics: [
    {
      id: '1',
      name: 'Dasul Taxi',
    },
    {
      id: '2',
      name: 'Taxi Choi-gging',
    },
    {
      id: '3',
      name: 'Art Transportation',
    },
    {
      id: '4',
      name: 'Lama 운수',
    },
    {
      id: '5',
      name: 'DaMo taxi',
    },
    {
      id: '6',
      name: 'Muy bien Trans',
    },
  ],
};

const totalPrice = arr => {
  return arr
    .reduce((accu, { price }) => accu + Number(price), 0)
    .toLocaleString();
};
