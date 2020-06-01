import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Header from '../components/Heade';
import Memver from '../components/Member';
import Footer from '../components/Footer';
import LINE from '../components/LINE';

export default () => {
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/" component={Memver} />
      </Switch>
      <LINE />
      <Footer />
    </div>
  </BrowserRouter>
}
