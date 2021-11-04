import styled from 'styled-components';
import Colors from '../../style/Colors';

export const TableContainer = styled.div`
    transition: all 300ms ease-out;
    height: fit-content;
    overflow: hidden;
    scroll-behavior: smooth;
    ${(props) => {
        if (props.open === 'all') return;
        return props.open ? 'height: 370px;' : 'height: 82px;';
    }}

    table {
        margin-top: 3px;
        font-size: 12px;
        color: ${Colors.mainFont};
        border-spacing: 0px 12px;
        width: 100%;

        .music-card {
            background-color: ${Colors.secColor};
            box-shadow: 0px 4px 2px -1px ${Colors.mainGreen};

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
    }
`;

export const TableMusic = styled.table``;
