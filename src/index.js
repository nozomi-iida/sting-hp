import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Home from '../src/components/Home'
import Header from '../src/components/Heade';
import Footer from '../src/components/Footer';
import LINE from '../src/components/LINE';

ReactDOM.render(
  <div>
    <Header />
    <Home />
    <LINE />
    <Footer />
  </div>,
  document.getElementById('root')
);
