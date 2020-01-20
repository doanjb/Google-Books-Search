import React, { Component } from 'react';
import Jumbotron from './functions/Jumbotron';

export default class Main extends Component {
  render() {
    return (
      <main className='container-fluid px-0 pt-5'>
        <Jumbotron />
      </main>
    );
  }
}
