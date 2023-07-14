import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import WelcomeContent from './WelcomeContent';
import InfoCards from './InfoCards';
import Skills from './Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WelcomeContent />
    <InfoCards />
    <Skills />
  </React.StrictMode>
);

