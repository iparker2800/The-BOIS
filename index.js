const express = require('express');
const path = require('path');
const request = require('request');
//const admin = require("firebase-admin");

const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, "public")));

/*
const firebaseConfig = {
  apiKey: "AIzaSyAh4HUzF_0OcsidZTqflTs2K1sjneF7gRw",
  authDomain: "the-bois-1bd68.firebaseapp.com",
  projectId: "the-bois-1bd68",
  storageBucket: "the-bois-1bd68.appspot.com",
  messagingSenderId: "268379744417",
  appId: "1:268379744417:web:ade23a1a9c8eff0617e8e0",
  measurementId: "G-E2PGRED24B"
};
admin.initializeApp(firebaseConfig);
*/
// 'Home' Route
app.get('/', function(req, res){
  res.render('homepage');
})

// 'Results' Route
app.get('/Results', (req, res)=>{
  res.render('results')
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


// 'persona1' Route
app.get('/Persona1', function(req, res){
  res.render('personas/Persona1');
})

// 'persona2' Route
app.get('/Persona2', function(req, res){
  res.render('personas/Persona2');
})

// 'persona3' Route
app.get('/Persona3', function(req, res){
  res.render('personas/Persona3');
})

// 'scenario1' Route
app.get('/Scenario1', function(req, res){
  res.render('scenarios/Scenario1');
})

// 'scenario2' Route
app.get('/Scenario2', function(req, res){
  res.render('scenarios/Scenario2');
})

// 'scenario3' Route
app.get('/Scenario3', function(req, res){
  res.render('scenarios/Scenario3');
})

// 'scenario4' Route
app.get('/Scenario4', function(req, res){
  res.render('scenarios/Scenario4');
})

// 'scenario5' Route
app.get('/Scenario5', function(req, res){
  res.render('scenarios/Scenario5');
})

// 'scenario6' Route
app.get('/Scenario6', function(req, res){
  res.render('scenarios/Scenario6');
})

// 'scenario7' Route
app.get('/Scenario7', function(req, res){
  res.render('scenarios/Scenario7');
})

// 'scenario8' Route
app.get('/Scenario8', function(req, res){
  res.render('scenarios/Scenario8');
})

// 'scenario9' Route
app.get('/Scenario9', function(req, res){
  res.render('scenarios/Scenario9');
})

// 'user_stories' Route
app.get('/user_stories', function(req, res){
  res.render('user_stories');
})

// 'features' Route
app.get('/features', function(req, res){
  res.render('features');
})

// 'design artifacts' Route
app.get('/design_artifacts', function(req, res){
  res.render('design_artifacts');
})

// 'design artifacts' Route
app.get('/design_documents', function(req, res){
  res.render('architectural_design/design_documents');
})

app.get('/:id', function(req, res){
  res.render('chosen_movie');
})

// Start the server
app.listen(port, function() {
    console.log(`app listening on http://localhost:${port}`);
  })

