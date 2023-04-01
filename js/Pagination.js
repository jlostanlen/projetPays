
var page = 1
const TO_DISPLAY = 25
var countriesDOM = document.getElementById("countries")
var btSuivant = document.getElementById("suivant")
var btPrecedent = document.getElementById("precedent")
var dataToDisplay = []
var addButtons = false


function load(){
    fill_db()
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
    
        var table = document.createElement("table")
        var tbody = document.createElement("tbody")
    
        // POPULATION
        var countryPopRow = document.createElement("tr")
        var countryPopHead = document.createElement("th")
        countryPopHead.textContent = "Population"
        countryPopRow.append(countryPopHead)

        var countryPop = document.createElement("td")
        countryPop.textContent = dataToDisplay[loop].population
        countryPopRow.appendChild(countryPop)
        tbody.appendChild(countryPopRow)

        // AREA
        var countryAreaRow = document.createElement("tr")
        var countryAreaHead = document.createElement("th")
        countryAreaHead.textContent = "Area"
        countryAreaRow.append(countryAreaHead)

        var area = document.createElement("td")
        area.textContent = dataToDisplay[loop].area
        countryAreaRow.appendChild(area)
        tbody.appendChild(countryAreaRow)
        // DENSITY
        var countryDensityRow = document.createElement("tr")
        var countryDensityHead = document.createElement("th")
        countryDensityHead.textContent = "Density"
        countryDensityRow.append(countryDensityHead)

        var density = document.createElement("td")
        density.textContent = dataToDisplay[loop].getPopDensity()
        countryDensityRow.appendChild(density)
        tbody.appendChild(countryDensityRow)


        // REGION
        var countryRegionRow = document.createElement("tr")
        var countryRegionHead = document.createElement("th")
        countryRegionHead.textContent = "Region"
        countryRegionRow.append(countryRegionHead)

        var region = document.createElement("td")
        region.textContent = dataToDisplay[loop].region
        countryRegionRow.appendChild(region)
        tbody.appendChild(countryRegionRow)

        table.appendChild(tbody)
        list_countries.appendChild(table)

        
        if(addButtons){
            table.setAttribute("id", dataToDisplay[loop].alpha3Code)
            table.setAttribute("onclick", "displayMoreInfos(this.id)")
    
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