const app = require('express')();
const bodyParser = require('body-parser');

const PORT = 8080; 

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(require('express').static('public'));

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
