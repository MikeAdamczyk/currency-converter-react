import React, { useState, useEffect } from "react";
import "./style.css";
import Legend from "./Legend";
import Label from "./Label";
import Button from "./Button";
import { currencies } from "../../../currencies";
import Select from "./Label/Select";
import Message from "./Message";
import parse from 'html-react-parser';

const Form = () => {

    const [sourceAmount, setSourceAmount] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState(currencies[0].shortName);

    const [targetAmount, setTargetAmount] = useState(200);
    const [targetCurrency, setTargetCurrency] = useState(currencies[1].shortName);

    const sourceCurrencyRate = currencies.find(({ shortName }) => shortName === sourceCurrency).rate;
    const targetCurrencyRate = currencies.find(({ shortName }) => shortName === targetCurrency).rate;

    const [message, setMessage] = useState("")

    const onInputChange = ({ target }) => {
        setSourceAmount(target.value);
        setTargetAmount(((sourceAmount * sourceCurrencyRate) / targetCurrencyRate).toFixed(2));
    };

    useEffect(() => {

        const calculateResult = () => {
            if (sourceAmount === "") {
                return "";
            }
            return ((sourceAmount * sourceCurrencyRate) / targetCurrencyRate).toFixed(2);
        };

        setTargetAmount(calculateResult);

    }, [sourceAmount, sourceCurrencyRate, targetCurrencyRate]);


    const onSourceCurrencyChange = ({ target }) => {
        setSourceCurrency(target.value)
    };

    const onTargetCurrencyChange = ({ target }) => {
        setTargetCurrency(target.value)
    };

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
            <fieldset className="section__fieldset">

                <Legend title="Wymiana waluty" />

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

            </fieldset>
        </form>
    )
};

export default Form;