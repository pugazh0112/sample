var popupoverlay =document.querySelector(".popup-overlay")
var popupbox =document.querySelector(".popup-box")
var addpopup=document.querySelector(".add-button")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelbtn=document.getElementById("cancel-case")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"

})
var containers=document.querySelector(".container")
var addcase=document.getElementById("add-case")
var casenameinput=document.getElementById("case-name-input")
var sectioninput=document.getElementById("Section-input")
var casesdinput=document.getElementById("case-sd-input")

addcase.addEventListener("click",function(event){
    event.preventDefault() 
   var div=document.createElement("div")
   div.setAttribute("class","case-container")
   div.innerHTML=`h2>${casenameinput.value}</h2>
            <h5>${sectioninput.value}</h5>
            <p>${casesdinput.value}</p>
              <button onclick="deletecase(event)">Delete</button>`
   containers.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletecase(event)
{
   event.target.parentElement.remove()
}