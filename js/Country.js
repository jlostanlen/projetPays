// This class contains all informations about a country : name, etc.
class Country {
    constructor(alpha3Code, area, borders, capital, region, demonym, flags, name, population, topLevelDomain){
        this.alpha3Code = alpha3Code
        this.area = area
        this.borders = borders
        this.capital = capital
        this.region = region
        this.demonym = demonym
        this.flags = flags
        this.name = name
        this.population = population
        this.topLevelDomain = topLevelDomain
    }

    toString(){
        return this.name+" have this alpha code 3 : "+this.alpha3Code
    }
}

// Function to get informations about each country from the file countries.json
function fill_db(){
    var all_countries = new Object()
    for (var element of countries){
        all_countries[element.alpha3Code] = new Country(element.alpha3Code, element.area, element.borders, element.capital, element.region, element.demonym, element.flags, element.name, element.population, element.topLevelDomain)
    }
    console.log(all_countries["AFG"].toString())

}

fill_db()