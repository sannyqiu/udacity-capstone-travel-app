// Setup empty JS object to act as endpoint for all routes
let projectData = [];

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require("cors");
app.use(cors());

// Initialize the dist folder
app.use(express.static("dist"));

// Setup Server

const port = 3030;
const server = app.listen(port, () => {
  console.log(`running on port: ${port}`);
});

// Get route

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

// Geonames Post route

app.post("/geonames", (req, res) => {
  dataGeonames = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  projectData.push(dataGeonames);
  res.send(projectData);
});

// WeatherBit Post Route

app.post("/weatherbit", (req, res) => {
  dataWeatherbit = {
    high: req.body.high,
    low: req.body.low,
    description: req.body.description,
  };
  projectData.push(dataWeatherbit);
  res.send(projectData);
  console.log(`server ${projectData}`);
});

// app.post("/", (req, res) => {
//   projectData.temp = req.body.data.temp;
//   projectData.date = req.body.data.date;
//   res.send(projectData);
// });
