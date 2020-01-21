import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          Google Books
        </a>

        <a className='nav-item nav-link text-white' href='/'>
          Search
        </a>
        <a className='nav-item nav-link text-white' href='/saved'>
          Saved
        </a>
      </nav>
    );
  }
}
