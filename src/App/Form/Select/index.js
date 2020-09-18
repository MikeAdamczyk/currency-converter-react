import React from "react";
import { SelectCurrency } from "./styled";

const Select = ({ value, onChange, ratesData }) => {

    return (

        <SelectCurrency
            value={value}
            onChange={onChange}
            ratesData={ratesData}
        >

            {Object.keys(ratesData.rates).map((currency => (

                <option
                    key={currency}
                    value={currency}
                >
                    {currency}
                </option>

            )))};

        </SelectCurrency>
    )
};

export default Select;