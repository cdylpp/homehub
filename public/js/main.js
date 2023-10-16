document.addEventListener("DOMContentLoaded", function() {
    fetchWeatherData();
    fetchNewsData();
});

function fetchWeatherData() {
    const API_KEY = "e54594b268e7bdca3526038d43e8e568"; 
    const CITY = "San Diego"; 
    const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            const weatherWidget = document.querySelector(".widget");
            const weatherInfo = `
                <h3>Weather in ${data.name}</h3>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            weatherWidget.innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error("Error fetching weather data: ", error);
        });
}

function fetchNewsData() {
    const API_KEY = "xFtc2XLZguyQFsTOECDahE2Y-6kNbwRA1QOuFPSGdSwbj22g"; // Replace with your Currents API key
    const ENDPOINT = `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}`;

    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            const newsWidget = document.querySelector(".news-list");
            let allNewsItems = '';

            data.news.forEach(article => {
                const newsItem = `
                    <li>
                        <h4>${article.title}</h4>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank" class="news-link">Read More</a>
                    </li>
                `;
                allNewsItems += newsItem;
            });

            newsWidget.innerHTML = allNewsItems;
        })
        .catch(error => {
            console.error("Error fetching news data: ", error);
        });
}