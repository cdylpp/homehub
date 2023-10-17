const path = require("path");
const express = require("express");
const app = express();
const fetch = import('node-fetch');

const PORT = 8080;
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Serve static files after the specific routes
app.use(express.static(PUBLIC_DIR));

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// For specific file types, e.g., .html
app.get("/:filename.html", (req, resp) => {
    resp.sendFile(path.join(PUBLIC_DIR, req.params.filename + '.html'), (err) => {
        if (err) {
            console.log(err);
            resp.status(404).send("File Not Found");
        } else {
            console.log("Sent:", req.params.filename + '.html');
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
