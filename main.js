var form = document.getElementById('text');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	var city = myTextArea.value;
	loadDoc();
});

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    myFunction(xhttp);
    }
  };
  xhttp.open("GET", "weather.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  var xmlText = (new XMLSerializer()).serializeToString(xmlDoc);

  document.getElementById("demo").innerHTML = xmlText;
}