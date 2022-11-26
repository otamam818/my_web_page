import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Spacer from './Spacer';
import WelcomeContent from './WelcomeContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Spacer style={{height: '10vh'}} />
    <WelcomeContent />
  </React.StrictMode>
);

