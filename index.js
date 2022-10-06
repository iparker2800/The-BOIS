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

// 'About' Route
app.get('/categories', function(req, res){
  res.render('categories')
})

// 'Interview1' Route
app.get('/Interview1', function(req, res){
  res.render('interviews/Interview1');
})

// 'Interview2' Route
app.get('/Interview2', function(req, res){
  res.render('interviews/Interview2');
})

// 'Interview3' Route
app.get('/Interview3', function(req, res){
  res.render('interviews/Interview3');
})

// 'Interview4' Route
app.get('/Interview4', function(req, res){
  res.render('interviews/Interview4');
})

// 'Interview5' Route
app.get('/Interview5', function(req, res){
  res.render('interviews/Interview5');
})

// 'persona1' Route
app.get('/Persona1', function(req, res){
  res.render('personas/Persona1');
})

// 'persona2' Route
app.get('/Persona2', function(req, res){
  res.render('personas/Persona2');
})

// 'scenario1' Route
app.get('/Scenario1', function(req, res){
  res.render('scenarios/Scenario1');
})

// 'scenario2' Route
app.get('/Scenario2', function(req, res){
  res.render('scenarios/Scenario2');
})

// 'user_stories' Route
app.get('/user_stories', function(req, res){
  res.render('user_stories');
})

// 'features' Route
app.get('/features', function(req, res){
  res.render('features');
})



// Start the server
app.listen(port, function() {
    console.log(`app listening on http://localhost:${port}`);
  })