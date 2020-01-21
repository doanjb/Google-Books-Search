import React, { Component } from 'react';

export default class SearchFormContainer extends Component {
  state = { search: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlesubmit = e => {
    e.preventDefault();
    this.props.searchBook(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter title of book to search'
            name='search'
            onChange={this.handleChange}
          />
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={this.handlesubmit}>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
