function displayFields() {
    // Potato user input
    var displayPotato = document.getElementById("inputPotato").value;
    document.getElementById("lastPotato").innerHTML = displayPotato;

    var displayBanana = document.getElementById("inputBanana").value;
    document.getElementById("lastBanana").innerHTML = displayBanana;
    // Potatoes or Bananas selector
    var displaySelections = document.getElementById("selectGod").value;
    document.getElementById("lastChoice").innerHTML = displaySelections;

    //querySelector finds the first occurence of the element presented and classList.add, adds the class presented
    document.querySelector('.bg-potato').classList.add('extend-banana');


}

// //Trying to engage the .potatohack class when Potatoes is selected from the dropdown menu and the "Choose" button is clicked
// var displayPotatohack = document.getElementById("selectGod").value;
// document.getElementById("lastPotato").innerHTML = displayPotatohack;
// document.getElementById("chooseBtn").addEventListener("click", potatoTerror);
// function potatoTerror() {

//     // var displayPotatohack = document.getElementById("selectGod").value;
//     // document.getElementById("lastPotato").innerHTML = displayPotatohack;

//     document.querySelector(".bg-potato").classList.add("potatohack");

// }