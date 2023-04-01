const xhr = new XMLHttpRequest();
xhr.open("GET", "/gatewayToRestCountries.php", true);

xhr.getResponseHeader("Content-type", "application/json");


var countries = null
xhr.send();

xhr.onload = function() {
    
    console.log("loaded")
    countries = JSON.parse(this.responseText);
    load()

  
}