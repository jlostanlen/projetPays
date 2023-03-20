fill_db()
var countries = document.getElementById("countries")


// Iterate in each country
for (var country of Object.values(Country.all_countries)){
    var list_countries = document.createElement("article")
    list_countries.setAttribute("class", "list_countries")

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

    list_countries.appendChild(div1)

    var datas = document.createElement("ul")


    // POPULATION
    var countryPop = document.createElement("li")
    countryPop.textContent = country.population
    datas.appendChild(countryPop)
    // AREA
    var CountryArea = document.createElement("li")
    CountryArea.textContent = country.area
    datas.appendChild(CountryArea)
    // DENSITY
    var countryDensity = document.createElement("li")
    countryDensity.textContent = country.getPopDensity()
    datas.appendChild(countryDensity)
    // REGION
    var countryRegion = document.createElement("li")
    countryRegion.textContent = country.region
    datas.appendChild(countryRegion)

    list_countries.appendChild(datas)
    

    // Add lines to tab
    countries.appendChild(list_countries) 
}