import React, { Component } from 'react';
import API from '../utils/API';
import Book from '../Book/Book';
import SearchBar from './SearchBar';
import Alert from '../Alerts/Message';

export default class Search extends Component {
  state = {
    books: [],
    type: 'search',
    alert: false,
    message: '',
    alertType: ''
  };

  searchBook = searchTerm => {
    this.resetMessage();
    if (!searchTerm) {
      Alert('You must enter something to search!');
    } else {
      API.googleSearch(searchTerm)
        .then(res => {
          const books = [];
          res.data.items.forEach(book => {
            books.push({
              bookId: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks.thumbnail
                ? book.volumeInfo.imageLinks.thumbnail
                : 'http://books.google.com/books/content?id=MMhpS90HrukC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
              link: book.volumeInfo.infoLink
            });
          });

          this.setState({ books });
        })
        .catch(err => {
          this.setState({
            alert: true,
            message: 'Error searching for books...',
            alertType: 'danger'
          });
        });
    }
  };

  view = link => {
    window.location.href = link;
  };

  save = (bookId, title, authors, description, image, link) => {
    this.resetMessage();
    API.saveBook(bookId, title, authors, description, image, link)
      .then(res => {
        this.setState({ alert: true, message: 'Success', alertType: 'success' });
      })
      .catch(err => {
        this.setState({ alert: true, message: 'Error saving book...', alertType: 'danger' });
      });
  };

  resetMessage = () => {
    this.setState({ alert: false, message: '', alertType: '' });
  };

  render() {
    return (
      <main className='container-fluid px-0 pt-5 px-3'>
        <SearchBar searchBook={this.searchBook} />

        {this.state.alert && (
          <Alert
            message={this.state.message}
            alert={this.state.alertType}
            resetMessage={this.resetMessage}
          />
        )}

        {this.state.books.map(book => {
          return (
            <Book
              key={book.bookId}
              bookId={book.bookId}
              // TODO: get authors to display seperated by commas
              title={book.title}
              image={book.image}
              author={book.author}
              description={book.description}
              link={book.link}
              view={this.view}
              save={this.save}
              type={this.state.type}
            />
          );
        })}
      </main>
    );
  }
}
