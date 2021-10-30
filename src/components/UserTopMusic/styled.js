import styled from 'styled-components';

export const TopMusic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    color: #e5e5e5;

    .music-card {
        width: 94%;
        display: flex;
        align-items: center;
        background-color: #404040;
        margin-bottom: 12px;

        .music-id {
            margin: 10px;
        }

        .music-image-name-artist-container {
            display: flex;
            align-items: center;
            margin: 4px 10px 4px 0;
            width: 180px;

            img {
                width: 50px;
                margin-right: 8px;
            }
        }

        .music-album-time-container {
            display: flex;

            .music-album-name {
                margin-right: 10px;
            }

            .music-timer {
                margin-right: 10px;
            }
        }
    }
`;
