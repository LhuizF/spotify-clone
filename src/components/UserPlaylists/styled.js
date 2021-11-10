import styled from 'styled-components';
import Colors from '../../style/Colors';

export const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    .playlists-container {
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            display: none;
        }

        .playlist {
            background-color: ${Colors.secColor};
            margin: 6px;
            text-align: center;
            font-size: 12px;
            color: ${Colors.mainFont};
            max-width: 100px;
            box-shadow: 0px 4px 2px -1px ${Colors.mainGreen};
            height: 140px;
            overflow: hidden;
            padding: 5px 10px;

            img {
                width: 80px;
                height: 80px;
                object-fit: cover;
                border-radius: 20px;
                background-color: #282828;
            }

            p {
                margin-top: 8px;
            }

            .playlist-description {
                font-size: 10px;
                color: ${Colors.secFont};
            }
        }
    }

    .btn-container {
        position: relative;
        display: flex;
        justify-content: space-between;

        button {
            color: ${Colors.mainGreen};
            font-size: 24px;
            margin: 0 5px;
        }
    }
`;
