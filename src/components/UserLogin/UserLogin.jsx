import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp, LoginLater } from "../../redux/User/user.actions";
import { Modal, Button, InputGroup, FormControl, Row, Container, Col } from 'react-bootstrap';

const UserLogin = (props) => {
    console.log('login works')
    const [show, setShow] = useState(true);
    const [userName, setUserName] = useState('');
    let dispatch = useDispatch();
    console.log("LOGIN SHOW", show);

    let saveUserName = () => {
        if (userName.length) {
            dispatch(SignUp(userName))
            setShow(false);
        }
    }

    const handleClose = () => {
        dispatch(LoginLater());
        setShow(false);
        props.cancel && props.cancel();
    };

    return (
        <>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Please Save Your Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={2}><Button variant="primary" onClick={saveUserName}>Save</Button></Col>
                        <Col md={2} ><Button variant="danger" onClick={handleClose}>Later</Button></Col>
                    </Row>
                </Container>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default UserLogin;