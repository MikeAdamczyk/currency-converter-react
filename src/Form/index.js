import React from "react";
import "./style.css";
import Legend from "../Legend";
import Label from "../Label";
import Button from "../Button";

const Form = () => (

    <form>
        <fieldset className="section__fieldset">

            {<Legend title="Wymiana waluty" />}

            {<Label
                title="Chcę wymienić:"
                name="amountToExchange"
                min="1.0"
                step="0.01"
                required={true}
                placeholder="Wpisz kwotę"
                defaultValue="PLN"
            />
            }

            {<Label
                title="Otrzymam:"
                name="exchangedAmount"
                readonly={true}
                defaultValue="USD"
            />
            }

            {<Button title="Kupuję!" />}

        </fieldset>
    </form>

);

export default Form;