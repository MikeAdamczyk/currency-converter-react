import React, { useState } from "react";
import "./style.css";
import Legend from "./Legend";
import Label from "./Label";
import Button from "./Button";
import { currencies } from "../../../currencies";
import Select from "./Label/Select";


const Form = ({ result, calculateResult }) => {

    const [sourceAmount, setSourceAmount] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState(currencies[0].shortName);

    const [targetAmount, setTargetAmount] = useState("");
    const [targetCurrency, setTargetCurrency] = useState(currencies[1].shortName);


    const onChange = ({ target }) => {

        console.log(`input wynosi: ${target.value}`);
        setSourceAmount(target.value);
        console.log(`sourceAmount wynosi: ${sourceAmount}`);


        calculateResult(sourceCurrency, sourceAmount, targetCurrency);

        console.log(`result wynosi: ${result}`);
        console.log(result);

        const resultCheck = () => {
            if (result === undefined) {
                return 0;
            }
            return result.targetAmount;
        };

        console.log(`targetAmount wynosi: ${resultCheck()}`);
        setTargetAmount(resultCheck());
        console.log("------------------------------------------------");
    };

    // const onChangeTargetAmount = ({ target }) => {
    //     setTargetAmount(target.value);
    // };

    const onChangeSourceCurrency = ({ target }) => {
        setSourceCurrency(target.value)
    };

    const onChangeTargetCurrency = ({ target }) => {
        setTargetCurrency(target.value)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="section__fieldset">

                <Legend title="Wymiana waluty" />

                <Label
                    value={sourceAmount}
                    onChange={onChange}
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

                <Label
                    value={targetAmount}
                    onChange={onChange}
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

                <Button title="Kupuję!" />

            </fieldset>
        </form>
    )
};

export default Form;