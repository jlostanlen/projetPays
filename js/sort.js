
var sortForm = document.getElementById("sort")
var sortSelection = document.getElementById("sortSelection")

function load(){
    fill_db()
    btPrecedent.disabled = "true"
    dataToDisplay = Object.values(Country.all_countries)
    addButtons = true
    displayData()
    buildForms()
    buildSortForm()
}

function buildSortForm(){

    var sortValues = ["demonym", "population", "density", "area", "region"];
    var sortOptions = ["Habitants", "Population", "Densité de population", "Superficie", "Continent"]

    for (var index in sortValues){
        var option = document.createElement("option")
        option.setAttribute("value", sortValues[index])
        option.textContent = sortOptions[index]
        sortSelection.appendChild(option)
    }
}

sortForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1

    var sortOn = null
    if(sortSelection.value != ""){
        sortOn =  sortSelection.value;
    }

    
    if(sortOn == "density"){
        var unknownDensity = []
        var knownDensityCountries = []

        for (country of dataToDisplay){
            (country.getPopDensity() == "Unknown")?unknownDensity.push(country):knownDensityCountries.push(country);
        }

        dataToDisplay = knownDensityCountries

    }
    
    
    if (sortOn != null){ 
        console.log("triage...")
        for(var i = 0; i < dataToDisplay.length; i++){

            for(var j = 0; j < ( dataToDisplay.length - i -1 ); j++){
                if((sortOn == "density")? dataToDisplay[j].getPopDensity() > dataToDisplay[j+1].getPopDensity() : dataToDisplay[j][sortOn] > dataToDisplay[j+1][sortOn] ){
                    var temp = dataToDisplay[j]
                    dataToDisplay[j] = dataToDisplay[j + 1]
                    dataToDisplay[j+1] = temp
                }else if ((sortOn == "density")? dataToDisplay[j].getPopDensity() == dataToDisplay[j+1].getPopDensity() : dataToDisplay[j][sortOn] == dataToDisplay[j+1][sortOn] ){
                    if (dataToDisplay[j].name > dataToDisplay[j+1].name){
                        var temp = dataToDisplay[j]
                        dataToDisplay[j] = dataToDisplay[j + 1]
                        dataToDisplay[j+1] = temp
                    }
                }
            }
            
        }
    }
    dataToDisplay = dataToDisplay.concat(unknownDensity)

    console.log("trié !")

    var definedCountries = []
    for(country of dataToDisplay){
        if (country != undefined){
            definedCountries.push(country)
        }

    }
    dataToDisplay = definedCountries;

    
    
    displayData()
    
})