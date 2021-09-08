import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from '.';
import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import { useState, useEffect } from 'react';
import ChatInput from './components/ChatInput/ChatInput';

function App(props) {
  const [msgList, setMsgList] = useState([]);
  let callBack = (msg) => {
    msgList.push(msg);
    setMsgList([...msgList]);
    console.log(msgList);
  };

  useEffect(() => {
    connect(callBack);
  })

  let send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory messages={msgList}/>
      <ChatInput send={send}/>
    </div>
  );
}

export default App;
