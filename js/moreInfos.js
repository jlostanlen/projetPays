var table = document.getElementsByClassName("datas")[0];
var page = 1
const TO_DISPLAY = 25
var countries = []
var body = document.getElementsByTagName("body")[0]
var tbody = document.getElementsByClassName("datas")[0]
var btSuivant = document.getElementById("suivant")
var btPrecedent = document.getElementById("precedent")
var moreInfo = document.getElementById("moreInfo")
var moreInfoDisplay = document.getElementById("moreInfoDisplay")



for (var country of Object.values(Country.all_countries)){
    countries.push(country);
}

function load(){
    btPrecedent.disabled = "true"
    displayData()
} 

function addListeners(){
    var tableRows = document.getElementsByClassName("data");
    console.log(moreInfoDisplay)
    for (element of tableRows) {
        element.addEventListener("click", () =>{
            var id = element.id;
            for (var attribute of Object.values(Country.all_countries[id])){
                var line = document.createElement("tr");
                var column = document.createElement("td")
                column.textContent = attribute
                line.appendChild(column)
                moreInfoDisplay.appendChild(line)
            }
            
            moreInfo.style.display="block";
            document.getElementsByTagName("main")[0].style.filter = "blur(5px)"
        })
    }
}

function displayData(){
    var loop = (page - 1 ) * TO_DISPLAY

    while (loop < TO_DISPLAY * page && loop < countries.length){
        console.log(loop)
        var line = document.createElement("tr")
        line.setAttribute("id", countries[loop].alpha3Code);
        line.setAttribute("class", "data");


        // NAME
        var countryName = document.createElement("td")
        countryName.textContent = countries[loop].name
        line.appendChild(countryName)
        // POPULATION
        var countryPop = document.createElement("td")
        countryPop.textContent = countries[loop].population
        line.appendChild(countryPop)
        // AREA
        var CountryArea = document.createElement("td")
        CountryArea.textContent = countries[loop].area
        line.appendChild(CountryArea)
        // DENSITY
        var countryDensity = document.createElement("td")
        countryDensity.textContent = countries[loop].getPopDensity()
        line.appendChild(countryDensity)
        // REGION
        var countryRegion = document.createElement("td")
        countryRegion.textContent = countries[loop].region
        line.appendChild(countryRegion)
        // FLAG
        var countryFlag = document.createElement("td")
        var countryFlagImage = document.createElement("img")
        countryFlagImage.src = countries[loop].flag
        countryFlagImage.style.height = "100px"
        //countryFlag.textContent = country.flag
        countryFlag.appendChild(countryFlagImage)
        line.appendChild(countryFlag)
    
        // Add lines to tab
        table.appendChild(line) 
        loop++;
    }
    addListeners()

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