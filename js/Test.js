fill_db();

function moreNeighbors(){
    var maxNumberNeighbors = 0;
    var maxCountryNeighbor = {}
    for(var country of Object.values(Country.all_countries)){
        if (country.borders != undefined && country.getBorders().length > maxNumberNeighbors){
            maxNumberNeighbors = country.borders.length
            maxCountryNeighbor = {}
            maxCountryNeighbor[country.alpha3Code] = country
        
        }else if (country.borders != undefined && country.getBorders().length == maxNumberNeighbors){
            maxCountryNeighbor[country.alpha3Code] = country
        }
    }

    console.log("Les pays avec le plus de voisins sont :")
    for (var key of Object.keys(maxCountryNeighbor)){
        var string = ""
        for (var neighbors of Country.all_countries[key].borders){
           string = string.concat(Country.all_countries[neighbors].name, ", ")

        }
        console.log(Country.all_countries[key].name+ " avec pour voisins : "+ string)
    }

    return maxCountryNeighbor;

}

function neighborLess(){
    var noNeighbor = {}
    for(var country of Object.values(Country.all_countries)){
        if (country.borders == undefined ){
            noNeighbor[country.alpha3Code] = country
        }
    }
    var string =""
    for (var country of Object.values(noNeighbor)){
        string = string.concat(country.name, ", ")

    }
    console.log("Les pays sans voisins sont : "+ string)
    return noNeighbor;

}

function moreLanguages(){
    var maxNumberLanguages = 0;
    var maxCountryLanguages = {};
    for(var country of Object.values(Country.all_countries)){
        if (Object.keys(country.languages).length > maxNumberLanguages){
            maxNumberLanguages = Object.keys(country.languages).length
            maxCountryLanguages = {}
            maxCountryLanguages[country.alpha3Code] = country
        }else if (Object.keys(country.languages).length == maxNumberLanguages){
            maxCountryLanguages[country.alpha3Code] = country
        }
    }

    var string =""
    for (var country of Object.values(maxCountryLanguages)){
        string = string.concat(country.name, ", ")

    }
    console.log("Pays parlant le plus de langues : "+ string)

    return maxCountryLanguages
    

}


function outsideTheContinent(){
    var out = {}

    for(var country of Object.values(Country.all_countries)){
        var contryMainland = country.region;
        for (var neighborId in country.borders){
            var neighbor = country.borders[neighborId]
            if(Country.all_countries[neighbor].region !== contryMainland){
                out[country.alpha3Code] = country

            }
            
        }
    }

    var string =""
    for (var country of Object.values(out)){
        string = string.concat(country.name, ", ")
    }

    console.log("These countries have a neighbor not in the same continent: " + string)

    return out

}

function withCommonLanguages(){

    var out = {}

    for (var country of Object.values(Country.all_countries)){
        if (country.borders != undefined){
            var neighborLanguages = {}
            for (var CountrieLanguage of country.languages){
                var sharesLanguages = []
                for (var neighbor of country.borders){
                    if (Country.all_countries[neighbor].getLanguages().includes(CountrieLanguage)){
                        sharesLanguages.push(neighbor)
                    }
                }

                if(sharesLanguages.length != 0){
                    neighborLanguages[CountrieLanguage] = sharesLanguages
                }
            }
        }
        if (Object.keys(neighborLanguages).length != 0){
            out[country.alpha3Code] = neighborLanguages

        }
    }
    console.log(Object.keys(out).length)

}

function withoutCommonCurrency(){
    var noCommonCurrency = {}
    for (var country of Object.values(Country.all_countries)){
        if (country.borders != undefined){
            for (var neighbor of country.borders){
                var commonCurrency = false;
                if ( Country.all_countries[neighbor].currencies != undefined){

                    for (var currency of Country.all_countries[neighbor].currencies){
                    
                        if (country.getCurrencies().includes(currency)){
                            commonCurrency = true
                        }
                        
                    }
                }
                if (!commonCurrency){
                    noCommonCurrency[country.alpha3Code] = country
                } 
             }
        }
    }

    var string = ""
    for (var country of Object.values(noCommonCurrency)){
        string = string.concat(country.name, ", ")
    }
    console.log(string)

    console.log(Object.keys(noCommonCurrency).length)
    return noCommonCurrency
}

function moreTopLevelDomains(){
    var multipleDomains = {}
    for (var country of Object.values(Country.all_countries)){
        console.log(country.topLevelDomain)
        if (country.topLevelDomain != undefined && country.topLevelDomain.length > 1 ){
            multipleDomains[country.alpha3Code] = country
        }
    }

    var string = ""
    for (var country of Object.values(multipleDomains)){
        string = string.concat(country.name, ", ")
    }
    console.log(string)

    return multipleDomains
 
}

function sortingDecreasingDensity(){
    var sortedCountries = []
    var unknownDensity = []
    sortedCountries.push(Object.values(Country.all_countries)[0])

    for (var country of Object.values(Country.all_countries)){
        if (country.getPopDensity() ==  "Unknown"){
            unknownDensity.push(country)
        }else{
             var inserted = false
            var loop = 0
            while(loop < sortedCountries.length && !inserted){
                if (country.getPopDensity() >= sortedCountries[loop].getPopDensity()){
                    inserted = true
                    sortedCountries.splice(loop, 0, country)
                }
                loop ++
            }
        }
 
    }

    sortedCountries = sortedCountries.concat(unknownDensity)

    var string = ""
    for (var country in sortedCountries){
        string = string.concat(sortedCountries[country].name, " ("+ sortedCountries[country].getPopDensity()+"), ")
    }
    console.log(string)

    for (country of sortedCountries){
        console.log(country.getPopDensity())
    }
    
    return sortedCountries
}

function veryLongTrip(country){

    var visited = []
    return tripping(Country.all_countries[country], [])

    function tripping(country, chemin){

        visited.push(country.name)
        chemin.push(country.name)
        if (country.borders != undefined){
            for (neighbor of country.borders){
            
                neighbor = Country.all_countries[neighbor]
                if(!visited.includes(neighbor.name)){
                    tripping(neighbor, chemin)
                }
            }
        }

        return chemin
    }

}

function complement(){
    var max = 0
    var maxCountry   
    for (country of Object.keys(Country.all_countries)){
        trip = veryLongTrip(country).length
        if (max < trip){
            max = trip
            maxCountry = Country.all_countries[country]
        }
        
    }

    console.log(maxCountry.name + " : "+ max)
}
//console.log(outsideTheContinent())
//console.log(moreNeighbors())
//console.log(neighborLess())
//console.log(moreLanguages())
//console.log(withCommonLanguages())
//console.log(withoutCommonCurrency())
console.log(sortingDecreasingDensity())
//console.log(moreTopLevelDomains())
//console.log(veryLongTrip("FRA"))
//complement()
//console.log(veryLongTrip("ARG"))
