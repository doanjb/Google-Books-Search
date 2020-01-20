import axios from 'axios';

export default {
  googleSearch: searchTerms => {
    searchTerms = searchTerms.replace(/ /g, '+');
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`);
  }
};
