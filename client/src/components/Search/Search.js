import React, { Component } from 'react';
import API from '../utils/API';
import Book from '../Book/Book';
import SearchFormContainer from './SearchFormContainer';

export default class Search extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    // API.googleSearch('Harry Potter')
    //   .then(res => {
    //     console.log('res.data :', res.data);
    //     const books = [];
    //     res.data.items.forEach(book => {
    //       books.push({
    //         bookId: book.id,
    //         title: book.volumeInfo.title,
    //         author: book.volumeInfo.authors,
    //         description: book.volumeInfo.description,
    //         image: book.volumeInfo.imageLinks.thumbnail,
    //         link: book.volumeInfo.infoLink
    //       });
    //     });
    //     this.setState({ books });
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //   });
  }

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
              image: book.volumeInfo.imageLinks.thumbnail,
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

  save = () => {
    alert('saved');
  };

  render() {
    return (
      <React.Fragment>
        <SearchFormContainer searchBook={this.searchBook} />
        {this.state.books.map(book => {
          return (
            <Book
              key={book.bookId}
              title={book.title}
              image={book.image}
              author={book.author}
              description={book.description}
              link={book.link}
              view={this.view}
              save={this.save}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
