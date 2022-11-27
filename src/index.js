import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import WelcomeContent from './WelcomeContent';
import WhatIDo from './WhatIDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WelcomeContent />
    <WhatIDo />
  </React.StrictMode>
);

