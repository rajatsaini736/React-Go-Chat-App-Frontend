import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import './Message.scss';

const Message = (props) => {
    const [message, setMessage] = useState(JSON.parse(props.message));

    console.log(message);
    let msgPrint;
    if (message.body) {
        msgPrint = JSON.parse(message.body);
    }

    return (
        <>
            {msgPrint  && msgPrint.user ? msgPrint.user : 'user'} -  {msgPrint && msgPrint.msg ? msgPrint.msg : ''}
        </>
    );
};

export default Message;