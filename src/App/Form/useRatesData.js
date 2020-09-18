import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {

        const fetchData = () =>
            axios.get("https://api.exchangeratesapi.io/latest?base=PLN")
                .then((response) => {

                    const { rates, date } = response.data;

                    setRatesData({
                        state: "success",
                        rates,
                        date,
                    })
                })
                .catch(
                    setRatesData({
                        state: "error"
                    })
                );

        setTimeout(fetchData, 2000);
    }, [])

    return ratesData;
};