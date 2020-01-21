import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Layout/Navbar';
import Search from './components/Search/Search';
import Saved from './components/Saved/Saved';
import Footer from './components/Layout/Footer';
import Jumbotron from './components/Layout/functions/Jumbotron';

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <Switch> */}
        <Navbar />
        <Jumbotron />
        <Route exact path='/' component={Search} />
        <Route exact path='/saved' component={Saved} />
        <Footer />
        {/* </Switch> */}
      </Router>
    );
  }
}
