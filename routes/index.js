const express = require("express");
const path = require("path");
const router = express.Router();
const moviesJSON = require("./../resources/marvel.json");
const movieFilter = [];

const moviesName = Object.keys(moviesJSON["Marvel Cinematic Universe"]);
const movies = [];
moviesName.forEach((name) => {
  movies.push(moviesJSON["Marvel Cinematic Universe"][name]);
});

router.get("/", (req, res) => {
  if (movieFilter.length == 0) {
    res.render("index", { tittle: "Movies", movies: movies });
  }else {
    res.render("index", { tittle: "Movies", movieFilter: movies });
  }
});

module.exports = router;
