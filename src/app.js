require("./db/connection")

const mongoose = require ("mongoose");
const yargs = require ("yargs");
const { addMovie, listMovies, deleteMovie } = require ("./movies/movieMethods");


const app = async (yargsObj) => {
    try {
        // if add is typed into terminal, addMovie function is called
        if (yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor})
        // after add function is called, listMovies function is called to show you the contents   
            console.log(await listMovies());
        // if list is typed into terminal, listMovies function is called    
        } else if (yargsObj.list) {
            console.log(await listMovies());
        } else {
            console.log("Incorrect command");
        }

        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);
 