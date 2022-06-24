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
exports.updateMovie = async (filterObj,newDetails) => {
  try{
      return Movie.findOneAndUpdate(filterObj, newDetails);
  }
  catch(error){
      console.log(error);
  }
};

// Find and delete movie by title
exports.removeMovie = async (movieObj) => {
  try {
    await Movie.deleteOne({title: movieObj.title});
  } catch (error) {
    console.log(error);
  }
};


