import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          Google Books
        </a>
        <button className='navbar-toggler' type='button' />

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <a className='nav-item nav-link' href='#'>
              Search
            </a>
            <a className='nav-item nav-link' href='#'>
              Saved
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
