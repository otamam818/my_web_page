import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {Main} from './main.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='background-img'></div>
    <Main />
  </React.StrictMode>
);

