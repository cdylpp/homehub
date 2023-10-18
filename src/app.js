const app = require('express')();
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const options = {
    // maps root requests (e.g. "/") to subfolder named "public"
    root: path.join(__dirname, "public") 
 };

const PORT = 8080; // You can change this to any desired port

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace this with your actual authentication logic
  // For simplicity, we'll just log the credentials
  console.log('Username:', username);
  console.log('Password:', password);

  // Send a response to the client
  res.send('Login successful!');
});

app.post('/sign-up', (req, res) => {
    const { firstName, lastName, email, usrname, pswd, link} = req.body;
    
    // Log first name, last name, and email
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);

    // Check if username is valid
    console.log('Username:', usrname);
    // Check if password is valid
    console.log('Password:', pswd);
    // Look up link, if valid link, add memeber to exisiting homehub
    console.log('Existing Link:', link);

    res.send('Account Activation Successful!')
});

// With express, you define handlers for routes.
app.get("/:filename", (req, resp) => {
    resp.sendFile(req.params.filename, options, (err) => {
       if (err) {
          console.log(err);
          resp.status(404).send("File Not Found");
       }
       else {
          console.log("Sent:", req.params.filename);
       }
    });
});

app.get('/fetch-news', (req, res) => {
    const CURRENTS_API_KEY = "xFtc2XLZguyQFsTOECDahE2Y-6kNbwRA1QOuFPSGdSwbj22g";
    const CURRENTS_ENDPOINT = `https://api.currentsapi.services/v1/latest-news?apiKey=${CURRENTS_API_KEY}`;

    fetch(CURRENTS_ENDPOINT)
        .then(response => response.json())
        .then(data => {
          console.log("Received data from Currents API:", data);
          const top3News = data.news.slice(0, 3);
          res.json(top3News);
      })
        .catch(error => {
            console.error('Error fetching news:', error);
            res.status(500).send('Failed to fetch news.');
        });
});


// 404 Middleware
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
