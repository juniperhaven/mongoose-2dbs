// so here we require express, mongoose, axios, and cheerio
// and the homework 20, which was honestly my entire guideline for all of this since I missed three classes' worth of information and practice relevant to this homework, included morgan
// so I did too
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");

// require models for mongoose
var db = require("./models");

// port and app variables
const PORT = process.env.PORT || 8080;
const app = express();

// something to do with the logger that I don't understand
// get express set up
// use the public thing for it
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// set up mongo for what database it's using
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/default";

// connect
mongoose.connect(MONGODB_URI);

const dbc = mongoose.connection;

dbc.on('error', console.error.bind(console, 'connection error:'));
dbc.once('open', () => {
    console.log('connected');
});

// this returns the articles in JSON format
app.get("/stuff1", function(req, res) {
    db.Model1.find({}).then(function(dbModel1) {
        res.json(dbModel1);
        console.log(dbModel1);
    }).catch(function(err) {
        res.json(err);
    });
});

app.get("/stuff2", function(req, res) {
    db.Model2.find({}).then(function(dbModel2) {
        res.json(dbModel2);
        console.log(dbModel2);
    }).catch(function(err) {
        res.json(err);
    });
})

app.post("/model1", function(req, res) {
    db.Model1.create(req.body);
});

app.post("/model2", function(req, res) {
    db.Model2.create(req.body);
});

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});