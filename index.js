
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express(); 

app.use(bodyParser.json()); 

app.get("/", (req, res) => {
    res.send("Welcome to the Bikri Bazaar");
});

const port = process.env.PORT; // Provide a default port if not set in environment variables
app.listen(port, () => {
    console.log(`Server started at port ${port}`); // Use backticks for template literals
});
