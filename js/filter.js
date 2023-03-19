fill_db()
var page = 1
const TO_DISPLAY = 25
var select = document.getElementById("country")
var Form = document.getElementById("Form")
var regionSelection = document.getElementById("RegionSelection")
var languageForm = document.getElementById("LanguageForm")
var languageSelection = document.getElementById("LanguageSelection")
var countryNameInput = document.getElementById("countryNameInput")
var countries = document.getElementById("countries")
var btSuivant = document.getElementById("suivant")
var btPrecedent = document.getElementById("precedent")
var btCloseInfos = document.getElementById("closeInfos")
var moreInfos = document.getElementById("moreInfos")
var moreInfosPlaceHolder = document.getElementById("moreInfosPlaceHolder")
var dataToDisplay = []

var regions = {}
var languages = {}

function load(){
    btPrecedent.disabled = "true"
    dataToDisplay = Object.values(Country.all_countries)
    displayData()
    buildForms()
}


function displayMoreInfos(id){
    console.log("more Infos affiché")
    moreInfos.innerHTML=""
    var table = document.createElement("table")
    

    for (var attribute of Object.keys(Country.all_countries[id])){

        if (attribute != "flag"){
            var line = document.createElement("tr")
            var tableHead = document.createElement("th")
            tableHead.textContent = attribute
            line.appendChild(tableHead)


            var tableData = document.createElement("td")
            tableData.textContent = Country.all_countries[id][attribute]
      

            line.appendChild(tableData)
            table.appendChild(line)
        }
        
    }
    moreInfos.appendChild(table)
    moreInfosPlaceHolder.style.display="block";
    document.getElementsByTagName("main")[0].style.filter = "blur(5px)"
}


btSuivant.addEventListener("click", function(){
    console.log("suivant cliqué")
    countries.innerHTML=""
    btPrecedent.disabled = false
    page++;
    (page*TO_DISPLAY >= dataToDisplay.length)? btSuivant.disabled = true :  btSuivant.disabled = false;
    displayData();
})

btPrecedent.addEventListener("click", function(){
    console.log("précédent cliqué")
    countries.innerHTML=""
    page--;
    (page == 1)? btPrecedent.disabled = true :  btPrecedent.disabled = false;
    (page*TO_DISPLAY >= dataToDisplay.length)? btSuivant.disabled = true :  btSuivant.disabled = false;
    displayData()
})


btCloseInfos.addEventListener("click", ()=>{
    console.log("infos fermé")
    moreInfosPlaceHolder.style.display = "none"
    document.getElementsByTagName("main")[0].style.filter = "blur(0px)"
})

function biggerFlag(source){
    
    moreInfos.innerHTML=""
    var flag = document.createElement("img");
    flag.src = source.getAttribute("flag");
    flag.style.height="500px"
    
    moreInfos.appendChild(flag)
    document.getElementsByTagName("main")[0].style.filter = "blur(5px)"
    moreInfosPlaceHolder.style.display="block"

}

function buildForms(){
    

    for (let country of Object.values(Country.all_countries)){
        
        if (!Object.keys(regions).includes(country.region)){
            regions[country.region] = []
            regions[country.region].push(country)
        }else{
            regions[country.region].push(country)
        }

        for (var language of country.languages){
            if (!Object.keys(languages).includes(language)){
                languages[language] = []
                languages[language].push(country)
            }else{
                languages[language].push(country)
            }
        }
        
    }

    for (var region of Object.keys(regions)){
        var option = document.createElement("option")
        option.setAttribute("value", region)
        option.textContent = region
        regionSelection.appendChild(option)
    }

    for (var language of Object.keys(languages)){
        var option = document.createElement("option")
        option.setAttribute("value", language)
        option.textContent = language
        languageSelection.appendChild(option)
    }

}


