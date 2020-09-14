import React from "react";
import { ClockTitle, ClockDisplay } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

    const { date, formatDate } = useCurrentDate();

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