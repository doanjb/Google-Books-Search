module.exports = (app, db) => {
  // route to get all books from the DB
  app.get('/api/books', (req, res) => {
    db.Book.find()
      .then(book => {
        res.status(200).json(book);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // route to create a books from the DB
  app.post('/api/books', (req, res) => {
    const { bookId, title, authors, description, image, link } = req.body;

    db.Book.create({ bookId, title, authors, description, image, link })
      .then(newBook => {
        res.status(200).json(newBook);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // route to delete a books from the DB
  app.delete(`/api/books/:bookId`, (req, res) => {
    const { bookId } = req.params;
    console.log('bookId :', bookId);
    db.Book.deleteOne({ bookId: bookId })
      .then(newBook => {
        res.status(200).json(newBook);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
};
