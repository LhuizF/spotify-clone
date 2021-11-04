import styled from 'styled-components';
import Colors from '../../style/Colors';

export const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: ${Colors.secColor};
    color: ${Colors.mainFont};

    .back-container {
        position: absolute;
        display: flex;
        align-items: center;
        left: 20px;
        font-size: 24px;
        height: 100px;

        img {
            height: 70px;
            margin-left: 10px;
        }
    }

    p {
        color: ${Colors.secFont};
        font-size: 18px;
        font-weight: 700;
    }

    .description {
        width: 100%;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
