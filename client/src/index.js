import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import HttpClient from './service/http';
import ChatService from './service/chat';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const chatService = new ChatService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App chatService={chatService} baseURL={baseURL} />
  </React.StrictMode>,
  document.getElementById('root')
);
