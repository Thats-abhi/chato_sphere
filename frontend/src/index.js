import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ChatProvider from './context/chatProvider';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <ChatProvider>
      <App />
      </ChatProvider>
    </ChakraProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

 
