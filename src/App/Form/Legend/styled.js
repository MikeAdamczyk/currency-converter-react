import styled from "styled-components";

export const LegendInfo = styled.legend`
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
    border-radius: 10px 10px;
    text-align: center;
    box-shadow: 5px 5px 10px -6px #5B5B5B;
`;