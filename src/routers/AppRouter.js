import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import Header from '../components/Header';
import Memver from '../components/Member';
import Footer from '../components/Footer';
import LINE from '../components/LINE';
import Question from '../components/Question';
import Event from '../components/Event';
import MemberSecond from '../components/Members-2';
export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/sting-hp" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/event" component={Event} />
        <Route path="/member-2" component={MemberSecond} />
        <Route path="/member-3" component={Memver} />
        <Route path="/question" component={Question} />
      </Switch>
      <LINE />
      <Footer />
    </div>
  </BrowserRouter>
);
