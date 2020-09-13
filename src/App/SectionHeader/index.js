import React from "react";
import { Header } from "./styled";

const SectionHeader = ({ emoji, title }) => (
    <Header>
        {emoji}{title}
    </Header>
);

export default SectionHeader;