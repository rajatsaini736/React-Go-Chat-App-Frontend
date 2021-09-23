import './App.css';
import { connect, sendMsg } from '.';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import NewComp from './components/NewComp';
import UserLogin from './components/UserLogin';

import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container } from 'react-bootstrap';
import { SignOut } from './redux/User/user.actions';

function App(props) {
  const userName = useSelector(state => state.user.userName);
  const isLogin = useSelector(state => state.user.isLogin);
  const dispatch = useDispatch();

  const [msgList, setMsgList] = useState([]);
  const [showLogin, setShowLogin] = useState(!isLogin);
  const [toggleLogin, setToggleLogin] = useState(false);

  useEffect(() => {
    setShowLogin(!isLogin);
  }, [isLogin]);

  let callBack = (msg) => {
    msgList.push(msg);
    setMsgList([...msgList]);
  };

  useEffect(() => {
    connect(callBack);
  })

  let send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(JSON.stringify({user: userName, msg: event.target.value}));
      event.target.value = "";
    }
  }

  const handlePutName = () => setToggleLogin(true);

  const HandleRemoveName = ()  => {
    dispatch(SignOut());
    setToggleLogin(false);
  };

  const HandleCancelLogin = () => {
    setToggleLogin(false);
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory messages={msgList}/>
      <ChatInput send={send}/>
      {/* <NewComp/> */}

      {showLogin && 
      <Container className="m-5">
        <Button variant="info" onClick={handlePutName}>PUT YOUR NAME</Button>
      </Container>}
      {
        !showLogin &&
        <Container className="m-5">
          <Button variant="warning" onClick={HandleRemoveName}>Remove YOUR NAME</Button>
        </Container>
      }
      {
        toggleLogin && <UserLogin cancel={HandleCancelLogin}/>
      }
    </div>
  );
}

export default App;
