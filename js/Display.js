var tbody = document.getElementsByClassName("list_countries")[0]


// Iterate in each country
for (var country of Object.values(Country.all_countries)){
    var div1 = document.createElement("div")
    var nameAndCode = document.createElement("div")

    // NAME
    var countryName = document.createElement("p")
    countryName.textContent = country.name
    nameAndCode.appendChild(countryName)

    // CODE
    var countryCode = document.createElement("p")
    countryCode.textContent = country.alpha3Code
    nameAndCode.appendChild(countryCode)

    div1.appendChild(nameAndCode)

    // FLAG
    var countryFlag = document.createElement("div")
    var countryFlagImage = document.createElement("img")

    countryFlagImage.src = country.flag
    countryFlagImage.style.height = "100px"
    countryFlag.appendChild(countryFlagImage)
    div1.appendChild(countryFlag)

    var line = document.createElement("ul")


    // POPULATION
    var countryPop = document.createElement("li")
    countryPop.textContent = country.population
    line.appendChild(countryPop)
    // AREA
    var CountryArea = document.createElement("li")
    CountryArea.textContent = country.area
    line.appendChild(CountryArea)
    // DENSITY
    var countryDensity = document.createElement("li")
    countryDensity.textContent = country.getPopDensity()
    line.appendChild(countryDensity)
    // REGION
    var countryRegion = document.createElement("li")
    countryRegion.textContent = country.region
    line.appendChild(countryRegion)

    div1.appendChild(line)
    

    // Add lines to tab
    tbody.appendChild(div1) 
}