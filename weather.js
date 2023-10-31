function getWeather() {
    const apiKey = "3cca05bdeb89ffcfea458b4379f20f59";

    const city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => console.log('Error:', error));
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const description = document.getElementById('weather-description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const icon = document.getElementById('icon');

    cityName.innerText = data.name;
    description.innerText = data.weather[0].description;
    temperature.innerText = `Temperature: ${data.main.temp}°C`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    icon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
}
