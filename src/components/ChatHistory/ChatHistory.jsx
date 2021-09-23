import React from "react";
import { ListGroup, Container, Col } from "react-bootstrap";
import Message from "../Message";
import "./ChatHistory.scss";
import $ from 'jquery';

const ChatHistory = (props) => {
    let {messages} = props;

    let DisplayMessages = () => messages.map((msg, index) => {
       return <ListGroup.Item><Message message={msg.data} /></ListGroup.Item>
    });

    let chatBody = document.querySelector('#chat-history-body');
    if (chatBody) {
        chatBody.scrollTop = chatBody.scrollHeight;
        chatBody.scrollTop += 300;
        console.log(chatBody.scrollHeight);
        console.log(chatBody.scrollTop);
    }
    console.log(chatBody);

    return (
        <Container className="m-5">
            <Col md="6" className="mx-auto">
                <div className="ChatHistory">
                    <h2 className="p-3">Chat History</h2>
                    <ListGroup variant="flush" className="overflow-auto" style={{maxHeight: "300px"}} id="chat-history-body">
                        <DisplayMessages />
                    </ListGroup>
                </div>
            </Col>
        </Container>
    );
};

export default ChatHistory;