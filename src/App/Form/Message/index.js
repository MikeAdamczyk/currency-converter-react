import React from "react";
import { StyledMessage } from "./styled";

const Message = ({ message }) => (
    <StyledMessage>
        {message}
    </StyledMessage>
);

export default Message;