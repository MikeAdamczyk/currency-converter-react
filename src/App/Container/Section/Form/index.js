import React, { useState } from "react";
import "./style.css";
import Legend from "./Legend";
import Label from "./Label";
import Button from "./Button";
import { currencies } from "../../../currencies";
import Select from "./Label/Select";


const Form = ({ result, calculateResult }) => {

    const [sourceAmount, setSourceAmount] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState("USD");

    const [targetAmount, setTargetAmount] = useState("");
    const [targetCurrency, setTargetCurrency] = useState(currencies[1].shortName);

    // const handleChange = () => {
    //     calculateResult(sourceCurrency, sourceAmount, targetCurrency);
    // };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log("dziękujemy za wymianę");
    };


    const onChangeSourceCurrency = ({target}) => {
        setSourceCurrency(target.value)
    };

    const onChangeTargetCurrency = ({target}) => {
        setTargetCurrency(target.value)
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="section__fieldset">

                {<Legend title="Wymiana waluty" />}

                {<Label
                    value={sourceAmount}
                    onChange={({ target }) => setSourceAmount(target.value)}
                    title="Chcę wymienić:"
                    name="amountToExchange"
                    min="1.0"
                    step="0.01"
                    required={true}
                    placeholder="Wpisz kwotę"
                    select={
                        <Select
                            value={sourceCurrency}
                            onChange={onChangeSourceCurrency}
                        />
                    }
                />
                }

                {<Label
                    value={targetAmount}
                    onChange={({target}) => setTargetAmount(target.value)}
                    title="Otrzymam:"
                    name="exchangedAmount"
                    readonly={true}
                    select={
                        <Select
                            value={targetCurrency}
                            onChange={onChangeTargetCurrency}
                        />
                    }
                />
                }

                {<Button title="Kupuję!" />}

            </fieldset>
        </form>
    )
};

export default Form;