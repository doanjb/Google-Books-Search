module.exports = (app, db) => {
  // route to get all books from the DB
  app.get('/book', (req, res) => {
    db.Book.find()
      .then(book => {
        res.status(200).json(book);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // route to create a books from the DB
  app.post('/book', (req, res) => {
    const { title, authors, description, image, link } = req.body;

    db.Book.create({ title, authors, description, image, link })
      .then(newBook => {
        res.status(200).json(newBook);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // route to delete a books from the DB
  app.delete('/book', (req, res) => {
    const { id } = req.body;

    db.Book.deleteOne({ _id: id })
      .then(newBook => {
        res.status(200).json(newBook);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
};
