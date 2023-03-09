


// This class contains all informations about a country : name, etc.
class Country {
    constructor(alpha3Code, area, borders, capital, region, demonym, flags, name, population, topLevelDomain, currencies){
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
}






// Function to get informations about each country from the file countries.json
var all_countries = {}

function fill_db(){
    countries.forEach((co) => { // Iteration by each country
        
        // Creation of an array to store each currencies codes of the current country. He will use during the creation of the current country.
        var all_codes = []
        
        // Currency
        if (!co['currencies']) { // If the country haven't a currency 
            return
        }
        co['currencies'].forEach((cu) => { // Iteration by each currency of a country
            all_codes.push(cu.code)
            if(!(cu.code in Currency.all_currencies)) { // If the currency isn't present in the array all_currencies
                Currency.all_currencies[cu.code] = new Currency(cu.code, cu.name, cu.symbol) // Creation of a new currency and ad it in the array all_currencies
            }
        })
        
        // Creation of a country with his currencies code(s) and his other informations  
        all_countries[co.alpha3Code] = new Country(co.alpha3Code, co.area, co.borders, co.capital, co.region, co.demonym, co.flags, co.name, co.population, co.topLevelDomain, all_codes)
    })
}


fill_db()


/*********
 * TESTS
 *********/
// console.log(all_countries["AFG"].getCurrencies())