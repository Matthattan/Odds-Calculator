var LoomianList = document.getElementById("LoomianList");
var OutputResult = document.getElementById("Result");
var AlphaResult = document.getElementById("AlphaResult");
var GammaResult = document.getElementById("GammaResult");
var RoamingName = document.getElementById("RoamingNameID");
var SetEncounterLabel = document.getElementById("SetEncounterLabel");
var SetEncounter = document.getElementById("SetEncounterID");

var SelectedRoaming = document.getElementById("RoamingNameID").value;

var GleamingCharm = document.getElementById("GCharmID");
var GleamingBoost = document.getElementById("GBoostID");
var RoamingCharm = document.getElementById("RCharmID");
var RoamingBoost = document.getElementById("RBoostID");

var GCharmMultiplier = 1/2;
var GBoostMultiplier = 1/16;
var RCharmMultiplier = 1/2;
var RBoostMultiplier = 1/4;
var LoomianMultiplier = 1;

RoamingName.addEventListener('change', function GetSetEncounter() {
    switch (this.value) {
        case "Mutagon":
        case "Cephalops":
        case "Elephage":
            SetEncounterLabel.style.display = "inline";
            SetEncounter.checked = false;
            GammaResult.style.display = "inline";
            GammaResult.innerHTML = "Gamma Roaming Odds:";
            break;
        case "Metronette":
        case "Wabalisc":
        case "Nevermare":
        case "Akhalos":
        case "Gargolem":
        case "Celesting":
            SetEncounterLabel.style.display = "inline";
            SetEncounter.checked = false;
            GammaResult.style.display = "inline";
            GammaResult.innerHTML = "Gamma Roaming Odds:";
            break;
        default:
            SetEncounterLabel.style.display = "none";
            SetEncounter.checked = false;
            break;
    }  
})

SetEncounter.addEventListener('change', function NoGamma(){
    if (this.checked) {
        GammaResult.style.display = "none";
        RW.style.display = "none";
    } else {
        GammaResult.style.display = "inline";
        GammaResult.innerHTML = "Gamma Roaming Odds:";
        RW.style.display = "inline";
        RW.innerHTML = "Rainbow Wisp Odds: "
    }
})

function Multiply(){
    var Gamma = 20480;
    var Alpha = 4096;
    var RoamingOdds = 1024;
    var GR = 1;
    var GGR = 1;
    var RainbowWisp = 125

    if (RoamingCharm.checked) {
        RoamingOdds *= RCharmMultiplier
    } else {RoamingOdds = RoamingOdds}
    
    if (RoamingBoost.checked) {
        RoamingOdds *= RBoostMultiplier
    } else {RoamingOdds = RoamingOdds}

    RoamingAmount = Number(document.getElementById("RoamingAmountID").value) || 1;
    RoamingOdds *= RoamingAmount;

    switch (SetEncounter.checked) {
        case true:
            RoamingOdds = 1;
            break;
        case false:
            RoamingOdds = RoamingOdds;
            break;
        default:
            break;
    }

    if (GleamingCharm.checked) {
        Alpha *= GCharmMultiplier
        Gamma *= GCharmMultiplier
    } else {Alpha = Alpha
        Gamma = Gamma}
    
    if (GleamingBoost.checked) {
        Gamma *= GBoostMultiplier
        Alpha *= GBoostMultiplier
    } else {Gamma = Gamma
        Alpha = Alpha}

    var AlphaTotal = (RoamingOdds*Alpha).toFixed(2);
    var GammaTotal = (RoamingOdds*Gamma).toFixed(2);
    var RWTotal = (RoamingOdds*Gamma*RainbowWisp).toFixed(2);
    
    document.getElementById("AlphaResult").innerHTML = "Alpha Odds: 1 in " + (AlphaTotal);
    document.getElementById("GammaResult").innerHTML = "Gamma Odds: 1 in " + (GammaTotal);
    document.getElementById("RW").innerHTML = "Rainbow Wisp Odds: 1 in " + (RWTotal);

    return[AlphaTotal, GammaTotal, RWTotal];
}

function encrypt(event, AlphaTotal, GammaTotal, RWTotal) {
    // Get a reference to the button that was clicked
    const clickedButton = event.target;
  
    // Check the ID of the clicked button using an if statement
    if (clickedButton.id === "AlphaEncrypt") {
      // Do something if the AlphaEncrypt button was clicked
      const AlphaEncrypted = window.btoa(AlphaTotal);
      window.alert("Copy to Compound Calculator: " + AlphaEncrypted);
    } else if (clickedButton.id === "GammaEncrypt") {
      // Do something if the GammaEncrypt button was clicked
      const GammaEncrypt = window.btoa(GammaTotal);
      window.alert("Copy to Compound Calculator: " + GammaEncrypt);
    } else if (clickedButton.id === "RWEncrypt") {
      // Do something if the RWEncrypt button was clicked
      const RWEncrypt = window.btoa(RWTotal);
      window.alert("Copy to Compound Calculator: " + RWEncrypt);
    } else {
      // Do something else if a different button was clicked
      console.log("Unknown button clicked");
    }
  }
  
  // Call multiply() to get the values and pass them as arguments to encrypt()
  document.getElementById("AlphaEncrypt").addEventListener("click", function(event) {
    const [AlphaTotal, GammaTotal, RWTotal] = Multiply();
    encrypt(event, AlphaTotal, GammaTotal, RWTotal);
  });
  
  document.getElementById("GammaEncrypt").addEventListener("click", function(event) {
    const [AlphaTotal, GammaTotal, RWTotal] = Multiply();
    encrypt(event, AlphaTotal, GammaTotal, RWTotal);
  });
  
  document.getElementById("RWEncrypt").addEventListener("click", function(event) {
    const [AlphaTotal, GammaTotal, RWTotal] = Multiply();
    encrypt(event, AlphaTotal, GammaTotal, RWTotal);
  });
  