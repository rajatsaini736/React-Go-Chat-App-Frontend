import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let socket = new WebSocket("ws://localhost:8000/ws");
let socket = new WebSocket("ws://shrouded-ridge-25642.herokuapp.com/ws");

let connect = (cb) => {
  console.log("Attempting Connection ... ");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  }

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = (msg) => {
  console.log("sending msg: ", msg);
  socket.send(msg);
}

export { connect, sendMsg };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
