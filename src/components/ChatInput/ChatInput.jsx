import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Container, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserLogin from '../UserLogin';
import './ChatInput.scss';

const ChatInput = (props) => {
    const login_later = useSelector(state => state.user.loginLater);
    const is_login = useSelector(state => state.user.isLogin);

    const [showLogin, setShowLogin] = useState(false);
    const [loginLater, setLoginLater] = useState(login_later);
    const [isLogin, setIsLogin] = useState(is_login);

    useEffect(() => {
        setLoginLater(login_later);
    }, [login_later]);

    useEffect(() => {
        setIsLogin(is_login);
    }, [is_login]);
    
    const checkLogin = (event) => {
        if (isLogin || loginLater) {
            setShowLogin(false);
            props.send(event);
        } else {
            setShowLogin(true);
        }
    }

    return (
        <Container className="my-5">
            <Col md="6" className="mx-auto">
                <div className="ChatInput">
                    <FormControl 
                        placeholder="Type a message... and Hit enter to send"
                        aria-label="message"
                        onKeyDown={(event)=>checkLogin(event)}
                    />
                    {/* <input onKeyDown={(event) => checkLogin(event)} placeholder="Type a message... Hit Enter to Send"/> */}
                    {showLogin && <UserLogin/>}
                </div>
            </Col>
        </Container>
    );
};

export default ChatInput;