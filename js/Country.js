// This class contains all informations about a country : name, etc.
class Country {
    static all_countries = {}

    constructor(alpha3Code, area, borders, capital, region, demonym, flag, name, population, topLevelDomain, currencies, languages){
        this.alpha3Code = alpha3Code
        this.area = area
        this.borders = borders
        this.capital = capital
        this.region = region
        this.demonym = demonym
        this.flag = flag
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
        return (this.area == "Unknown")? "Unknown" : this.population/this.area
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


class Currency{
    static all_currencies = {}
    constructor(code, name, symbol){
        this.code = code;
        this.name = name;
        this.symbol = symbol;
    }
    toString(){
        return this.code + " , " + this.name + " , " + this.symbol;
    }

}

class Language{
    static all_languages = {}

    constructor(iso639_2, name){
        this.iso639_2 = iso639_2
        this.name = name
    }

}

// Function to generate objects based on the countries.json file

function fill_db(){

    
    for(var co of countries){

        var current_country_languages = []
        var current_country_currency = []

        if (co.currencies != undefined){
            for(var cu of co.currencies){
                 current_country_currency.push(cu.code)
                 Currency.all_currencies[cu.code] = new Currency(cu.code, cu.name, cu.symbol) // Generation of a new currency object and ad it in the array all_currencies
    
            }
        }
       
        for(var lang of co.languages){
            current_country_languages.push(lang.iso639_2)
            Language.all_languages[lang.iso639_2] = new Language(lang.iso639_2, lang.name) // Generation of a new Currency object and ad it in the array all_currencies

        }

        var flag;
        if (co.flag != undefined){
           flag = co.flag;
        }
        if (co.flags != undefined){
            flag = co.flags.svg;
        }
        
        // Generation of a new country object with its currencies code(s) and languages and ad it in the array all_countries
        Country.all_countries[co.alpha3Code] = new Country(co.alpha3Code, (co.area == undefined )? "Unknown" : co.area, co.borders, co.capital, co.region, co.demonym, flag, co.name, co.population, (co.topLevelDomain == undefined )? "Unknown" : co.topLevelDomain, current_country_currency, current_country_languages)

    }
}