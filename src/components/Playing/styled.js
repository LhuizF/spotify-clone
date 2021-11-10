import styled from 'styled-components';
import Colors from '../../style/Colors';

export const PlayingContainer = styled.div`
    position: fixed;
    bottom: 0;
    background-color: ${Colors.secColor};
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70px;
        position: absolute;
        left: 20px;
    }

    .name-player-container {
        width: 40%;
        max-width: 400px;

        .player-controls {
            display: flex;
            justify-content: space-between;
        }
    }

    svg {
        font-size: 40px;
    }
`;

export const TextContainer = styled.div`
    overflow: hidden;
    white-space: nowrap;

    p {
        display: inline-block;
        font-size: 12px;
        color: ${Colors.mainFont};
        ${({ length }) => {
            if (length > 40) {
                console.log(length);
                return `animation: marquee 15s infinite;`;
            }
        }}
    }

    @keyframes marquee {
        0% {
            transform: translate(0, 0);
        }
        40% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-70%, 0);
        }
    }
`;
