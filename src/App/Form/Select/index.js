import React from "react";
import { currencies } from "../../currencies";
import { SelectCurrency } from "./styled";

const Select = ({ value, onChange }) => (

    <SelectCurrency
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

    </SelectCurrency>
);

export default Select;