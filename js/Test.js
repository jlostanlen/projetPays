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
        console.log(Country.all_countries[key].name+ " avec pour voisins :")
        for (var neighbors of Country.all_countries[key].borders){
            console.log(Country.all_countries[neighbors].name)

        }
    }
    

}

function neighborLess(){
    var noNeighbor = {}
    for(var country of Object.values(Country.all_countries)){
        if (country.borders == undefined ){
            noNeighbor[country.alpha3Code] = country
        }
    }
   
    for (var country of Object.values(noNeighbor)){
        console.log(country)

    }

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

    for (var country of Object.values(maxCountryLanguages)){
        console.log(country)

    }
    

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

    for (var country in out){
        console.log(out[country])
    }

}

function withCommonLanguages(){

    for (var country of Object.values(Country.all_countries)){
        if (country.borders != undefined){

            for (var neighbor of country.borders){
     
                for (var language of Country.all_countries[neighbor].languages){
                    
                    if (country.getLanguages().includes(language)){
                        console.log(country.name +" et son voisin "+ Country.all_countries[neighbor].name +" partagent la langue "+ language);
                    }
                    
                }
                 
             }
        }
       
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

    for (var country of Object.values(noCommonCurrency)){
        console.log(country)
    }
}

function moreTopLevelDomains(){
    var multipleDomains = {}

    for (var country of Object.values(Country.all_countries)){
        if (country.topLevelDomain != undefined && country.topLevelDomain.length > 1 ){
            multipleDomains[country.alpha3Code] = country
        }
    }

    for (var country of Object.values(multipleDomains)){
        console.log(country)
    }
 
}
//console.log(neighborLess())
//console.log(moreNeighbors())
//console.log(moreLanguages())
//console.log(outsideTheContinent())
//console.log(withCommonLanguages())
//console.log(withoutCommonCurrency())
//console.log(moreTopLevelDomains())

