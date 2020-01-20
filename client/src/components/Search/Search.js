import React, { Component } from 'react';
import API from '../utils/API';
import Book from '../Book/Book';

export default class Search extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.googleSearch('Harry Potter')
      .then(res => {
        console.log('res.data :', res.data);
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

  render() {
    return (
      <div>
        {this.state.books.map(book => {
          return (
            <Book
              key={book.bookId}
              title={book.title}
              image={book.image}
              author={book.author}
              description={book.description}
              link={book.link}
            />
          );
        })}
      </div>
    );
  }
}
