import React, { useState } from "react";
import "./style.css";
import Legend from "../../../Legend";
import Label from "../../../Label";
import Button from "../../../Button";
import Select from "../../../Select";

const Form = () => {


    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="section__fieldset">

                {<Legend title="Wymiana waluty" />}

                {<Label
                    value={amountToExchange}
                    onChange={onInputChange}
                    title="Chcę wymienić:"
                    name="amountToExchange"
                    min="1.0"
                    step="0.01"
                    required={true}
                    placeholder="Wpisz kwotę"
                    defaultValue="PLN"
                    select={<Select value={selectValue} onChange />}
                />
                }

                {<Label
                    value={exchangedAmount}
                    onChange={onOutputChange}
                    title="Otrzymam:"
                    name="exchangedAmount"
                    readonly={true}
                    defaultValue="USD"
                    select={<Select value={selectValueExchanged} />}
                />
                }

                {<Button title="Kupuję!" />}

            </fieldset>
        </form>
    )
};

export default Form;