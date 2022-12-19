import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
    /* background-color: #282828; */
    font-family: 'SEBANG_Gothic_Bold';
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    @font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
}

*, *::before, *::after {
    box-sizing: border-box;
  }



  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  button {
    border: none;
      :hover {
          cursor: pointer;
          background-color: #a9a9a9;
      }
      :active {
          background-color: #1e90ff;
          color: white;
      }
  }
`;

