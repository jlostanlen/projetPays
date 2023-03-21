var sortForm = document.getElementById("sort")
var sortSelection = document.getElementById("sortSelection")

function load(){
    btPrecedent.disabled = "true"
    dataToDisplay = Object.values(Country.all_countries)
    addButtons = true
    displayData()
    buildForms()
    buildSortForm()
}

function buildSortForm(){

    var sortValues = ["demonym", "population", "density", "area", "region"];
    var sortOptions = ["Habitants", "population", "desité de population", "superficie", "continent"]

    for (var index in sortValues){
        var option = document.createElement("option")
        option.setAttribute("value", sortValues[index])
        option.textContent = sortOptions[index]
        sortSelection.appendChild(option)
    }
}

sortForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    var sortOn 
    if(sortSelection.value != ""){
        sortOn =  sortSelection.value;
    }

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
    
    console.log("trié !")

    displayData()
    
})