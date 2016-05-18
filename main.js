

function loadXml(city) {
  var xhttp, xmlDoc, txt, x, i;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    xmlDoc = xhttp.responseXML;
    var xmlText = new XMLSerializer().serializeToString(xmlDoc);

    document.getElementById("demo").innerHTML = xmlText;
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&mode=xml&appid=82f22ae917a8c8565e5e1da1bcaef58d", true);
  xhttp.send();
}

var form = document.getElementById('text');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	var city = myTextArea.value;
	loadXml(city);
});