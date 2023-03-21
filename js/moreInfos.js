fill_db()

var btCloseInfos = document.getElementById("closeInfos")
var moreInfos = document.getElementById("moreInfos")
var moreInfosPlaceHolder = document.getElementById("moreInfosPlaceHolder")

function load(){
    btPrecedent.disabled = "true"
    dataToDisplay = Object.values(Country.all_countries)
    addButtons = true
    displayData()    
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