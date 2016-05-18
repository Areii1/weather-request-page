var form = document.getElementById('text');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	var city = myTextArea.value;
  getJsonData();
});

function getJsonData() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var json = JSON.parse(xmlhttp.responseText);
      renderData(json);
    }
  };

  xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=82f22ae917a8c8565e5e1da1bcaef58d', true);
  xmlhttp.send();

}

function renderData(json) {
  document.getElementById('output').innerHTML = json.name;
}