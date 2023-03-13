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
    

}


function outsideTheContinent(){
    var out = []

    for(var country of Object.values(Country.all_countries)){
        var contryMainland = country.region;
        
        for (var neighborId in country.borders){
            var neighbor = country.borders[neighborId]
            if(Country.all_countries[neighbor].region !== contryMainland){
                out.push(country)

            }
        }
    }

    var string =""
    for (var country in out){
        string = string.concat(out[country].name, ", ")
    }

    console.log("These countries have a bordering country outside there continent: " + string)

}

function withCommonLanguages(){

    for (var country of Object.values(Country.all_countries)){
        var string =""
        if (country.borders != undefined){

            for (var neighbor of country.borders){
     
                for (var language of Country.all_countries[neighbor].languages){
                    
                    if (country.getLanguages().includes(language)){
                        string = string.concat(Country.all_countries[neighbor].name+ " ("+ language + "), ")
                    }
                    
                }
                 
             }
        }
       console.log(country.name+" : " + string)
    }
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
}

function moreTopLevelDomains(){
    var multipleDomains = {}

    for (var country of Object.values(Country.all_countries)){
        if (country.topLevelDomain != undefined && country.topLevelDomain.length > 1 ){
            multipleDomains[country.alpha3Code] = country
        }
    }

    var string = ""
    for (var country of Object.values(multipleDomains)){
        string = string.concat(country.name, ", ")
    }

    console.log(string)

 
}

function sortingDecreasingDensity(){
    var sortedCountries = []

    
    for (var country of Object.values(Country.all_countries)){

        if(sortedCountries.length == 0){
            sortedCountries.push(Object.values(Country.all_countries)[0])
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

    var string = ""
    for (var country in sortedCountries){
        string = string.concat(sortedCountries[country].name, " ("+ sortedCountries[country].getPopDensity()+"), ")
    }

    console.log(string)
    
}
//console.log(outsideTheContinent())
//console.log(moreNeighbors())
//console.log(neighborLess())
//console.log(moreLanguages())
//console.log(withCommonLanguages())
//console.log(withoutCommonCurrency())
//console.log(sortingDecreasingDensity())
//console.log(moreTopLevelDomains())
