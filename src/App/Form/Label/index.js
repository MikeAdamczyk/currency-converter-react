import React from "react";
import { LabelTitle, InputBox, Input } from "./styled";

const Label = ({ title, name, min, step, required, readonly, placeholder, value, onChange, select }) => (
    <p>
        <label>
            <LabelTitle>
                {title}
            </LabelTitle>

            <InputBox>
                <Input
                    value={value}
                    onChange={onChange}
                    type="number"
                    name={name}
                    min={min}
                    step={step}
                    required={required}
                    placeholder={placeholder}
                    readOnly={readonly}
                />
                {select}
            </InputBox>
        </label>
    </p>
);

export default Label;