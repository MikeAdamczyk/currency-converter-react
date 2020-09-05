import React from "react";
import "./style.css";

const Clock = ({ date }) => (
    <>
        <p className="section__clockTitle">
            Dzisiaj jest:
        </p>
        <p className="section__clock">
            {date}
        </p>
    </>
);

export default Clock;