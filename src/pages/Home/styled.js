import styled from 'styled-components';
import Colors from '../../style/Colors';

export const HeaderContainer = styled.header`
    height: 170px;
    background-color: ${Colors.secColor};

    .profile-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
            width: 150px;
            height: 150px;
            border-radius: 100%;
            position: relative;
            margin-top: 90px;
            border: 2px solid #fff;
        }

        h3 {
            margin-top: 10px;
        }
    }

    button {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #fff;
        background-color: inherit;
        position: absolute;
        top: 20px;
        right: 25px;

        svg {
            margin-left: 10px;
        }
    }
`;
