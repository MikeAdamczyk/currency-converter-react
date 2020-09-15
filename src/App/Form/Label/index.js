import React from "react";
import { LabelTitle, Wrapper, Input } from "./styled";

const Label = ({ title, name, min, step, required, readonly, placeholder, value, onChange, select }) => (
    <p>
        <label>
            <LabelTitle>
                {title}
            </LabelTitle>

            <Wrapper>
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
            </Wrapper>
        </label>
    </p>
);

export default Label;