import React, { Component } from 'react';
import Jumbotron from './functions/Jumbotron';
import Search from '../Search/Search';

export default class Main extends Component {
  render() {
    return (
      <main className='container-fluid px-0 pt-5 px-3'>
        <Jumbotron />
        <Search />
      </main>
    );
  }
}
