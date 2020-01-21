import React, { Component } from 'react';
import API from '../utils/API';
import Book from '../Book/Book';

export default class Saved extends Component {
  state = {
    books: [],
    type: 'saved'
  };

  componentDidMount() {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch(err => {
        console.log('err :', err);
      });
  }

  view = link => {
    window.location.href = link;
  };

  delete = bookId => {
    console.log('deleted');
    API.deleteBook(bookId)
      .then(res => console.log('res.data :', res.data))
      .catch(err => {
        console.log('err :', err);
      });
  };

  render() {
    return (
      <main className='container-fluid px-0 pt-5 px-3'>
        {this.state.books.map(book => {
          return (
            <Book
              key={book.bookId}
              bookId={book.bookId}
              title={book.title}
              image={book.image}
              author={book.author}
              description={book.description}
              link={book.link}
              view={this.view}
              delete={this.delete}
              type={this.state.type}
            />
          );
        })}
      </main>
    );
  }
}
