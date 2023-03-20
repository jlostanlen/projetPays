fill_db()

var btCloseInfos = document.getElementById("closeInfos")
var moreInfos = document.getElementById("moreInfos")
var moreInfosPlaceHolder = document.getElementById("moreInfosPlaceHolder")


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
    countriesDOM.innerHTML=""
    btPrecedent.disabled = false
    page++;
    (page*TO_DISPLAY >= Object.values(Country.all_countries).length)? btSuivant.disabled = true :  btSuivant.disabled = false;
    displayData();
})

btPrecedent.addEventListener("click",()=>{
    console.log("précédent cliqué")
    countriesDOM.innerHTML=""
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