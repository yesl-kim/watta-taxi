# Wa:tta Taxi

> [데모영상](https://youtu.be/1TwI_AG3N6Y)  
> [회고록]()

<br />

|           |               Front-end                |        Back-end        |
| :-------: | :------------------------------------: | :--------------------: |
|   팀원    |     김예슬, 이다슬, 윤세용, 최원근     |     박은혜, 양영건     |
| 기술 스택 | JavaScript, React.js, Styled-component | Python, Django, My SQL |

---

## 🖍 프로젝트 소개

- 국내에 수상택시 서비스가 있다는 것 알고 계셨나요? 수상택시를 이용하는 데는 여러 불편함이 있었습니다.

- 이용객의 이런 불편을 해소하고 더 나은 서비스를 제공하고자 **국내 여행객들이 쉽게 수상택시를 검색, 예약하고 이용할 수 있도록 도와주는 사이트**를 기획하게 되었습니다.

- 디자인은 '마이리얼트립' 사이트를 참고하였습니다.

  > 여기서 잠깐! 🚤 Wa:tta Taxi의 세가지 의미
  >
  > 1.  수상(Water)의 영국식 발음 오우타 => 와타
  > 2.  와~따👍🏻(최고)택시
  > 3.  와! 타!(와서 타!) 택시

<br/>

### 제공 서비스

- 카카오 소셜 로그인
- 여행일정에 따른 티켓 검색
- 택시회사, 가격대 등에 따라 티겟 필터, 정렬
- 티켓 예약 후 예약 페이지에서 확인
- 택시 기사 평점, 댓글

<br/>
<br/>

## 🎯 프로젝트 목표

- React 클래스형 컴포넌트와 함수형 컴포넌트의 차이를 이해하고 React hook 과 styled-component 학습

- 사이트 내 유저 플로우 한 사이클을 구현
  (회원가입 → 로그인 → 티켓 검색 → 예약 → 예약 확인 → 이용한 기사님 평점 혹은 댓글)

<br/>

## 📌 프로젝트 진행

### 업무 관리

- 매일 Daily Scrum을 통해 blocker와 필요한 사항들을 빠르게 협의
- 매주 Sprint 회의를 통해 진행상황을 검토하고 우선순위에 따라 일정 조율
- Trello를 통해 백엔드 개발자와 필요한 데이터 구조, api 주소 공유, 일정 확인

<br/>

### 구현 사항

#### **검색바**

![검색바](https://github.com/yesl-kim/watta-taxi/blob/main/search-bar.png?raw=true)

- 왕복, 편도에 따라 검색바 조건부 렌더링
- react-date-range 라이브러리 사용, 달력에서 날짜, 기간 선택
- `useHistory`의 push 메소드를 사용하여 검색 조건을 쿼리스트링으로 다음 페이지에 전달

#### **로딩 페이지**

![로딩페이지](https://github.com/yesl-kim/watta-taxi/blob/main/loading-page.png?raw=true)

- styled-components의 키프레임 사용, 애니메이션 구현
- 리스트 페이지에서 서버 통신 상태에 따라 로딩 페이지 조건부 렌더링

#### **검색된 티켓 리스트 페이지**

![리스트페이지](https://github.com/yesl-kim/watta-taxi/blob/main/list-page.gif?raw=true)

- POST 메소드를 사용하여 티켓 예약
- `useRef`를 사용하여 가는편, 오는편 구분
- `location.search` 메소드로 현재 url에서 쿼리 스트링을 가져와 티켓 검색, 필터, 정렬 구현
- 컴포넌트 내에서 쿼리스트링을 쉽게 사용하기 위해 [쿼리 파싱 함수](https://yesl-kim.github.io/posts/queryString-parsing-function) 작성

<br>
<br/>

## 📢 Reference

- 이 프로젝트는 [마이리얼트립](https://www.myrealtrip.com/?utm_source=google&utm_medium=search_pc&utm_campaign=44443142579&utm_term=%EB%A7%88%EC%9D%B4%EB%A6%AC%EC%96%BC%ED%8A%B8%EB%A6%BD&gclid=Cj0KCQjwk4yGBhDQARIsACGfAeuAIh7kcexdFz1i6xNi2L-mwf0iC8-9ho5HQWvE8O7hbQPtukia4ocaApneEALw_wcB)의 기획과 디자인을 참고하여 학습 목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진은 무료 이미지를 사용하여 사실과 다를 수 있습니다.
- 이 프로젝트에서의 승강장은 실제 운영되고 있는 승강장을 기반으로 하였지만 티켓 정보와 택시 기사에 대한 정보는 사이트의 구축을 위한 임의의 데이터이며 실제와 무관합니다.
