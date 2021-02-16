const Movie = require("../models/movie");

exports.getIndex = async (req, res) => {
  const movie = await Movie.find((data) => {
    data;
  });
  try {
    console.log(movie);
    res.status(200).render("index", { movie: movie });
  } catch (error) {
    console.log(error);
  }
};

exports.getMovie = async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await Movie.findById(movieId, (movie) => movie);
  try {
    res.status(200).render("movie", { movie: movie });
  } catch (error) {
    console.log(error);
  }
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

exports.deleteMovie = async (req, res) => {
  const movieId = req.body.movieId;
  const movie = await Movie.findByIdAndDelete(movieId, (data) => data);
  try {
    console.log(movie);
    console.log("Deleted Movie");
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
