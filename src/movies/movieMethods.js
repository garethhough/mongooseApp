const mongoose = require("mongoose");
const Movie = require("./movieModels");

// movieObj is the data passed in from terminal

exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    return await Movie.find({});
  } catch (error) {
    console.log(error);
  }
};

//find movie by title name and update title, actor, and release date
    exports.updateMovie = async (movieObj) => {
      try {
        await Movie.updateOne({title: movieObj.title, actor: movieObj.actor, releaseDate: movieObj.releaseDate});
      } catch (error) {
        console.log(error);
      }
    };

    //to do list
//CREATE DELETE ONE OF DELETE MANY FUNCTION

