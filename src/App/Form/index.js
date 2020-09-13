import React, { useState } from "react";
import Legend from "./Legend";
import Label from "./Label";
import Button from "./Button";
import { currencies } from "../currencies";
import Select from "./Select";
import Message from "./Message";
import parse from 'html-react-parser';
import Clock from "./Clock";
import { Fieldset } from "./styled";

const Form = () => {

    const [sourceAmount, setSourceAmount] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState(currencies[0].shortName);
    const [targetCurrency, setTargetCurrency] = useState(currencies[1].shortName);

    const sourceCurrencyRate = currencies.find(({ shortName }) => shortName === sourceCurrency).rate;
    const targetCurrencyRate = currencies.find(({ shortName }) => shortName === targetCurrency).rate;

    const [message, setMessage] = useState("")

    const onInputChange = ({ target }) => {
        setSourceAmount(target.value);
    };

    const onSourceCurrencyChange = ({ target }) => {
        setSourceCurrency(target.value)
    };

    const onTargetCurrencyChange = ({ target }) => {
        setTargetCurrency(target.value)
    };

    const targetAmount = sourceAmount === ""
        ? ""
        : (sourceAmount * sourceCurrencyRate / targetCurrencyRate).toFixed(2);


    const createMessage = () => {
        const rate = (sourceAmount / targetAmount).toFixed(2);

        let result = parse(`Gratulacje! Wymieniłeś <strong>${sourceAmount}&nbsp;${sourceCurrency}</strong> 
        na <strong>${targetAmount}&nbsp;${targetCurrency}</strong> 
        po kursie <strong>${rate}</strong>!`)

        return result;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setMessage(createMessage);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>

                <Legend title="Wymiana waluty" />

                <Clock />
                <Label
                    value={sourceAmount}
                    onChange={onInputChange}
                    title="Chcę wymienić:"
                    name="amountToExchange"
                    min="1.0"
                    step="0.01"
                    required={true}
                    placeholder="Wpisz kwotę"
                    select={
                        <Select
                            value={sourceCurrency}
                            onChange={onSourceCurrencyChange}
                        />
                    }
                />

                <Label
                    value={targetAmount}
                    onChange={onInputChange}
                    title="Otrzymam:"
                    name="exchangedAmount"
                    readonly={true}
                    select={
                        <Select
                            value={targetCurrency}
                            onChange={onTargetCurrencyChange}
                        />
                    }
                />

                <p>
                    <Button title="Kupuję!" />

                    <Message
                        message={message}
                    />
                </p>

            </Fieldset>
        </form>
    )
};

export default Form;