Form.addEventListener("submit", (e)=>{
    e.preventDefault()
    var regionToDisplay = []
    var languageToDisplay = []
    var countryToDisplay = []
    var globalArray = []
    var countryNameInputPresent = false;

    (countryNameInput.value == "")?countryNameInputPresent=false : countryNameInputPresent=true;

    if(regionSelection.selectedOptions.length != 0 && regionSelection.selectedOptions[0].value != ""){

        for(var option of regionSelection.selectedOptions){
            for(var element of Object.values(regions[option.value])){
                regionToDisplay.push(element)
            }
        }
    }else{
        for (var region of Object.values(regions)){
            for (var element of region){
                regionToDisplay.push(element)
            }
            
        }
    }

    globalArray.push(regionToDisplay)
    
    
    

    if(languageSelection.selectedOptions.length != 0 && languageSelection.selectedOptions[0].value != ""){
        for(var option of languageSelection.selectedOptions){
            for(var element of Object.values(languages[option.value])){
                languageToDisplay.push(element)

            }
        }
    }else{
        for (var language of Object.values(languages)){
            for (var element of language){
                if (!languageToDisplay.includes(element)){
                    languageToDisplay.push(element)
                }
            }
        }
    }
    
    globalArray.push(languageToDisplay)


    if(countryNameInputPresent){
        for (var country of Object.values(Country.all_countries)){
            if (country.name.includes(countryNameInput.value)){
                countryToDisplay.push(country)
            }
        }
        globalArray.push(countryToDisplay)

    }


    
    for(var i = 0; i < globalArray.length; i++){
        for(var j = 0; j < ( globalArray.length - i -1 ); j++){
          if(globalArray[j].length < globalArray[j+1].length){
            var temp = globalArray[j]
            globalArray[j] = globalArray[j + 1]
            globalArray[j+1] = temp
          }
        }
    }

    
    
    dataToDisplay = []
    for(var element of globalArray[0]){
        var include = true
        for (var loop=1; loop<globalArray.length; loop++){
            if (!globalArray[loop].includes(element)){
                include = false
            }
        }
        (include)?dataToDisplay.push(element):"";
    }


    displayData()
   
    
})

function displayData(){
    var loop = (page - 1 ) * TO_DISPLAY
    countries.innerHTML=""
    while (loop < TO_DISPLAY * page && loop < dataToDisplay.length){
        var list_countries = document.createElement("article")
        list_countries.setAttribute("class", "list_countries")
        
    
        var div1 = document.createElement("div")
        var nameAndCode = document.createElement("div")
    
        // NAME
        var countryName = document.createElement("p")
        countryName.textContent = dataToDisplay[loop].name
        nameAndCode.appendChild(countryName)
    
        // CODE
        var countryCode = document.createElement("p")
        countryCode.textContent = dataToDisplay[loop].alpha3Code
        nameAndCode.appendChild(countryCode)
    
        div1.appendChild(nameAndCode)
        
    
        // FLAG
        var countryFlag = document.createElement("div")
        var countryFlagImage = document.createElement("img")
        countryFlagImage.src =dataToDisplay[loop].flag
        countryFlagImage.style.height = "100px"
        countryFlag.appendChild(countryFlagImage)
        countryFlag.setAttribute("flag", dataToDisplay[loop].flag)
        countryFlag.setAttribute("onclick", "biggerFlag(this)")
        div1.appendChild(countryFlag)
    
        list_countries.appendChild(div1)
    
        var datas = document.createElement("ul")
    
    
        // POPULATION
        var countryPop = document.createElement("li")
        countryPop.textContent = dataToDisplay[loop].population
        datas.appendChild(countryPop)
        // AREA
        var CountryArea = document.createElement("li")
        CountryArea.textContent = dataToDisplay[loop].area
        datas.appendChild(CountryArea)
        // DENSITY
        var countryDensity = document.createElement("li")
        countryDensity.textContent = dataToDisplay[loop].getPopDensity()
        datas.appendChild(countryDensity)
        // REGION
        var countryRegion = document.createElement("li")
        countryRegion.textContent = dataToDisplay[loop].region
        datas.appendChild(countryRegion)
      
        datas.setAttribute("id", dataToDisplay[loop].alpha3Code)
        datas.setAttribute("onclick", "displayMoreInfos(this.id)")
        
        list_countries.appendChild(datas)
        
    
        // Add lines to tab
        countries.appendChild(list_countries) 
        loop++;
        
    }
}