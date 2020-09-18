import { useState, useEffect } from "react";
// import axios from "axios";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {

        const fetchRates = async () => {

            try {
                const response = await fetch("https://api.exchangeratesapi.io/latest?base=PLN")

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date,
                })

            } catch {
                setRatesData({
                    state: "error",
                })
            }

        };

        setTimeout(fetchRates, 2000);

    }, [])

    return ratesData;
};




// const fetchData = () =>
// axios.get("https://api.exchangeratesapi.io/latest?base=PLN")
//     .then((response) => {

//         const { rates, date } = response.data;

//         setRatesData({
//             state: "success",
//             rates,
//             date,
//         })
//     })
//     .catch(
//         setRatesData({
//             state: "error"
//         })
//     );