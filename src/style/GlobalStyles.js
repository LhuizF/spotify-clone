import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';
import BlackSignature from '../fonts/BlackSignature.otf';

export default createGlobalStyle`
    @font-face{
        font-family: 'BlackSignature';
        src: local('Font Name'), local('FontName'),
        url(${BlackSignature}) format('truetype');;
        font-weight: 300;
        font-style: normal;
    }
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
