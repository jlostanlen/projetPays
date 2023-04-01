fill_db()
var countriesDOM = document.getElementById("countries")


// Iterate on every country
for (var country of Object.values(Country.all_countries)){
   var list_countries = document.createElement("article")
    list_countries.setAttribute("class", "list_countries")
    

    var div1 = document.createElement("div")
    div1.setAttribute("class", "countryHead")
    var nameAndCode = document.createElement("div")
    nameAndCode.setAttribute("class", "nameAndCode")

    // NAME
    var countryName = document.createElement("p")
    countryName.textContent = country.name
    countryName.setAttribute("class", "countryName")
    nameAndCode.appendChild(countryName)

    // CODE
    var countryCode = document.createElement("p")
    countryCode.textContent = country.alpha3Code
    countryCode.setAttribute("class", "countryCode")
    nameAndCode.appendChild(countryCode)

    div1.appendChild(nameAndCode)
    

    // FLAG
    var countryFlag = document.createElement("div")
    countryFlag.setAttribute("class", "countryFlag")
    var countryFlagImage = document.createElement("img")
    countryFlagImage.src =country.flag
    countryFlagImage.style.height = "100px"
    countryFlag.appendChild(countryFlagImage)
    countryFlag.setAttribute("flag", country.flag);
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
    countryPop.textContent = country.population
    countryPopRow.appendChild(countryPop)
    tbody.appendChild(countryPopRow)

    // AREA
    var countryAreaRow = document.createElement("tr")
    var countryAreaHead = document.createElement("th")
    countryAreaHead.textContent = "Area"
    countryAreaRow.append(countryAreaHead)

    var area = document.createElement("td")
    area.textContent = country.area
    countryAreaRow.appendChild(area)
    tbody.appendChild(countryAreaRow)
    // DENSITY
    var countryDensityRow = document.createElement("tr")
    var countryDensityHead = document.createElement("th")
    countryDensityHead.textContent = "Density"
    countryDensityRow.append(countryDensityHead)

    var density = document.createElement("td")
    density.textContent = country.getPopDensity()
    countryDensityRow.appendChild(density)
    tbody.appendChild(countryDensityRow)


    // REGION
    var countryRegionRow = document.createElement("tr")
    var countryRegionHead = document.createElement("th")
    countryRegionHead.textContent = "Region"
    countryRegionRow.append(countryRegionHead)

    var region = document.createElement("td")
    region.textContent = country.region
    countryRegionRow.appendChild(region)
    tbody.appendChild(countryRegionRow)

    table.appendChild(tbody)
    list_countries.appendChild(table)  
    countriesDOM.appendChild(list_countries) 
}