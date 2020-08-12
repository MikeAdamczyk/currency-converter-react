import React from "react";
import "./style.css";
import { currencies } from "../../../../../currencies";

const Select = (selectValue, onChange) => (

    <select
        className="section__select"
        value={selectValue}
        onChange={onChange}
    >

        {currencies.map((currency => (

            <option
                id={currency.shortName}
                value={currency.shortName}
            >
                {currency.shortName}
            </option>

        )))};

    </select>
);

export default Select;