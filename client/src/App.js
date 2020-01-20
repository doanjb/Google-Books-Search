import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Layout/Navbar';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';

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
