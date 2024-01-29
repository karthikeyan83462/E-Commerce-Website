const col = document.getElementById("small-container");
col.style.minWidth = "180px";
col.style.margin = "auto";
col.style.paddingLeft = "50px";
col.style.paddingRight = "50px";

var row = col.getElementsByClassName("row");
var text = document.getElementsByTagName("h4");
var body = document.body;
var header = document.getElementsByClassName("header")

function myFunction1(){
    body.style.background = "black"
    for(i = 0; i < 1000; i++){
        text[i].style.color = "white"
        row[i].style.background = "black"
        header[i].style.background = "grey"
    }   
    col.style.background = "grey";  
}



/*min-width: 180px;
margin: auto;
padding-left: 50px;
padding-right: 50px;*/