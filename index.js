const express = require('express');
const path = require('path');
const req = require('request');
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, "public")));

// 'Home' Route
app.get('/', function(req, res){
  res.render('homepage');
})

// 'About' Route
app.get('/About', function(req, res){
  res.render('About')
})


// Start the server
app.listen(port, function() {
    console.log(`app listening on http://localhost:${port}`);
  })