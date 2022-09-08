const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, "public")));


// 'Home' Route
app.get('/', function(req, res){
  res.render('homepage');
})

// 'Add a movie' Route
app.get('/movies/add', function(req, res){
  res.render('addmovie')
})

// 'Add Route'
app.get('/movies/categories', function(req, res){
  res.render('categories')
})

/*
//active TMDB api
const MovieDB = require('node-themoviedb');
// ES6 Style
// import MovieDB from 'node-themoviedb';
const mdb = new MovieDB('076f8ddce1b5e3eab478fe0eeeb71153');
(async () => {
  try {
    const args = {
      pathParameters: {
        movie_id: 384018,
      },
    };
    const movie = await mdb.movie.getDetails(args);
    console.log(movie);
    /*
      {
        data: Object. Parsed json data of response
        headers: Object. Headers of response
      }
    
  } catch (error) {
    console.error(error);
  }
})();
*/


// Start the server
app.listen(port, function() {
    console.log(`app listening on http://localhost:${port}`);
  })




  /*
var http = require("http");
//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
*/
/*
const MovieDB = require("node-themoviedb");
const mdb = new MovieDB("e9469a1940ea2b84fcf938f51e083e07");
(async () => {
  try {
    const args = {
      pathParameters: {
        movie_id: 577922
      }
    };
    const movie = await mdb.movie.getDetails(args);
    const trailer = await mdb.movie.getVideos(args);
    // console.log(trailer.data);
    const tenet = {
      id: movie.data.id,
      name: movie.data.title,
      rating: movie.data.vote_average,
      release_date: movie.data.release_date,
      runtime: movie.data.runtime,
      synopsis: movie.data.overview,
      genres: movie.data.genres.map((g) => g.id),
      poster: movie.data.poster_path,
      trailer: trailer.data.results[0].key
    };
    console.log(tenet);
    /*
      {
        data: Object. Parsed json data of response
        headers: Object. Headers of response
      }
    
  } catch (error) {
    console.error(error);
  }
})();
*/