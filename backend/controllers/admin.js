const Movie = require("../models/movie");

exports.getIndex = (req, res) => {
  res.status(200).render("index");
};

exports.getAddMovie = (req, res) => {
  res.status(200).render("edit-movie");
};

exports.postMovie = (req, res) => {
  const { name, image, description } = req.body;
  const movie = new Movie({
    name: name,
    image: image,
    description: description,
  });
  movie.save();
  console.log("Movie has been added");
  res.status(201).redirect("/");
};
