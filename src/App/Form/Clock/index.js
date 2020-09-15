import React from "react";
import { ClockTitle, ClockDisplay } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

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

    const date = useCurrentDate();

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