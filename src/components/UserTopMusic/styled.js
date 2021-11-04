import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        ${(props) => {
            if (props.limit == 1) {
                return `transform: rotate(-180deg);`;
            }
            return `transform: rotate(0deg);`;
        }}
        height: 26px;
        font-size: 26px;
        transition: 300ms ease-in-out;
    }
`;

export const TableContainer = styled.div`
    height: 84px;
    overflow: hidden;
`;
