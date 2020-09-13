import React from "react";
import { MessageInfo } from "./styled";

const Message = ({ message }) => (
    <MessageInfo>
        {message}
    </MessageInfo>
);

export default Message;