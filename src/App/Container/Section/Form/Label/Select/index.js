import React from "react";
import "./style.css";
import { currencies } from "../../../../../currencies";

const Select = ({value, onChange}) => (

    <select
        className="section__select"
        value={value}
        onChange={onChange}
    >

        {currencies.map((currency => (

            <option
                key={currency.shortName}
                value={currency.shortName}
            >
                {currency.shortName}
            </option>

        )))};

    </select>
);

export default Select;