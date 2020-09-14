import { useState, useEffect } from "react";

export const useCurrentDate = () => {

    const formatDate = (date) => date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return {
        date,
        formatDate,
    }
};