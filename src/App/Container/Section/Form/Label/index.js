import React, { useState } from "react";
import "./style.css";
import Select from "./Select";

const Label = ({ title, name, min, step, required, readonly, placeholder, inputValue, onInputChange, select }) => (
    <p>
        <label>
            <span className="section__label">{title}</span>
            <span className="section__inputBox">
                <input
                    value={inputValue}
                    onChange={onInputChange}
                    className="section__input"
                    type="number"
                    name={name}
                    min={min}
                    step={step}
                    required={required}
                    placeholder={placeholder}
                    readOnly={readonly}
                />
                {select}
            </span>
        </label>
    </p>
);

export default Label;