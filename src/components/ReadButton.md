# 공용 Button 사용법

<br>

# Button

## props

- width : string  
  컴포넌트의 너비값
- height : string  
  컴포넌트의 높이값

- color : string  
  배경색, 테두리색, 글자색을 지정합니다.  
  outline 이 false일 때 color값은 배경색이 됩니다.  
  outline 이 true일 때 테두리색으로 지정됩니다.  
  컬러값은 theme 컬러명을 사용할 수 있습니다.
- outline : boolean  
  자신이 만들고자 하는 button에 border가 없으면 outline은 outline={false}로 하십쇼.

- textColor  
  컴포넌트의 폰트 컬러.  
  기본값은  
  outline이 true일 때 `color`와 같은 값이,  
  outline이 false일 때 '#fff'값이 적용됩니다.  
  배경색 혹은 테두리색과 글자색을 다르게 지정하고 싶을 때 추가로 컬러값을 부여할 수 있습니다.

<br>

# RgbaButton

Button의 확장버전입니다.  
같은 props를 내려받습니다.  
테두리, 배경색이 없는 버튼입니다.  
호버시 color값의 배경색이 나타납니다.

<br>

```js
return (
  <>
    <Button width="70px" height="48px" color="blue">
      검색
    </Button>

    <Button width="70px" height="48px" color="#e7f4fd" textColor="#2b96ed">
      검색
    </Button>

    <Button width="114px" height="36px" color="#fff" outline={true}>
      회원가입
    </Button>

    <Button
      width="114px"
      height="36px"
      color="skyBlue"
      outline={true}
      textColor="#2b96ed"
    >
      회원가입
    </Button>

    <RgbaBtn width="100px" height="36px" color="#fff">
      로그인
    </RgbaBtn>
  </>
);
```

![Button 컴포넌트 예제](https://images.velog.io/images/dbk03053/post/e211bbe7-9561-4d64-81db-1131f9ee33b5/%EB%B2%84%ED%8A%BC%EA%B3%B5%EC%9A%A9_%EC%98%88%EC%A0%9C.gif)
