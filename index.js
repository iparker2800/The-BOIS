const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  let movies = [
    {
      id:1,
      title:'The Dark Knight',
      director:'Christopher Nolan',
      cast:'Christian Bale'
    },
    {
      id:2,
      title:'The Avengers',
      director:'Joss Whedon',
      cast:'Christian Bale, Robert Downey Jr., Chris Evans, Chris Hemsworth'
    }
  ];
  res.render('homepage', {
    list_of_movies: movies
  });
})

// Add Route
app.get('/movies/add', function(req, res){
  res.render('addmovie')
})

// Add Route
app.get('/movies/categories', function(req, res){
  res.render('categories')
})





// Start the server
app.listen(port, function() {
    console.log(`app listening on http://localhost:${port}`);
  })
