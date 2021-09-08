import React from "react";
import Message from "../Message";
import "./ChatHistory.scss";

const ChatHistory = (props) => {
    let {messages} = props;

    let DisplayMessages = () => messages.map((msg, index) => {
       return <Message message={msg.data} />
    });

    return (
        <div className="ChatHistory">
            <h2>Chat History</h2>
            <DisplayMessages />
        </div>
    );
};

export default ChatHistory;