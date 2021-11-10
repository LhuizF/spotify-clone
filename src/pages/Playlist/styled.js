import styled from 'styled-components';
import Colors from '../../style/Colors';

export const HeaderContainer = styled.div`
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: ${Colors.secColor};
    color: ${Colors.mainFont};
    padding: 10px;

    button {
        position: absolute;
        left: 25px;
    }

    img {
        width: 100px;
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

export const MusicsPlaylist = styled.main`
    .btn-container {
        margin: 10px 0;
        display: flex;
        justify-content: center;
    }
`;
