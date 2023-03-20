fill_db()
var page = 1
const TO_DISPLAY = 25
var countries = document.getElementById("countries")
var btSuivant = document.getElementById("suivant")
var btPrecedent = document.getElementById("precedent")
var btCloseInfos = document.getElementById("closeInfos")

var moreInfos = document.getElementById("moreInfos")
var moreInfosPlaceHolder = document.getElementById("moreInfosPlaceHolder")


function load(){
    
    btPrecedent.disabled = "true"
    displayData()
} 


function displayData(){
    var loop = (page - 1 ) * TO_DISPLAY
    
    while (loop < TO_DISPLAY * page && loop < Object.values(Country.all_countries).length){
        var list_countries = document.createElement("article")
        list_countries.setAttribute("class", "list_countries")
        
    
        var div1 = document.createElement("div")
        var nameAndCode = document.createElement("div")
    
        // NAME
        var countryName = document.createElement("p")
        countryName.textContent = Object.values(Country.all_countries)[loop].name
        nameAndCode.appendChild(countryName)
    
        // CODE
        var countryCode = document.createElement("p")
        countryCode.textContent = Object.values(Country.all_countries)[loop].alpha3Code
        nameAndCode.appendChild(countryCode)
    
        div1.appendChild(nameAndCode)
        
    
        // FLAG
        var countryFlag = document.createElement("div")
        var countryFlagImage = document.createElement("img")
        countryFlagImage.src =Object.values(Country.all_countries)[loop].flag
        countryFlagImage.style.height = "100px"
        countryFlag.appendChild(countryFlagImage)
        countryFlag.setAttribute("flag", Object.values(Country.all_countries)[loop].flag)
        countryFlag.setAttribute("onclick", "biggerFlag(this)")
        div1.appendChild(countryFlag)
    
        list_countries.appendChild(div1)
    
        var datas = document.createElement("ul")
    
    
        // POPULATION
        var countryPop = document.createElement("li")
        countryPop.textContent = Object.values(Country.all_countries)[loop].population
        datas.appendChild(countryPop)
        // AREA
        var CountryArea = document.createElement("li")
        CountryArea.textContent = Object.values(Country.all_countries)[loop].area
        datas.appendChild(CountryArea)
        // DENSITY
        var countryDensity = document.createElement("li")
        countryDensity.textContent = Object.values(Country.all_countries)[loop].getPopDensity()
        datas.appendChild(countryDensity)
        // REGION
        var countryRegion = document.createElement("li")
        countryRegion.textContent = Object.values(Country.all_countries)[loop].region
        datas.appendChild(countryRegion)
      
        datas.setAttribute("id", Object.values(Country.all_countries)[loop].alpha3Code)
        datas.setAttribute("onclick", "displayMoreInfos(this.id)")
        
        list_countries.appendChild(datas)
        
    
        // Add lines to tab
        countries.appendChild(list_countries) 
        loop++;

        
    }
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
    (page*TO_DISPLAY >= Object.values(Country.all_countries).length)? btSuivant.disabled = true :  btSuivant.disabled = false;
    displayData();
})

btPrecedent.addEventListener("click", function(){
    console.log("précédent cliqué")
    countries.innerHTML=""
    page--;
    (page == 1)? btPrecedent.disabled = true :  btPrecedent.disabled = false;
    (page*TO_DISPLAY >= Object.values(Country.all_countries).length)? btSuivant.disabled = true :  btSuivant.disabled = false;
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