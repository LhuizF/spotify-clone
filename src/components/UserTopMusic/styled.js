import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    ${(props) => (props.open ? `transform: rotate(180deg);` : null)}
    height: 26px;
    font-size: 26px;
    transition: 300ms ease-in-out;
`;
