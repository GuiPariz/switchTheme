import styled from "styled-components";

export const Container = styled.div`
    color: #FFF;
    height: 60px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`