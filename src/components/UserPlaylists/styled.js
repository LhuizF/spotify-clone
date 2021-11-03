import styled from 'styled-components';
import Colors from '../../style/Colors';

export const PlaylistsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    .playlist-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        div {
            background-color: ${Colors.secColor};
            margin: 6px;
            text-align: center;
            font-size: 12px;
            color: ${Colors.mainFont};
            max-width: 100px;
            box-shadow: 0px 4px 2px -1px ${Colors.mainGreen};

            img {
                width: 80px;
                height: 80px;
                object-fit: cover;
                border-radius: 20px;
                margin: 5px 10px;
            }

            .playlist-description {
                font-size: 10px;
                margin: 8px 0px;
                color: ${Colors.secFont};
            }
        }
    }
`;
