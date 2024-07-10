const input = document.querySelector('input');
const button = document.querySelector('button');
const image = document.querySelectorAll('.weather-img');
const temperature = document.querySelector('.temp');
const descp = document.querySelector('.descp');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const error = document.querySelector('.location-error');



const checkWeather = async (city) => {
    const api_key = "acd38b3aff926461930db6ed128f3c16";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weatherData = await fetch(`${url}`).then(response => response.json());
     
    if(!response.ok){
     error.style.display = flex;
     document.querySelector(".weather-body").style.display=none;
    }

    

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    descp.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    wind.innerHTML = `${weatherData.wind.speed}Km/H`;

    switch (weatherData.weather[0].main) {
        case 'Clouds': image.src = "/assets/cloud.png";
            break;
        case 'Clear': image.src = "/assets/clear.png";
            break;
        case 'Rain': image.src = "/assets/rain.png";
            break;
        case 'Mist': image.src = "/assets/mist.png";
            break;
        case 'Snow': image.src = "/assets/snow.png";
            break;
    }

}

button.addEventListener('click', () => {
    checkWeather(input.value);
});

input.addEventListener('keydown',(event)=>{
    if (event.Code === 13 || event.key === 'Enter') {
        checkWeather(input.value);
      }
});