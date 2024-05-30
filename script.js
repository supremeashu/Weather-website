

const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "5fbdcec0f1msh88d92556f6eb3fcp145d28jsnafb851632969",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {   

            temp.innerHTML = response.temp;
            temp1.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity1.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed1.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
    
        })
        .catch(err => console.log(err));
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    let q= city.value.charAt(0).toUpperCase() + city.value.slice(1);
    getWeather(q);
})

getWeather("Delhi");

const DELHI = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
        .then(response => response.json())
        .then(response => { 
            delhi_temp.innerHTML= response.temp;
            delhi_humidity.innerHTML= response.humidity;
            delhi_feels_like.innerHTML = response.feels_like;
        })
        .catch(err => console.log(err));    
}
const BANGALORE = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore', options)
        .then(response => response.json())
        .then(response => { 
            bangalore_temp.innerHTML= response.temp;
            bangalore_humidity.innerHTML= response.humidity;
            bangalore_feels_like.innerHTML= response.feels_like;
        })
        .catch(err => console.log(err));    
}
const MUMBAI = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
        .then(response => response.json())
        .then(response => { 
            mumbai_temp.innerHTML= response.temp;
            mumbai_humidity.innerHTML= response.humidity;
            mumbai_feels_like.innerHTML = response.feels_like;
        })
        .catch(err => console.log(err));    
}
const KOLKATA = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
        .then(response => response.json())
        .then(response => { 
            kolkata_temp.innerHTML= response.temp;
            kolkata_humidity.innerHTML= response.humidity;
            kolkata_feels_like.innerHTML = response.feels_like;
        })
        .catch(err => console.log(err));    
}


DELHI();
BANGALORE();
KOLKATA();
MUMBAI();