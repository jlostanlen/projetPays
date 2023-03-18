var table = document.getElementsByClassName("datas")[0];
var page = 1
const TO_DISPLAY = 25
var countries = []
var body = document.getElementsByTagName("body")[0]
var tbody = document.getElementsByClassName("list_countries")[0]
var btSuivant = document.getElementById("suivant")
var btPrecedent = document.getElementById("precedent")


for (var country of Object.values(Country.all_countries)){
    countries.push(country);
}

function load(){
    btPrecedent.disabled = "true"
    displayData()
} 


function displayData(){
    var loop = (page - 1 ) * TO_DISPLAY

    while (loop < TO_DISPLAY * page && loop < countries.length){
        var div1 = document.createElement("div")
        var nameAndCode = document.createElement("div")

        // NAME
        var countryName = document.createElement("p")
        countryName.textContent = countries[loop].name
        nameAndCode.appendChild(countryName)

        // CODE
        var countryCode = document.createElement("p")
        countryCode.textContent = countries[loop].alpha3Code
        nameAndCode.appendChild(countryCode)

        div1.appendChild(nameAndCode)

        // FLAG
        var countryFlag = document.createElement("div")
        var countryFlagImage = document.createElement("img")

        countryFlagImage.src = countries[loop].flag
        countryFlagImage.style.height = "100px"
        countryFlag.appendChild(countryFlagImage)
        div1.appendChild(countryFlag)

        var line = document.createElement("ul")


        // POPULATION
        var countryPop = document.createElement("li")
        countryPop.textContent = countries[loop].population
        line.appendChild(countryPop)
        // AREA
        var CountryArea = document.createElement("li")
        CountryArea.textContent = countries[loop].area
        line.appendChild(CountryArea)
        // DENSITY
        var countryDensity = document.createElement("li")
        countryDensity.textContent = countries[loop].getPopDensity()
        line.appendChild(countryDensity)
        // REGION
        var countryRegion = document.createElement("li")
        countryRegion.textContent = countries[loop].region
        line.appendChild(countryRegion)

        div1.appendChild(line)
        

        // Add lines to tab
        tbody.appendChild(div1) 
        loop++;
    }
}

btSuivant.addEventListener("click", function(){
    console.log("cliqué")
    table.innerHTML=""
    btPrecedent.disabled = false
    page++;
    (page*TO_DISPLAY >= countries.length)? btSuivant.disabled = true :  btSuivant.disabled = false
    displayData();
})

btPrecedent.addEventListener("click", function(){
    console.log("cliqué")
    table.innerHTML=""
    page--;
    (page == 1)? btPrecedent.disabled = true :  btPrecedent.disabled = false
    displayData()
})