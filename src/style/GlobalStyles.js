import styled, { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color:${Colors.bgColor};
        color: #fff;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    button{
        cursor: pointer;
        border: none;
    }
`;
