import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient.ts';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from 'store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <ApolloProvider client={apolloClient}>
     <BrowserRouter basename="/">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </ApolloProvider>
  </Provider>
);

