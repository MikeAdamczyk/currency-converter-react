import styled from "styled-components";
import img from "../img/money.jpg";

export const Fieldset = styled.fieldset`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 2px solid ${({ theme }) => theme.primaryColor};
    border-radius: 10px;
    padding-left: 40px;
    padding-top: 15px;
    background-image: url(${img});
    background-size: cover;
    background-blend-mode: soft-light;
    background-color: rgba(235, 235, 235, 0.700);
    box-shadow: 5px 5px 10px -6px #5B5B5B;
`;