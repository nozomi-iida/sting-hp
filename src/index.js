import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Attractive from './components/Attractive';
import Firstview from './components/Firstview';
import Header from './components/Header';
import Footer from './components/Footer';
import LINE from './components/LINE';
import Movie from './components/Movie';
import Place from './components/Place';
import './styles/main.scss';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Firstview />
    <About />
    <Attractive />
    <Movie />
    <Place />
    <LINE />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
