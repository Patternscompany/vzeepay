import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './app/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter basename={import.meta.env.DEV ? '/' : '/vzeepay'}>
            <App />
        </HashRouter>
    </React.StrictMode>
);
