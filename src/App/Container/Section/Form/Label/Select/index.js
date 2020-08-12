import React from "react";
import "./style.css";

const Select = (selectValue, onSelectChange) => (

    <select
        className="section__select"
        value={selectValue}
        onChange={onSelectChange}
    >
        <option>PLN</option>
        <option>USD</option>
        <option>EUR</option>
        <option>CHF</option>
    </select>

);

export default Select;