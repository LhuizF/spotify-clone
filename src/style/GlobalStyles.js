import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: #181818;
        color: #fff;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;
