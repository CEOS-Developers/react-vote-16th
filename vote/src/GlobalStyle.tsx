import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export default GlobalStyle;
