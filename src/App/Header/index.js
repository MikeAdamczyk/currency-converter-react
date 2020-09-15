import React from "react";
import { Wrapper } from "./styled";

const Header = ({ title }) => (
    <Wrapper>
        <h1>{title}</h1>
    </Wrapper>
);

export default Header;