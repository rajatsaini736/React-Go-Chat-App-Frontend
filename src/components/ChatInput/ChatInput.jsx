import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Container, Col, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserLogin from '../UserLogin';
import './ChatInput.scss';
import sendLogo from '../ChatInput/next.png';

const ChatInput = (props) => {
    const login_later = useSelector(state => state.user.loginLater);
    const is_login = useSelector(state => state.user.isLogin);

    const [showLogin, setShowLogin] = useState(false);
    const [loginLater, setLoginLater] = useState(login_later);
    const [isLogin, setIsLogin] = useState(is_login);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setLoginLater(login_later);
    }, [login_later]);

    useEffect(() => {
        setIsLogin(is_login);
    }, [is_login]);
    
    const inputMessage = (event) => {
        setMessage(event.target.value);

        if(event.keyCode === 13) {
            checkLogin();
        }
    }

    const checkLogin = () => {
        if (isLogin || loginLater) {
            setShowLogin(false);
            props.send(message);
            setMessage('');
            document.getElementById('msg').value = '';
        } else {
            setShowLogin(true);
        }
    }

    return (
        <Container className="my-5">
            <Row className="justify-content-center pe-0">
                <Col xs="10" md="5" className="text-end">
                    <div className="ChatInput">
                        <FormControl 
                            id="msg"
                            placeholder="Type a message..."
                            aria-label="message"
                            onKeyUp={(event)=>inputMessage(event)}
                            />
                        {/* <input onKeyDown={(event) => checkLogin(event)} placeholder="Type a message... Hit Enter to Send"/> */}
                        {showLogin && <UserLogin/>}
                    </div>
                </Col>
                <Col xs="2" md="1" className="text-start" onClick={checkLogin}>
                    <img src={sendLogo} style={{maxWidth:"45px"}}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ChatInput;