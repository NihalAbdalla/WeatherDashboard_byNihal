var form = document.querySelector('form');
form.addEventListener('submit', buttonSubmit);

var btn = document.querySelector('.btn');
btn.addEventListener('click', searchBtn);

function searchBtn(event) {
  event.preventDefault();
  fetchWeatherApi();
}

function fetchWeatherApi(location) {

  fetch($'http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=' + location)
  .then(function (weather) {
        return weather.json();  
        })
          .then(getNewData);

        if (response.status === 400) {
        throwErrorMsg();
      } 
        else {
        displayData(newData);
        reset();
      }   
}    

function getNewData(weatherData) {
  const myData = {
    condition: weatherData.current.condition.text,
    location: weatherData.location.name.toUpperCase(),
    tempature = Math.round(weatherData.current.tempature),
    humidity = Math.round(weatherData.current.humidity),
  };

  return myData;
}

function reset() {
  form.reset();
}
