const mongoose = require ("mongoose");
const Movie = require("./movieModels");


// movieObj is the data passed in from terminal

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)

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

//CREATE AN UPDATE ONE OR UPDATE MANY FUNCTION

//CREATE DELETE ONE OF DELETE MANY FUNCTION