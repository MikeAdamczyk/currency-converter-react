import React from "react";
import { HeaderInfo } from "./styled";

const Header = ({ title }) => (
    <HeaderInfo>
        <h1>{title}</h1>
    </HeaderInfo>
);

export default Header;