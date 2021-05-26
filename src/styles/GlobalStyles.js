import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Aguafina+Script&display=swap');
  ${reset}
  a {
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    outline: none;
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    background: none;
  }
  `;

export default GlobalStyles;
