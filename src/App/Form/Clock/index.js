import React, { useState, useEffect } from "react";
import { ClockTitle, ClockDisplay } from "./styled";

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return (
        <>
            <ClockTitle>
                Dzisiaj jest:
            </ClockTitle>

            <ClockDisplay>
                {formatDate(date)}
            </ClockDisplay>
        </>
    )
};

export default Clock;