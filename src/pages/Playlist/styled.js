import styled from 'styled-components';
import Colors from '../../style/Colors';

export const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${Colors.secColor};

    .goBack {
        position: absolute;
        left: 10px;
        top: 36px;
        font-size: 24px;
    }
`;
