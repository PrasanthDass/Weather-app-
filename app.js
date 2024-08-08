document.getElementById('fetchWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'b931cfe25a8d4f63a5384922240708'; // Replace with your actual API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const weather = data.current.condition.text;
            const temperature = data.current.temp_c;
            document.getElementById('weatherResult').innerHTML = `
                <p>Weather: ${weather}</p>
                <p>Temperature: ${temperature} &deg;C</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Could not fetch weather data: ${error.message}</p>`;
        });
});
