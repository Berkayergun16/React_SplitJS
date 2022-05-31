import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient.ts';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={apolloClient}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>
);

