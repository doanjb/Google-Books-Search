import React, { Component } from 'react';
import API from '../utils/API';
import Book from '../Book/Book';
import SearchBar from './SearchBar';

export default class Search extends Component {
  state = {
    books: [],
    type: 'search'
  };

  searchBook = searchTerm => {
    if (!searchTerm) {
      alert('You must enter something to search!');
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
          console.log('err', err);
        });
    }
  };

  view = link => {
    window.location.href = link;
  };

  save = (bookId, title, authors, description, image, link) => {
    API.saveBook(bookId, title, authors, description, image, link)
      .then(res => alert('book saved'))
      .catch(err => {
        console.log('err :', err);
      });
  };

  render() {
    return (
      <main className='container-fluid px-0 pt-5 px-3'>
        <SearchBar searchBook={this.searchBook} />
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
              save={this.save}
              type={this.state.type}
            />
          );
        })}
      </main>
    );
  }
}
