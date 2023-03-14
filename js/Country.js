// This class contains all informations about a country : name, etc.
class Country {
    static all_countries = {}

    constructor(alpha3Code, area, borders, capital, region, demonym, flags, name, population, topLevelDomain, currencies, languages){
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
        this.currencies = currencies
        this.languages = languages

    }

    toString(){
        return this.name+" have this alpha code 3 : "+this.alpha3Code
    }

    getPopDensity(){
        return this.population/this.area
    }

    getBorders(){
        return this.borders
    }

    getCurrencies(){
        return this.currencies 
    }

    getLanguages(){
        return this.languages
    }
}

// Function to get informations about each country from the file countries.json

function fill_db(){
    // Creation of an array to store each currencies codes of the current country. He will use during the creation of the current country.

    for(var co of countries){

        var current_country_languages = []
        var current_country_currency = []

        if (co.currencies != undefined){
            for(var cu of co.currencies){
                 current_country_currency.push(cu.code)
                 Currency.all_currencies[cu.code] = new Currency(cu.code, cu.name, cu.symbol) // Creation of a new currency and ad it in the array all_currencies
    
            }
        }
       
        for(var lang of co.languages){
            current_country_languages.push(lang.iso639_2)
            Language.all_languages[lang.iso639_2] = new Language(lang.iso639_2, lang.name) // Creation of a new currency and ad it in the array all_currencies

        }
        // Creation of a country with his currencies code(s) and his other informations  
        Country.all_countries[co.alpha3Code] = new Country(co.alpha3Code, co.area, co.borders, co.capital, co.region, co.demonym, co.flags, co.name, co.population, co.topLevelDomain, current_country_currency, current_country_languages)

    }
}

fill_db()

/*
console.log(Country.all_countries)
console.log(Object.values(Country.all_countries)[0].getPopDensity())
console.log(Object.values(Country.all_countries)[0].getBorders())
console.log(Object.values(Country.all_countries)[0].getCurrencies())
console.log(Object.values(Country.all_countries)[0].getLanguages())
*/