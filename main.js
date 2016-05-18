var form = document.getElementById('text');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	var city = myTextArea.value;
  getJsonData();
});

function getJsonData() {
  var xmlhttp = new XMLHttpRequest(),
    json;

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      json = JSON.parse(xmlhttp.responseText);
      console.log(json);
    }
  };

  xmlhttp.open('GET', 'apiData.json', true);
  xmlhttp.send();
  renderData(json);
}

function renderData(json) {
  var textElement = document.createElement('p')
  var text = document.createTextNode(json.name);
  textElement.appendChild(json);
  document.getElementById('output');
}