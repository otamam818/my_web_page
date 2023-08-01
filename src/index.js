import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import WelcomeContent from './WelcomeContent';
import InfoCards from './InfoCards';
import Skills from './Skills';
import Footer from './Footer';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WelcomeContent />
    <InfoCards />
    <About />
    <Skills />
    <Footer />
  </React.StrictMode>
);

