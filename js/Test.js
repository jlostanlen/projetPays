fill_db();

function moreNeighbors(){
    var maxNumberNeighbors = 0;
    var maxCountryNeighbor = {}
    for(var country of Object.values(Country.all_countries)){
        if (country.borders != undefined && country.borders.length > maxNumberNeighbors){
            maxNumberNeighbors = country.borders.length
            maxCountryNeighbor = {}
            maxCountryNeighbor[country.alpha3Code] = country
        
        }else if (country.borders != undefined && country.borders.length == maxNumberNeighbors){
            maxCountryNeighbor[country.alpha3Code] = country
        }
    }

    for (var key of Object.keys(maxCountryNeighbor)){
        console.log(Country.all_countries[key].name)
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

    for (var key of Object.keys(maxCountryLanguages)){
        console.log(Country.all_countries[key].name)
        console.log(key)
        console.log(Country.all_countries[key].languages)



        /*
        for (var language of Object.values(Country.all_countries[key].languages)){
            console.log(language)

        }
        */
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
//console.log(neighborLess())
console.log(moreNeighbors())
//console.log(moreLanguages())
//console.log(outsideTheContinent())