import React, { Component } from 'react';
import API from '../utils/API';
import Book from '../Book/Book';

export default class Saved extends Component {
  state = {
    books: [],
    type: 'saved'
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch(err => {
        console.log('err :', err);
      });
  };

  view = link => {
    window.location.href = link;
  };

  delete = bookId => {
    console.log('bookId :', bookId);
    API.deleteBook(bookId)
      .then(res => {
        if (res.data.deletedCount === 1) {
          this.getBooks();
        }
      })
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
