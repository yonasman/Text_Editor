document.getElementById("heading").innerHTML = localStorage["title"] || "Just Write"  //default text
document.getElementById("content").innerHTML = localStorage["text"] || "This text is automatically saved"
// function for storing the text
setInterval(function () {
    localStorage["title"] = document.getElementById("heading").innerHTML
    localStorage["text"] = document.getElementById("content").innerHTML
},1000)
