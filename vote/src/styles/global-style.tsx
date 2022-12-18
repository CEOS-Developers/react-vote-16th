import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
    background-color: #282828;
    font-family: 'SEBANG_Gothic_Bold';
    }
    @font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
