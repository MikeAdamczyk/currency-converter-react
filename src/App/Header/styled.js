import styled from "styled-components";

export const Wrapper = styled.header`
    margin: 20px auto;
    text-align: center;
    font-size: 20px;
    color: ${({theme}) => theme.primaryColor};
    line-height: 1.3;
`;