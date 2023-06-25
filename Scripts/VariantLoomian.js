var VLoomianList = document.getElementById("VariantLoomianList");
var OutputResult = document.getElementById("Result");
var GCharm = document.getElementById("GleamingCharmID");
var GBoost = document.getElementById("GleamingBoostID");
var GammaL = document.getElementById("GammaResult");
var AlphaL = document.getElementById("AlphaResult");
var RW = document.getElementById("RW");

var GammaEncrypt = document.getElementById("GammaEncrypt");
var AlphaEncrypt = document.getElementById("AlphaEncrypt");
var RWEncrypt = document.getElementById("RWEncrypt");

var GCharmMultiplier = 1/2;
var GBoostMultiplier = 1/16;

var LoomianMultiplier = 1;

// Checking if the Loomian has a gleaming forms
VLoomianList.addEventListener("change", function GammaLabel() {
    switch (this.value) {
        case "HWShawchi":
        case "HWSlugling":
        case "GeklowB":
        case "GeklowS":
        case "GeklowG":
        case "GeklowE":
        case "GeklowR":
        case "GeklowSP":
        case "RareIcigool2019":
        case "XMASRagoon":
        case "EventScorb":
        case "EventScorbs":
            GammaL.style.display = "none";
            GammaEncrypt.style.display = "none";
            RW.style.display = "none";
            RWEncrypt.style.display = "none";
            AlphaL.style.display = "inline";
            AlphaEncrypt.style.display = "inline";
            break;
        case "ColouredGoppie":
        case "ColouredPyramind":
            AlphaL.style.display = "none";
            AlphaEncrypt.style.display = "none";
            RW.style.display = "none";
            RWEncrypt.style.display = "none";
            GammaL.style.display = "inline";
            GammaEncrypt.style.display = "inline";
            break;
        case "RBNymaurae":
        case "RBPyramind":
        case "RBGoppie":
            GammaL.style.display = "none";
            GammaEncrypt.style.display = "none";
            RW.style.display = "inline";
            RWEncrypt.style.display = "inline";
            AlphaL.style.display = "none";
            AlphaEncrypt.style.display = "none";
            break;
        default:
            GammaL.style.display = "inline";
            GammaEncrypt.style.display = "inline";
            AlphaL.style.display = "inline";
            AlphaEncrypt.style.display = "inline";
            document.getElementById("GammaResult").innerHTML = "Gamma Odds: "
            document.getElementById("AlphaResult").innerHTML = "Alpha Odds: "
            RW.style.display = "inline";
            RWEncrypt.style.display = "inline";
            RW.innerHTML = "Rainbow Wisp Odds: ";
            break;
    }})

function Multiply(){
    var Gamma = 20480;
    var Alpha = 4096;
    var RainbowWisp = 125
    var GCharmMultiplier = 1/2;
    var GBoostMultiplier = 1/16;

    // Checking if Gleaming odds were halved
    switch (VLoomianList.value) {
        case "GeklowB":
        case "GeklowS":
        case "GeklowG":
        case "GeklowE":
        case "GeklowR":
        case "GeklowSP":
            GCharmMultiplier = 1/4;
            GBoostMultiplier = 1/64;
            console.log("Odds Halved")
            break;
        case "RareIcigool2020":
        case "RBShawchi":
        case "XMASRagoon":
        case "HWSlugling":
        case "HWShawchi":
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
        case "Jelly Gumpod":
            LoomianMultiplier = 50;
            break;
        case "EventBunpuff":
        case "ColouredGoppie":
            LoomianMultiplier = 60;
            break;
        case "EventAntsee":
            LoomianMultiplier = 80
            break;
        case "GeklowB":
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
        case "ColouredPyramind":
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
        case "HWShawchi":
            LoomianMultiplier = 500;
            break;
        case "RareIcigool2019":
        case "RareIcigools":
        case "EventBunpuffR":
            LoomianMultiplier = 600;
            break;
        case "RareIcigool2020":
            LoomianMultiplier = 630;
            break;
        case "GeklowE":
        case "Jelly Gumpod":
        case "XMASRagoon":
        case "RBShawchi":
        case "RBFlorant":
            LoomianMultiplier = 1000;
            break;
        case "GeklowR":
            LoomianMultiplier = 2000;
            break;
        case "GeklowSP":
        case "RBGoppie":
            LoomianMultiplier = 10000;
            break;
        case "KyeggoDefault":
            LoomianMultiplier = (6*(100/37));
            break;
        case "KyeggoFrilly":
        case "KyeggoZigZag":
        case "KyeggoStripes":
            LoomianMultiplier = (6*(100/18.7));
            break;
        case "KyeggoStar":
            LoomianMultiplier = (6*(100/6))
            break;
        case "KyeggoFRed":
        case "KyeggoFGreen":
        case "KyeggoFBlue":
            LoomianMultiplier = (6*(100/0.33));
            break;
        case "RBNymaurae":
            LoomianMultiplier = 15000;
            break;
        case "RBPyramind":
            LoomianMultiplier = 20000;
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

        AlphaTotal = (Alpha*LoomianMultiplier).toFixed(2);
        GammaTotal = (Gamma*LoomianMultiplier).toFixed(2);


        //2023 Rainbow added wisp but no gamma loomians, I cried fixing this
        switch (VLoomianList.value) {
            case "RBNymaurae":
            case "RBPyramind":
            case "RBGoppie":
                RWTotal = (LoomianMultiplier).toFixed(2); 
                break;
            case "ColouredGoppie":
            case "ColouredPyramind":
                //isn't actually gamma afaik, but it has a wisp form so its going here cuz Im lazy
                GammaTotal = (LoomianMultiplier*100).toFixed(2);
                RWTotal = (Gamma*LoomianMultiplier*RainbowWisp).toFixed(2);
                break;
            default:
                RWTotal = (Gamma*LoomianMultiplier*RainbowWisp).toFixed(2);
                break;
        }
        
        
        
        document.getElementById("AlphaResult").innerHTML = "Alpha Odds: 1 in " + (AlphaTotal);
        document.getElementById("GammaResult").innerHTML = "Gamma Odds: 1 in " + (GammaTotal);

        RW.innerHTML = "Rainbow Wisp Odds: 1 in " + (RWTotal);

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