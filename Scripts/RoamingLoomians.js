var RoamingName = document.getElementById("RoamingNameID");
var OutputResult = document.getElementById("Result");
var Charm = document.getElementById("CharmID");
var Boost = document.getElementById("BoostID");
var SetEncounterLabel = document.getElementById("SetEncounterLabel");
var SetEncounter = document.getElementById("SetEncounterID");
var RoamingAmount = document.getElementById("RoamingAmountID");

var SelectedRoaming = document.getElementById("RoamingNameID").value;

var CharmMultiplier = 0.5;
var BoostMultiplier = 0.25;

RoamingName.addEventListener('change', function GetSetEncounter() {
    switch (this.value) {
        case "Mutagon":
        case "Cephalops":
        case "Elephage":
            SetEncounterLabel.style.display = "inline";
            SetEncounter.checked = false;
            break;
        case "Metronette":
        case "Wabalisc":
        case "Nevermare":
        case "Akhalos":
        case "Gargolem":
        case "Celesting":
            SetEncounterLabel.style.display = "inline";
            SetEncounter.checked = false;
            break;
        default:
            SetEncounterLabel.style.display = "none";
            SetEncounter.checked = false;
            break;
    }  
})
    

function Multiply() { 
    let RoamingOdds = 1024;

    if (Charm.checked) {
        RoamingOdds *= CharmMultiplier
    } else {RoamingOdds = RoamingOdds}
    
    if (Boost.checked) {
        RoamingOdds *= BoostMultiplier
    } else {RoamingOdds = RoamingOdds
    }

    RoamingAmount = Number(document.getElementById("RoamingAmountID").value) || 1;
    RoamingOdds *= RoamingAmount;

    switch (SetEncounter.checked) {
        case true:
            RoamingOdds = 1
            break;
        case false:
            RoamingOdds = RoamingOdds
        default:
            break;
    }
    
    document.getElementById("Result").innerHTML = "Result: 1 in " + RoamingOdds;
}