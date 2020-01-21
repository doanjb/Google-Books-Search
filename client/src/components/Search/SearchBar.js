import React, { Component } from 'react';

export default class SearchFormContainer extends Component {
  state = { search: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchBook(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter title of book to search'
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
          />
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={this.handleSubmit}>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
