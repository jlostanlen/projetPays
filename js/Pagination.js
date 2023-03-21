fill_db()
var page = 1
const TO_DISPLAY = 25
var countriesDOM = document.getElementById("countries")
var btSuivant = document.getElementById("suivant")
var btPrecedent = document.getElementById("precedent")
var dataToDisplay = []
var addButtons = false

function load(){
    dataToDisplay = Object.values(Country.all_countries)
    btPrecedent.disabled = "true"
    displayData()
} 

function displayData(){
    var loop = (page - 1 ) * TO_DISPLAY
    countriesDOM.innerHTML=""
    while (loop < TO_DISPLAY * page && loop < dataToDisplay.length){
        var list_countries = document.createElement("article")
        list_countries.setAttribute("class", "list_countries")
        
    
        var div1 = document.createElement("div")
        div1.setAttribute("class", "countryHead")
        var nameAndCode = document.createElement("div")
        nameAndCode.setAttribute("class", "nameAndCode")
    
        // NAME
        var countryName = document.createElement("p")
        countryName.textContent = dataToDisplay[loop].name
        countryName.setAttribute("class", "countryName")
        nameAndCode.appendChild(countryName)
    
        // CODE
        var countryCode = document.createElement("p")
        countryCode.textContent = dataToDisplay[loop].alpha3Code
        countryCode.setAttribute("class", "countryCode")
        nameAndCode.appendChild(countryCode)
    
        div1.appendChild(nameAndCode)
        
    
        // FLAG
        var countryFlag = document.createElement("div")
        countryFlag.setAttribute("class", "countryFlag")
        var countryFlagImage = document.createElement("img")
        countryFlagImage.src =dataToDisplay[loop].flag
        countryFlagImage.style.height = "100px"
        countryFlag.appendChild(countryFlagImage)
        countryFlag.setAttribute("flag", dataToDisplay[loop].flag);
        (addButtons)?countryFlag.setAttribute("onclick", "biggerFlag(this)"):"";
        div1.appendChild(countryFlag)
    
        list_countries.appendChild(div1)
    
        var datas = document.createElement("ul")
    
        // POPULATION
        var countryPop = document.createElement("li")
        countryPop.textContent = dataToDisplay[loop].population
        datas.appendChild(countryPop)
        // AREA
        var CountryArea = document.createElement("li")
        CountryArea.textContent = dataToDisplay[loop].area
        datas.appendChild(CountryArea)
        // DENSITY
        var countryDensity = document.createElement("li")
        countryDensity.textContent = dataToDisplay[loop].getPopDensity()
        datas.appendChild(countryDensity)
        // REGION
        var countryRegion = document.createElement("li")
        countryRegion.textContent = dataToDisplay[loop].region
        datas.appendChild(countryRegion)

        list_countries.appendChild(datas)

        if(addButtons){
            datas.setAttribute("id", dataToDisplay[loop].alpha3Code)
            datas.setAttribute("onclick", "displayMoreInfos(this.id)")
    
            var moreInfosButton = document.createElement("button");
            moreInfosButton.setAttribute("id", dataToDisplay[loop].alpha3Code);
            moreInfosButton.setAttribute("class", "moreInfosButton");
            moreInfosButton.setAttribute("onclick", "displayMoreInfos(this.id)");
            moreInfosButton.textContent = "More infos";
            list_countries.appendChild(moreInfosButton)

        }
        
        countriesDOM.appendChild(list_countries) 
        loop++;
        
    }
}

btSuivant.addEventListener("click", function(){
    console.log("suivant cliqué")
    countriesDOM.innerHTML=""
    btPrecedent.disabled = false
    page++;
    (page*TO_DISPLAY >= dataToDisplay.length)? btSuivant.disabled = true :  btSuivant.disabled = false;
    displayData();
})

btPrecedent.addEventListener("click", function(){
    console.log("précédent cliqué")
    countriesDOM.innerHTML=""
    page--;
    (page == 1)? btPrecedent.disabled = true :  btPrecedent.disabled = false;
    (page*TO_DISPLAY >= dataToDisplay.length)? btSuivant.disabled = true :  btSuivant.disabled = false;
    displayData()
})