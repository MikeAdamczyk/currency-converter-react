import React from "react";
import { SelectCurrency } from "./styled";
import { useRatesData } from "../useRatesData";

const Select = ({ value, onChange }) => {

    const ratesData = useRatesData();

    return (

        <SelectCurrency
            value={value}
            onChange={onChange}
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