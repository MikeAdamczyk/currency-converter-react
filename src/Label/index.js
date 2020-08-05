import React from "react";
import "./style.css";

const Label = ({ title, name, min, step, required, readonly, placeholder, defaultValue }) => (

    <p>
        <label>
            <span className="section__label">{title}</span>
            <span className="section__inputBox">
                <input
                    className="section__input"
                    type="number"
                    name={name}
                    min={min}
                    step={step}
                    required={required}
                    placeholder={placeholder}
                    readOnly={readonly}
                />
                <select className="section__select" defaultValue={defaultValue}>
                    <option>PLN</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>CHF</option>
                </select>
            </span>
        </label>
    </p>
);

export default Label;