import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'NanumSquare', sans-serif;
  }
  
  button {
    font-family: 'NanumSquare', sans-serif;
  }
  
  input::placeholder { 
    font-size: 14px; 
    color: rgba(0, 0, 0, 0.50); 
    font-family: 'NanumSquare'; 
    font-weight: 400; 
    line-height: 20px; 
  }
  
  input:focus, button:focus, select:focus, textarea:focus {
    outline: none; /* 기본 포커스 아웃라인 제거 */ 
    }
`;

export default GlobalStyles;
