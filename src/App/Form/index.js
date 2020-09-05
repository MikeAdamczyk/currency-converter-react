import React, { useState } from "react";
import "./style.css";
import Legend from "./Legend";
import Label from "./Label";
import Button from "./Button";
import { currencies } from "../currencies";
import Select from "./Select";
import Message from "./Message";
import parse from 'html-react-parser';
import Clock from "./Clock";

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

    let targetAmount = "";

    const calculateResult = () => {

        if (sourceAmount === "") {
            return;
        }
        targetAmount = ((sourceAmount * sourceCurrencyRate) / targetCurrencyRate).toFixed(2);
    };

    calculateResult();

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

    const [date, setDate] = useState(new Date().toLocaleString("pl-PL", { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }));

    setInterval(() => {
        setDate(new Date().toLocaleString("pl-PL", { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }))
    }, 1000);


    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="section__fieldset">

                <Legend title="Wymiana waluty" />

                <Clock date={date} />
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