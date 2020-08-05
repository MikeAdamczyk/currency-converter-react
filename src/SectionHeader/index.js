import React from "react";
import "./style.css";

const SectionHeader = ({ emoji, title }) => (

    <h2 className="section__h2">
        {emoji} {title}
    </h2>
);

export default SectionHeader;