import styled from "styled-components";

export const ButtonElement = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
    border-radius: 10px;
    text-align: center;
    box-shadow: 5px 5px 10px -6px #5B5B5B;
    border: none;
    margin-bottom: 5px;


    &:hover {
        background-color: rgb(172, 15, 46);
        transform: scale(1.1);
        transition: 0.5s;
    }

    &:active {
        background-color: rgb(230, 187, 0)
    }
`;