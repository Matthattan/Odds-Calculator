var VLoomianList = document.getElementById("VariantLoomianList");
var OutputResult = document.getElementById("Result");
var GCharm = document.getElementById("GleamingCharmID");
var GBoost = document.getElementById("GleamingBoostID");
var GammaL = document.getElementById("GammaResult");

var GCharmMultiplier = 1/2;
var GBoostMultiplier = 1/16;

var LoomianMultiplier = 1;

// Checking if the Loomian has a gamma form
VLoomianList.addEventListener("change", function GammaLabel() {
    switch (this.value) {
        case "HWShawchi":
        case "HWSlugling":
        case "GeklowB":
        case "GeklowS":
        case "GeklowG":
        case "GeklowE":
        case "GeklowR":
        case "GeklowS":
        case "RareIcigool2019":
        case "XMASRagoon":
        case "EventScorb":
        case "EventScorbs":
            GammaL.style.display = "none";
            break;
        default:
            GammaL.style.display = "inline";
            document.getElementById("GammaResult").innerHTML = "Gamma Odds: "
            break;
    }})


function Multiply(){
    var Gamma = 20480;
    var Alpha = 4096;
    // Checking if Gleaming odds were halved
    switch (VLoomianList.value) {
        case "GeklowB":
        case "GeklowS":
        case "GeklowG":
        case "GeklowE":
        case "GeklowR":
        case "GeklowS":
            GCharmMultiplier *= 1/2;
            break;
        case "RareIcigool2020":
        case "RBShawchi":
        case "RBVari":
            Gamma *= 1/2;
            Alpha *= 1/2;
            break;
        default:
            Gamma = 20480;
            Alpha = 4096;
            GCharmMultiplier = 1/2;
            GBoostMultiplier = 1/16;
            break;
    }
    // Getting the odds of the Loomian
    switch (VLoomianList.value) {
        case "EventScorbs":
            LoomianMultiplier = 12;
            break;
        case "EventBunpuff":
            LoomianMultiplier = 60;
            break;
        case "EventAntsee":
            LoomianMultiplier = 80
            break;
        case "GeklowB":
        case "Jelly Gumpod":
        case "EventPhancub":
            LoomianMultiplier = 100;
            break;
        case "XMASTotemochi":
            LoomianMultiplier = 150;
            break;
        case "GeklowS":
        case "SRSlugling":
            LoomianMultiplier = 200;
            break;
        case "HWSlugling":
            LoomianMultiplier = 300;
            break;
        case "EventScorb":
            LoomianMultiplier = 372;
            break;
        case "HWTaoshi":
        case "HWTerriti":
            LoomianMultiplier = 450;
            break;
        case "GeklowG":
        case "XMASPropae":
        case "HWShawci":
            LoomianMultiplier = 500;
            break;
        case "RareIcigool2019":
        case "RareIcigool2020":
        case "RareIcigools":
        case "EventBunpuffR":
            LoomianMultiplier = 600;
            break;
        case "GeklowE":
        case "Jelly Gumpod":
        case "XMASRagoon":
        case "RBShawchi":
            LoomianMultiplier = 1000;
            break;
        case "GeklowR":
            LoomianMultiplier = 2000;
            break;
        case "GeklowS":
            LoomianMultiplier = 10000;
            break;
        case "RBVari":
            LoomianMultiplier = 15000;
            break;
        default:
            LoomianMultiplier = 1;
            break;
    }
    // Testing Charm and Boost
        if (GCharm.checked) {
            Alpha *= GCharmMultiplier
            Gamma *= GCharmMultiplier
        } else {Alpha = Alpha
            Gamma = Gamma}
        
        if (GBoost.checked) {
            Gamma *= GBoostMultiplier
            Alpha *= GBoostMultiplier
        } else {Gamma = Gamma
            Alpha = Alpha}
        
        document.getElementById("AlphaResult").innerHTML = "Alpha Odds: 1 in " + Alpha*LoomianMultiplier;
        document.getElementById("GammaResult").innerHTML = "Gamma Odds: 1 in " + Gamma*LoomianMultiplier;
    }