import { createGlobalStyle } from 'styled-components';
import './font.css';
import { BACKGROUND, BLACK_1, PINK_1 } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${BACKGROUND};
    /* height: 100%; */
    width: 100%;

    font-family: Pretendard;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    /* line-height: 0; */
  }

  input{
    border: none;
    background-color: transparent;

    font-size: 20px;
    color: ${BLACK_1};


    padding-bottom: 5px;
    border-bottom: 4px solid ${PINK_1};
    margin-bottom: 15px;


      /* 
    //input 기본 스타일 초기화 
     -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none; 
            */
  }

  /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
  input::-ms-clear { display: none; }

  /* input type number 에서 화살표 제거 */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
        -moz-appearance: none;
              appearance: none;
  }

  
  select {
 
    border: none;
    background-color: transparent;

    font-size: 20px;
    color: ${BLACK_1};

    padding-bottom: 5px;
    border-bottom: 4px solid ${PINK_1};
    margin-bottom: 15px;

  }

`;
export default GlobalStyle;
