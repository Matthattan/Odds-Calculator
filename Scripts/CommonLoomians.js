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
    var RainbowWisp = 125;
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
        case "Territi":
        case "Taoshi":
        case "Whimpor":
        case "Phancub":
        case "Kleptyke":
        case "Poochrol":
            LoomianMultiplier = 10;
            break;
        case "Sherbot":
            LoomianMultiplier = 17;
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
        case "Llamba":
            LoomianMultiplier = 60;
            break;
        case "Icigool":
            LoomianMultiplier = 90;
            break;
        case "Pyramind":
            LoomianMultiplier = 300;
            break;
        case "Pipsee":
        case "Hydrini":
        case "Wispur":
        case "Smoal":
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
            var Gamma = 10240;
            var Alpha = 2048;
            break;
        default:
            LoomianMultiplier = 1;
            var Gamma = 20480;
            var Alpha = 4096;
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

    AlphaTotal = (Alpha*LoomianMultiplier).toFixed(2);
    GammaTotal = (Gamma*LoomianMultiplier).toFixed(2);
    RWTotal = (Gamma*LoomianMultiplier*RainbowWisp).toFixed(2);

    document.getElementById("AlphaResult").innerHTML = "Alpha Odds: 1 in " + (AlphaTotal);
    document.getElementById("GammaResult").innerHTML = "Gamma Odds: 1 in " + (GammaTotal);
    document.getElementById("RW").innerHTML = "Rainbow Wisp Odds: 1 in " + (RWTotal);

    return(AlphaTotal, GammaTotal, RWTotal);
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
    const RWEncrypt = window.btoa(RWTotal)
    window.alert("Copy to Compound Calculator: " + RWEncrypt);
    } else {
    // Do something else if a different button was clicked
    console.log("Unknown button clicked");
    }
}
      