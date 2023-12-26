class Loomian {
  constructor(name, odds, alphaG, gammaG, rW, increasedMultipliers, increasedOdds){
    this.name = name; //string
    this.odds = odds; //float
    this.alphaG = alphaG; //boolean
    this.gammaG = gammaG; //boolean
    this.increasedMultipliers = increasedMultipliers; //boolean
    this.increasedOdds = increasedOdds; //boolean
  }

  isAlpha() {
    // Check if Alpha Form is available
    if (this.alphaG) {
      // set HTML box to disappear or smth
      alphaResult.style.display = "block"; 
      alphaResult.innerHTML = "Alpha: ";
    } else {
      alphaResult.style.display = "none"; 
    }
  }

  isGamma() {
		// Check if the Gamma Form is available
    if (this.gammaG) {
      // set HTML box to disappear or smth
      gammaResult.style.display = "block";
      gammaResult.innerHTML = "Gamma: ";
    } else {
      gammaResult.style.display = "none";
    }
  }
}

//name, odds, alphaG, gammaG, rW, increasedMultipliers, increasedOdds, alpha, gamma, gcharm, gboost
const christmasGlassScorbs = new Loomian("Christmas Scorbs (Normal)", 12, true, false, false, false);
const jellyGumpod = new Loomian("Jelly Gumpod (2022 Sweet Retreat)", 50, true, true, false, false);
const lunarBunpuff = new Loomian("Lunar New Year Bunpuff (2023 Chinese New Year)", 60, true, true, false, false);
const colouredGoppies = new Loomian("Coloured Goppies (2023 Loomunity)", 60, false, false, false, false);
const valentinesAntsee = new Loomian("Valentines Antsee (2023 Valentines)", 80, true, true, false, false);
const bronzeGeklow = new Loomian("Bronze Geklow (2020 Anniversary)", 100, true, false, true, false);
const bronzeCopling = new Loomian("Bronze Copling (2023 Anniversary)", 100, true, false, false, true, false, 4096, 20480, 0.25, 0.015625);
const sweetsPhancub = new Loomian("Sweets Phancub (2022 Sweet Retreat)", 100, true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const snowmanTotemochi = new Loomian("Snowman Totemochi (2022 Christmas)", 150, true, false, false, false, 4096, 20480, 0.5, 0.0625);
const cakeSlugling = new Loomian("Cake Slugling (2022 Sweet Retreat)", 200, true ,true ,true, false, false, 4096, 20480, 0.25, 0.015625);
const silverGeklow = new Loomian("Silver Geklow (2020 Anniversary)", 250, true, false, false, true, false, 4096, 20480, 0.25, 0.015625);
const silverCopling = new Loomian("Silver Copling (2023 Anniversary)", true, false, false, true, false, 4096, 20480, 0.25, 0.016625);
const halloweenSlugling = new Loomian("Halloween Slugling (2019 Halloween)", 300, true, false, false, false, true, 4096, 20480, 0.5, 0.0625);
const christmasGlassScorb = new Loomian("Glass Scorb (2022 Christmas)", 372, true, false, false, false, false, 4096, 20480, 0.5, 0.0625);
const halloweenTaoshi = new Loomian("Halloween Taoshi (2022 Halloween)", 450, true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const halloweenTerriti = new Loomian("Halloween Territi (2022 Halloween)", 450, true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const goldGeklow = new Loomian("Gold Geklow (2020 Anniversary)", 500, true, false, false, true, false, 4096, 20480, 0.25, 0.015625);
const goldCopling = new Loomian("Gold Copling (2023 Anniversary)", 500, true, false, false, true, false, 4096, 20480, 0.25, 0.015625);
const christmasPropae = new Loomian("Santa Propae (2021 Christmas)", 500, true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const halloweenShawchi = new Loomian("Halloween Shawchi (2019 Halloween)", 500, true, false, false, false, true, 4096, 20480, 0.5, 0.0625);
const Icigool2020 = new Loomian("Coloured Icigool (2020 Christmas)", 600, true, true, true, true, false, true, 2048, 10240, 0.5, 0.0625);
const Icigool2021 = new Loomian("Coloured Icigool (2021 Christmas and Beyond)", 600, true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const christmasRagoon = new Loomian("Santa Ragoon (2019 Christmas)", 1000, true, false, false, false, false, 4096, 20480, 0.5, 0.0625);
const rainbowShawchi = new Loomian("Rainbow Shawchi (2022 Loomunity)", 1000, true, true, true, false, true, 2048, 10240, 0.5, 0.0625);
const rainbowFlorant = new Loomian("Rainbow Florant (2023 Loomunity)", 1000, true, true, true, false, false, 4096, 20480, 0.5, 0.00625);
const emeraldGeklow = new Loomian("Emerald Geklow (2020 Anniversary)", 2000, true, false, false, true, false, 4096, 20480, 0.5, 0.015625);
const emeraldCopling = new Loomian("Emerald Copling (2023 Anniversary)", 2000, true, false, false, true, false, 4096, 20480, 0.5, 0.015625);
const rubyGeklow = new Loomian("Ruby Geklow (2020 Anniversary)", 5000, true, false, false, true, false, 4096, 20480, 0.5, 0.015625);
const rubyCopling = new Loomian("Ruby Copling (2023 Anniversary)", 5000, true, false, false, true, false, 4096, 20480, 0.5, 0.015625);
const normalKyeggo = new Loomian("Normal Kyeggo (2023 Easter)", (6*(100/37)), true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const frillyKyeggo = new Loomian("Frilly Kyeggo (2023 Easter)", (6*(100/18.7)), true, true, true, false, false, 4096, 20480, 0.5, 0.625);
const zzKyeggo = new Loomian("Zig-Zag Kyeggo (2023 Easter)", (6*(100/8.7)), true, true, true, false, false, 4096, 20480, 0.5, 0.625);
const starKyeggo = new Loomian("Star Kyeggo (2023 Easter)", (6*(100/6)), true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const fabergeKyeggo = new Loomian("Faberge Kyeggo (2023 Easter)", (6*(100/0.33)), true, true, true, false, false, 4096, 20480, 0.5, 0.150625);
const sapphireGeklow = new Loomian("Sapphire Geklow (2020 Anniversary)", 10000, true, false, false, true, false, 4096, 20480, 0.5, 0.015625);
const sapphireCopling = new Loomian("Sapphire Copling (2023 Anniversary)", 10000, true, false, false, true, false, 4096, 20480, 0.5, 0.015625);
const mirrami = new Loomian("Mirrami (2023 Haunted Village)", 50, true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const halloweenMistlebud = new Loomian("Halloween Mistlebud (2023 Haunted Village)", (100/1.6), true, true, true, false, false, 4096, 20480, 0.5, 0.0625);
const halloweenCryocub = new Loomian("Halloween Cryocub (2023 Haunted Village", (100/0.3), true, true, true, false, false, 4096, 20480, 0.5, 0.0625);

// collate all objects into an array
const optionData = [
  sweetsPhancub,
  cakeSlugling,
  lunarBunpuff,
  jellyGumpod,
  valentinesAntsee,
  bronzeGeklow,
  silverGeklow,
  goldGeklow,
  emeraldGeklow,
  rubyGeklow,
  sapphireGeklow,
  bronzeCopling,
  silverGeklow,
  goldCopling,
  emeraldCopling,
  rubyCopling,
  sapphireCopling,
  halloweenSlugling,
  halloweenShawchi,
  christmasGlassScorb,
  christmasGlassScorbs,
  halloweenTaoshi,
  halloweenTerriti,
  Icigool2020,
  Icigool2021,
  christmasPropae,
  snowmanTotemochi,
  christmasRagoon,
  rainbowShawchi,
  rainbowFlorant,
  normalKyeggo,
  frillyKyeggo,
  zzKyeggo,
  starKyeggo,
  fabergeKyeggo,
  mirrami,
  halloweenMistlebud,
  halloweenCryocub
]

// defining Variables
let selectElement = document.getElementById("mySelect");
let alphaResult = document.getElementById("AlphaResult");
let gammaResult = document.getElementById("GammaResult");
let rwResult = document.getElementById("RWResult");
let gCharm = document.getElementById("GleamingCharm");
let gBoost = document.getElementById("GleamingBoost");
let oddsDisplayButton = document.getElementById("displayOdds");
let calculateButton = document.getElementById("calculate");

// defining all JS data

let gleamingOdds = 4096
  // alpha is 4/5 of this so 1/5120
  // gamma is 1/5 of this so 1/20480
  // rainbow wisp is 1/125 of the gamma odds so 1/2560000

// charm halves gleaming odds
let gCharmMultiplier = 0.5

// boost gleaming odds by 16 fold
let gBoostMultiplier = 0.0625

//load all loomians into select element
for (let Loomian of optionData) {
  let option = document.createElement('option');
  option.value = Loomian.name; // Set the value to the object's name
  option.text = `${Loomian.name}`; // Set the label to a combination of name and option1
  let selectElement = document.getElementById("mySelect");
  selectElement.appendChild(option);
}

// display the base odds in the form 1/n
function displayOdds() {
  let oddsDescription = document.getElementById("odds");
  let selectedName = document.getElementById("mySelect").value;
  let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);

  if (selectedLoomian) {
    oddsDescription.innerHTML = "1 in " + selectedLoomian.odds.toFixed(2);
  }
}

// update statistics
selectElement.addEventListener("change", function updateLabels() {
  let selectedName = document.getElementById("mySelect").value;
  let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);

  if (selectedLoomian) {
    selectedLoomian.isAlpha();
    selectedLoomian.isGamma();
    calculateButton.disabled = false;
    oddsDisplayButton.disabled = false;
  }
});

// the actual calculations
function calculate() {
  let selectedName = document.getElementById("mySelect").value;
  let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);
	let subtotal = selectedLoomian.odds;

  // some event Loomians have the things like the charm/boost or gleaming odds modified
  // change gleaming odds
  switch (selectedLoomian.name) {
    case "Coloured Goppies (2023 Loomunity)":
      gleamingOdds = 0;
      break;
    case "Coloured Icigool (2020 Christmas)":
    case "Rainbow Shawchi (2022 Loomunity)":
      gleamingOdds = 2048;
      break;
    default:
      gleamingOdds = 4096;
      break;
  }

  // change gCharmMultiplier
  switch (selectedLoomian.name) {
    case "Coloured Goppies (2023 Loomunity)":
      gCharmMultiplier = 0;
      break;
    case "Bronze Geklow (2020 Anniversary)":
    case "Silver Geklow (2020 Anniversary)":
    case "Gold Geklow (2020 Anniversary)":
    case "Emerald Geklow (2020 Anniversary)":
    case "Ruby Geklow (2020 Anniversary)":
    case "Sapphire Geklow (2020 Anniversary)":
    case "Bronze Copling (2023 Anniversary)":
    case "Silver Copling (2023 Anniversary)":
    case "Gold Copling (2023 Anniversary)":
    case "Emerald Copling (2023 Anniversary)":
    case "Ruby Copling (2023 Anniversary)":
    case "Sapphire Copling (2023 Anniversary)":
      gCharmMultiplier = 0.25;
      break;
    default:
      gCharmMultiplier = 0.5;
      break;
  }

  // change gBoostMultiplier
  switch (selectedLoomian.name) {
    case "Bronze Geklow (2020 Anniversary)":
    case "Silver Geklow (2020 Anniversary)":
    case "Gold Geklow (2020 Anniversary)":
    case "Emerald Geklow (2020 Anniversary)":
    case "Ruby Geklow (2020 Anniversary)":
    case "Sapphire Geklow (2020 Anniversary)":
    case "Bronze Copling (2023 Anniversary)":
    case "Silver Copling (2023 Anniversary)":
    case "Gold Copling (2023 Anniversary)":
    case "Emerald Copling (2023 Anniversary)":
    case "Ruby Copling (2023 Anniversary)":
    case "Sapphire Copling (2023 Anniversary)":
      gBoostMultiplier = 0.15625;
      break;
    default:
      gBoostMultiplier = 0.0625;
      break;
  }

  // check if the charm box is enabled, uses the object's own multiplier if so
  if (gCharm.checked){
    subtotal *= gCharmMultiplier; 
  } else if (!gCharm.checked) {
    console.log("Gleaming Charm not checked");
  } else {
    console.log("Gleaming Charm Error");
  }

  // check if the boost box is enabled, uses the object's own multiplier if so
  if (gBoost.checked){
    subtotal *= gBoostMultiplier;
  } else if (!gBoost.checked){
    console.log("Gleaming Boost not checked");
  } else {
    console.loi("Gleaming Boost Error");
  } 

  let alphaTotal = subtotal * (gleamingOdds * (5/4));
  let gammaTotal = subtotal * (gleamingOdds * (5));
  let rwTotal = gammaTotal * (125);

  // attach results to HTML element
  alphaResult.innerHTML = "Alpha: " + "<br> 1 in " + alphaTotal.toFixed(2);
  gammaResult.innerHTML = "Gamma: " + "<br> 1 in " + gammaTotal.toFixed(2);
  rwResult.innerHTML = "Rainbow Wisp: " + "<br> 1 in " + rwTotal.toFixed(2);
}