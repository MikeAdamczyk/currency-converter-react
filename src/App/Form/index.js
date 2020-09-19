import React, { useState } from "react";
import Legend from "./Legend";
import Label from "./Label";
import Button from "./Button";
import Select from "./Select";
import Message from "./Message";
import parse from 'html-react-parser';
import Clock from "./Clock";
import { Fieldset, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const ratesData = useRatesData();
    const [sourceAmount, setSourceAmount] = useState("");

    const [sourceCurrency, setSourceCurrency] = useState("PLN");
    const [targetCurrency, setTargetCurrency] = useState("USD");

    const [sourceCurrencyRate, setSourceCurrencyRate] = useState(0);
    const [targetCurrencyRate, setTargetCurrencyRate] = useState(0);

    console.log(sourceCurrencyRate);
    console.log(targetCurrencyRate);

    const targetAmount = sourceAmount === ""
        ? ""
        : (sourceAmount / sourceCurrencyRate * targetCurrencyRate).toFixed(2);

    const [message, setMessage] = useState("")

    const onInputChange = ({ target }) => {
        setSourceAmount(target.value);
        setSourceCurrencyRate(ratesData.rates[sourceCurrency]);
        setTargetCurrencyRate(ratesData.rates[targetCurrency]);
    };

    const onSourceCurrencyChange = ({ target }) => {
        setSourceCurrency(target.value);
        setSourceCurrencyRate(ratesData.rates[sourceCurrency]);
    };

    const onTargetCurrencyChange = ({ target }) => {
        setTargetCurrency(target.value);
        setTargetCurrencyRate(ratesData.rates[targetCurrency]);
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
            <Fieldset>

                <Legend title="Wymiana waluty" />

                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Zaczekaj chwilkę...<br />
                            Ładuję kursy walut z Europejskiego Banku Centralnego.
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (
                            <Failure>
                                Hmm... Coś poszło nie tak. <br />
                                Sprawdź, czy masz połączenie z internetem i/lub spróbuj jeszcze raz za chwilę!
                            </Failure>
                        ) : (
                                <>
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
                                                ratesData={ratesData}
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
                                                ratesData={ratesData}
                                            />
                                        }
                                    />

                                    <p>
                                        <Button title="Kupuję!" />

                                        <Message
                                            message={message}
                                        />
                                    </p>
                                </>
                            )
                    )
                }
            </Fieldset>
        </form>
    )
};

export default Form;