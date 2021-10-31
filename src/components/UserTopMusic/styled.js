import styled from 'styled-components';

export const TopMusic = styled.table`
    width: 92%;
    margin: 0 auto;
    font-size: 12px;
    color: #e5e5e5;
    border-spacing: 0px 12px;

    .music-card {
        background-color: #404040;

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
