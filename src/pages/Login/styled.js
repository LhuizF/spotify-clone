import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;

    p {
        position: relative;
        top: 94px;
        right: 25px;
        color: red;
        transform: rotate(-22deg);
        font-family: 'BlackSignature';
    }

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 80%;
        max-width: 400px;
        object-fit: cover;
    }

    button {
        margin-top: -40px;
        color: #fff;
        background-color: #1fd760;
        height: 40px;
        padding: 0 10px;
        border-radius: 0 12px 12px 12px;
        font-weight: 700;
    }
`;
