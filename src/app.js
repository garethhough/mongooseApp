require("./db/connection");

const mongoose = require("mongoose");
const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  removeMovie,
} = require("./movies/movieMethods");

const app = async (yargsObj) => {
  try {
    // if add is typed into terminal, addMovie function is called
    //node src/app.js --add --title="spiderman" --actor="tom holland" --releaseDate="2022"
    if (yargsObj.add) {
      await addMovie({
        title: yargsObj.title,
        actor: yargsObj.actor,
        releaseDate: yargsObj.releaseDate,
      });
      // after add function is called, listMovies function is called to show you the contents
      console.log(await listMovies());
      // if list is typed into terminal, listMovies function is called
      // node src/app.js --list
    } else if (yargsObj.list) {
      console.log(await listMovies());
      // if remove is typed into terminal, removeMovie function is called
      // node src/app.js --remove --title="spiderman"
    } else if (yargsObj.remove) {
      await removeMovie({
        title: yargsObj.title,
      });
      console.log(await listMovies());
      // if update is typed into terminal, updateMovie function is called
      // node src/app.js --update="filmToUpdate" --title="newFilmTitle" --actor="newActorName" --releaseDate="newDate"
    } else if (yargsObj.update) {
      await updateMovie(
        {title: yargsObj.update}, 
        {actor: yargsObj.actor,
        releaseDate: yargsObj.releaseDate,});
      console.log(updateMovie);
    } else {
      console.log("Incorrect command");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
