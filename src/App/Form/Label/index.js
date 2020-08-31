import React from "react";
import "./style.css";

const Label = ({ title, name, min, step, required, readonly, placeholder, value, onChange, select }) => (
    <p>
        <label>
            <span className="section__label">{title}</span>
            <span className="section__inputBox">
                <input
                    value={value}
                    onChange={onChange}
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