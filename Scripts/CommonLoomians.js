var LoomianList = document.getElementById("LoomianList");
var OutputResult = document.getElementById("Result");
var GleamingCharm = document.getElementById("GleamingCharmID");
var GleamingBoost = document.getElementById("GleamingBoostID");

var GCharmMultiplier = 1/2;
var GBoostMultiplier = 1/16;

var LoomianMultiplier = 1;

function Multiply(){
    var Gamma = 20480;
    var Alpha = 4096;
    switch (LoomianList.value) {
        case "Impkin":
            LoomianMultiplier = 2;
            break;
        case "Mochibi":
            LoomianMultiplier = 3;
            break;
        case "Shawchi":
        case "Antsee":
        case "Cupoink":
        case "Gumpod":
        case "Territ":
        case "Taoshi":
        case "Whimpor":
        case "Phancub":
        case "Kleptyke":
        case "Poochrol":
            LoomianMultiplier = 10;
            break;
        case "Copling":
            LoomianMultiplier = 20/17;
            break;
        case "Kanki":
            LoomianMultiplier = 12.5;
            break;
        case "Mistlebud":
            LoomianMultiplier = 15;
            break;
        case "Sharpod":
            LoomianMultiplier = 20;
            break;
        case "Wiledile":
            LoomianMultiplier = 23;
            break;
        case "Gobbidemic":
            LoomianMultiplier = 100/3;
            break;
        case "SnagullS":
            LoomianMultiplier = 35;
            break;
        case "Cryocub":
        case "Volpup":
        case "Spirivii":
            LoomianMultiplier = 40;
            break;
        case "Snowl":
            LoomianMultiplier = 45;
            break;
        case "Igneol":
        case "Bunpuff":
        case "Operaptor":
            LoomianMultiplier = 50;
            break;
        case "Icigool":
            LoomianMultiplier = 90;
            break;
        case "Pyramind":
            LoomianMultiplier = 300;
            break;
        case "Pipsee":
        case "Hydrini":
            LoomianMultiplier = 64;
            break;
        case "Swirelle":
            LoomianMultiplier = (10/3)*80;
            break;
        case "SwirelleS":
            LoomianMultiplier = 10*80;
            break;
        case "Dractus":
        case "Vari":
            LoomianMultiplier = 100;  
            break;   
        case "Cosmiore":
            LoomianMultiplier = 128;
            break;
        default:
            LoomianMultiplier = 1;
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
    
    document.getElementById("AlphaResult").innerHTML = "Alpha Odds: 1 in " + (Alpha*LoomianMultiplier).toFixed(2);
    document.getElementById("GammaResult").innerHTML = "Gamma Odds: 1 in " + (Gamma*LoomianMultiplier).toFixed(2);
    }