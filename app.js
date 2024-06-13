const apiKey = '3fb6a5179115d2bc6ad6e03485709933';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather img');

// const display = document.querySelector('.weather');
// display.style.display = 'none';

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerText = Math.round(data.main.temp) + ('°c');
    document.querySelector('.humidity').innerText =(data.main.humidity) + '%';
    document.querySelector('.wind').innerHTML = (data.wind.speed) +(' km/h');
    
    if (data.weather[0].main === 'Clouds') {
        weatherIcon.src = "res/cloudy.png"
    }
    else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = "res/2682835_cloud_cloudy_forecast_precipitation_rain_icon.png"
    }
    else if (data.weather[0].main === 'Snow') {
        weatherIcon.src = "res/1530371_weather_clouds_snow_winter_icon.png"
    }
    else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = "res/sun.png"
    }
    


}
searchBtn.addEventListener('click', () => {
        
    checkWeather(searchBox.value)
    })


    