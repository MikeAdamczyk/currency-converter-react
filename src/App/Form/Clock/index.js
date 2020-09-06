import React, { useState, useEffect } from "react";
import "./style.css";

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
            <p className="section__clockTitle">
                Dzisiaj jest:
            </p>

            <p className="section__clock">
                {formatDate(date)}
            </p>
        </>
    )
};

export default Clock;