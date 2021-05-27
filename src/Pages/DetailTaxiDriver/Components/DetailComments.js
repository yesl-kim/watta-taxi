import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../config';
import { token } from '../../../Components/Token';

const DetailComments = props => {
  const [starValue, SetstarValue] = useState([...Array(5).fill(false)]);

  const [starGrade, SetstarGrade] = useState(0);
  const [comment, Setcomment] = useState('');
  const [commentList, SetcommentList] = useState([]);
  const [refreshPage, SetrefreshPage] = useState(false);

  // star value 계산 함수 (index까지 true로 바꿔서 배열 리턴) star버튼을 클릭시 실행
  const updateStarValue = index => {
    const booleanStar = [...starValue];
    for (let i = 0; i < starValue.length; i++) {
      index >= i ? (booleanStar[i] = true) : (booleanStar[i] = false);
    }
    let yellowStar = booleanStar.filter(el => true === el).length;
    SetstarGrade(yellowStar);
    SetstarValue(booleanStar);
  };

  // input에 값이 들어올때마다 값을 넣기 (input이 onchange될때마다 실행)
  const getCommentValue = e => {
    Setcomment(e.target.value);
  };

  // 엔터키 눌렀을때
  const enterKey = e => {
    if (e.key === 'Enter') {
      uploadReviewData();
    }
  };

  // 받아온 별점을 별로 그리기
  const getStar = (grade = 5) => {
    const yellowGrade = Math.floor(grade);
    const yellowStar = [...Array(yellowGrade)].map(() => (
      <I color="true" size="true" className="fas fa-star" />
    ));
    const grayStar = [...Array(5 - yellowGrade)].map(() => (
      <I size="true" className="fas fa-star" />
    ));

    return [...yellowStar, ...grayStar];
  };

  const uploadReviewData = () => {
    fetch(`${API.TAXI_DRIVER_COMMENT}?driver_id=${props.id}`, {
      method: 'POST',
      headers: {
        AUTHORIZATION: token.get(),
      },
      body: JSON.stringify({
        driver_id: 1,
        rating: starGrade,
        text: comment,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') {
          alert('리뷰가 등록되었습니다!');
          SetrefreshPage(!refreshPage);
        } else if (data.message === 'login_required') {
          alert('로그인을 해주세요');
        }
      });
    // message === access_token_refreshed  일때 조건으로 로그인 리프레시 기능 추가해야함
  };

  const deleteReviewData = deleteId => {
    fetch(`${API.TAXI_DRIVER_COMMENT}/${deleteId}`, {
      method: 'DELETE',
      headers: {
        AUTHORIZATION: token.get(),
      },
      body: JSON.stringify({
        review_id: deleteId,
        driver_id: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'invalid_user') {
          alert('본인의 댓글만 삭제 가능합니다!');
        }
        if (data.message === 'success') {
          alert('삭제완료!');
          SetrefreshPage(!refreshPage);
        }
      });
  };

  useEffect(() => {
    fetch(`${API.TAXI_DRIVER_COMMENT}?driver_id=${props.id || 1}`)
      .then(res => res.json())
      .then(review => {
        SetcommentList(review.reviews);
        Setcomment('');
      });
  }, [refreshPage, props.id]);

  return (
    <CommentContainer>
      <CommentTitle>후기</CommentTitle>
      <CommentLine />
      <CommentHeader>
        <CommentRating>
          <CommentRatingTitle>후기 평균 별점</CommentRatingTitle>
          <CommentRatingGrade>
            {Math.round(props.averageGrade * 100) / 100}
          </CommentRatingGrade>
        </CommentRating>
        <CommentDetail>
          <p>와따 택시 운행에 만족하셨나요?</p>
          <RatingStar>
            {starValue.map((eachStarValue, starIndex) => (
              <button
                key={starIndex}
                onClick={() => updateStarValue(starIndex)}
              >
                <I color={eachStarValue} className="fas fa-star" />
              </button>
            ))}
          </RatingStar>
          <CommentInput
            onKeyPress={enterKey}
            value={comment}
            onChange={getCommentValue}
          />
          <CommentButton onClick={uploadReviewData}>등록</CommentButton>
        </CommentDetail>
      </CommentHeader>
      <Review>
        {commentList.map(commentValue => (
          <ReviewContainer key={commentValue.review_id}>
            <UserContainer>
              <ReviewStar>{getStar(commentValue.rating)}</ReviewStar>
              <Reviewer>{commentValue.user_name}</Reviewer>
            </UserContainer>
            <ReviewContents>
              <p>{commentValue.review}</p>
            </ReviewContents>
            <ReviewDeleteButton
              onClick={() => deleteReviewData(commentValue.review_id)}
            >
              <i class="fas fa-trash"></i>
            </ReviewDeleteButton>
          </ReviewContainer>
        ))}
      </Review>
    </CommentContainer>
  );
};
export default DetailComments;

const CommentContainer = styled.section`
  ${({ theme }) => theme.flexBox('start', 'center')}
  flex-direction: column;
  margin-top: 50px;
`;

const CommentTitle = styled.div`
  color: #343a40;
  font-size: 22px;
  font-weight: 700;
  padding-right: 600px;
`;

const CommentLine = styled.hr`
  width: 95%;
  color: black;
  size: 10px;
`;

const CommentInput = styled.input`
  border: 2px solid #d1d5d9;
  border-radius: 5px;
  width: 450px;
  height: 60px;
  outline: none;
`;

const CommentHeader = styled.div`
  ${({ theme }) => theme.flexBox('center', 'stretch')}
  width:100%;
  margin-top: 30px;
`;

const CommentRating = styled.article`
  ${({ theme }) => theme.flexBox('center', 'center')}
  flex-direction: column;
  padding: 0px 40px;
  margin: 10px 0;
  background-color: #f8f9fa;
`;

const CommentRatingTitle = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 10px;
  color: #808991;
`;

const CommentRatingGrade = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const CommentDetail = styled.section`
  ${({ theme }) => theme.flexBox('center', 'center')}
  flex-direction: column;
  padding: 30px;
  background-color: #f8f9fa;
  margin: 10px 0 10px 20px;
  p {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.blue};
  }
`;

const RatingStar = styled.div`
  margin-bottom: 10px;
`;

const I = styled.i`
  color: ${props => (props.color ? ({ theme }) => theme.main : 'gray')};
  font-size: ${props => (props.size ? '10px' : '40px')};
  margin: ${props => (props.size ? '0' : '5px')};
`;

const CommentButton = styled.button`
  position: relative;
  margin-top: 10px;
  left: 200px;
`;

// 입력된 댓글창
const Review = styled.section`
  ${({ theme }) => theme.flexBox('start', 'center')}
  flex-direction: column;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.white};
`;

const ReviewContainer = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  padding: 20px;
  margin: 10px;
  border: 1px solid #d6e3f0;
  border-radius: 5px;
`;

const UserContainer = styled.div`
  ${({ theme }) => theme.flexBox('start', 'center')}
  flex-direction: column;
  background-color: white;
  margin-right: 10px;
`;

const Reviewer = styled.p`
  font-size: 15px;
  justify-content: center;
  font-weight: 700;
`;

const ReviewContents = styled.div`
  width: 80%;
  height: 40px;
  background-color: white;
  text-align: center;
  font-size: 15px;
  p {
    line-height: 40px;
  }
`;

const ReviewDeleteButton = styled.div`
  font-size: 18px;
  padding-left: 20px;
`;

const ReviewStar = styled.div`
  padding: 0px 5px;
  margin-bottom: 5px;
  i {
    font-size: 10px;
  }
`;
