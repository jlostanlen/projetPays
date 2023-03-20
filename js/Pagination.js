fill_db()
var page = 1
const TO_DISPLAY = 25
var countriesLoaded = []
var body = document.getElementsByTagName("body")[0]
var countries = document.getElementById("countries")
var btSuivant = document.getElementById("suivant")
var btPrecedent = document.getElementById("precedent")

function load(){
    for (var country of Object.values(Country.all_countries)){
        countriesLoaded.push(country);
    }
    btPrecedent.disabled = "true"
    displayData()
} 


function displayData(){
    var loop = (page - 1 ) * TO_DISPLAY

    while (loop < TO_DISPLAY * page && loop < Object.values(Country.all_countries).length){
        console.log(loop)
        var list_countries = document.createElement("article")
        list_countries.setAttribute("class", "list_countries")
    
        var div1 = document.createElement("div")
        var nameAndCode = document.createElement("div")
    
        // NAME
        var countryName = document.createElement("p")
        countryName.textContent = Object.values(Country.all_countries)[loop].name
        nameAndCode.appendChild(countryName)
    
        // CODE
        var countryCode = document.createElement("p")
        countryCode.textContent = Object.values(Country.all_countries)[loop].alpha3Code
        nameAndCode.appendChild(countryCode)
    
        div1.appendChild(nameAndCode)
        
    
        // FLAG
        var countryFlag = document.createElement("div")
        var countryFlagImage = document.createElement("img")
        countryFlagImage.src = Object.values(Country.all_countries)[loop].flag
        countryFlagImage.style.height = "100px"
        countryFlag.appendChild(countryFlagImage)
        div1.appendChild(countryFlag)
    
        list_countries.appendChild(div1)
    
        var datas = document.createElement("ul")
    
    
        // POPULATION
        var countryPop = document.createElement("li")
        countryPop.textContent = Object.values(Country.all_countries)[loop].population
        datas.appendChild(countryPop)
        // AREA
        var CountryArea = document.createElement("li")
        CountryArea.textContent = Object.values(Country.all_countries)[loop].area
        datas.appendChild(CountryArea)
        // DENSITY
        var countryDensity = document.createElement("li")
        countryDensity.textContent = Object.values(Country.all_countries)[loop].getPopDensity()
        datas.appendChild(countryDensity)
        // REGION
        var countryRegion = document.createElement("li")
        countryRegion.textContent = Object.values(Country.all_countries)[loop].region
        datas.appendChild(countryRegion)
    
        list_countries.appendChild(datas)
        
    
        // Add lines to tab
        countries.appendChild(list_countries) 
        loop++;
    }
}

btSuivant.addEventListener("click", function(){
    console.log("suivant cliqué")
    countries.innerHTML=""
    btPrecedent.disabled = false
    page++;
    (page*TO_DISPLAY >= Object.values(Country.all_countries).length)? btSuivant.disabled = true :  btSuivant.disabled = false;
    displayData();
})

btPrecedent.addEventListener("click", function(){
    console.log("précédent cliqué")
    countries.innerHTML=""
    page--;
    (page == 1)? btPrecedent.disabled = true :  btPrecedent.disabled = false;
    (page*TO_DISPLAY >= Object.values(Country.all_countries).length)? btSuivant.disabled = true :  btSuivant.disabled = false;
    displayData()
})