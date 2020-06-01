import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import AppRouter from '../src/routers/AppRouter'

ReactDOM.render(
  <>
    <AppRouter />
  </>,
  document.getElementById('root')
);
