var form = document.getElementById('weather-search-form');
form.addEventListener('submit', function(e) {
	e.preventDefault();
  var city = document.getElementById('city-input').value;
  fetchWeatherData();
});

function fetchWeatherData() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var weatherData = JSON.parse(xmlhttp.responseText);
      renderData(weatherData);
    }
  };

  xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=82f22ae917a8c8565e5e1da1bcaef58d', true);
  xmlhttp.send();
}

function renderData(weatherData) {
  document.getElementById('output').innerHTML = weatherData.name;
}