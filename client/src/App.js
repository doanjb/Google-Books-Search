import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}
