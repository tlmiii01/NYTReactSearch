const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Article
      .find({})
      .then(dbArticle => res.json(dbArticle))
      .catch(error => res.status(422).json(error));
  },
  findByID: (req, res) => {
    db.Article
      .findById(req.params.id)
      .then(dbArticle => res.json(dbArticle))
      .catch(error => res.status(422).json(error));
  },
  create: (req, res) => {
    db.Article
      .create(req.body)
      .then(dbArticle => res.json({
        id: dbArticle._id,
        title: dbArticle.title,
        date: dbArticle.date,
        url: dbArticle.url
      }))
      .catch(error => res.status(422).json(error));
  },
  remove: (req, res) => {
    db.Article
      .findById(req.params.id)
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => res.json(dbArticle))
      .catch(error => res.status(422).json(error));
  }
};