import React from "react";
import "./style.css";

const Button = ({ title }) => (
    <p>
        <button className="section__button">{title}</button>
        <span className="section__message"></span>
    </p>
);

export default Button;