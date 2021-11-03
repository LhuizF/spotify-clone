import styled from 'styled-components';
import Colors from '../../style/Colors';

export const TableMusic = styled.table`
    margin-top: 3px;
    font-size: 12px;
    color: ${Colors.mainFont};
    border-spacing: 0px 12px;
    width: 100%;

    .music-card {
        background-color: ${Colors.secColor};
        box-shadow: 0px 4px 2px -1px ${Colors.mainGreen};
        border-left: 4px solid ${Colors.mainGreen};

        .music-id {
            padding: 10px;
        }

        .music-image-name-artist-container {
            display: flex;
            align-items: center;

            img {
                width: 50px;
                padding: 5px;
                margin-right: 10px;
            }
        }

        .music-timer {
            padding-right: 5px;
        }
    }
`;
