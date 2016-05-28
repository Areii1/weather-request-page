var form = document.getElementById('weather-search-form');
form.addEventListener('submit', function(e) {
	e.preventDefault();
  var city = document.getElementById('city-input').value;
  fetchWeatherData(city);
});

function fetchWeatherData(city) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var weatherData = JSON.parse(xmlhttp.responseText);
      renderData(weatherData);
    }
  };

  xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=82f22ae917a8c8565e5e1da1bcaef58d&units=metric', true);
  xmlhttp.send();
}

function renderData(weatherData) {
  document.getElementById('name-output').innerHTML = weatherData.name + ', ' + weatherData.sys.country;
  document.getElementById('date-output').innerHTML = getDate();
  document.getElementById('temp-output').innerHTML = Math.round(weatherData.main.temp) + "&#8451";
  document.getElementById('weather-type-output').innerHTML = weatherData.weather[0].main;

  var img = new Image();
  img.src = getIconSrc(weatherData);
  if (img.src != null) {
    document.getElementById('weather-type-icon').src = img.src;
  }
}

function getIconSrc(weatherData) {
  
  var weatherType = weatherData.weather[0].main;
  console.log(weatherType);
  if (weatherType === 'Clear') {
    var src = 'res/01d_clear_sky_day.png';
    return src;
  }
  else if (weatherType === 'Mist' || weatherType === 'Haze' || weatherType === 'Fog' || weatherType === 'Dust') {}
    var src = 'res/50d_mist_day.png';
    return src;
  }
  else if (weatherType === 'Rain') {
    var src = 'res/10d_rain_day.png';
    return src;
  }
  else if (weatherType === 'Clouds') {
    var src = 'res/02d_few_clouds_day.png';
    return src;
  }  
  else if (weatherType === 'Thunderstorm') {
    var src = 'res/11d_thunderstorm_day.png';
    return src;
  }
  else if (weatherType === 'Snow') {
    var src = 'res/13d_snow_day.png';
    return src;
  }
  else {
    return null;
  }
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
      dd = '0' + dd;
  } 
  if (mm < 10) {
      mm = '0' + mm;
  } 

  return today = dd + '/' + mm + '/' + yyyy;
}