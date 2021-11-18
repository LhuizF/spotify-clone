import styled from 'styled-components';
import Colors from '../../style/Colors';

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
        user-select: none;
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
        background-color: ${Colors.mainGreen};
        height: 40px;
        padding: 0 10px;
        border-radius: 12px 12px 0 12px;
        font-weight: 700;
    }
`;
