class Loomian {
  constructor(name, odds, alphaG, gammaG, halvedGOdds = false, halvedGCharm = false, halvedGBoost = false){
    this.name = name; //string
    this.odds = odds; //float
    this.alphaG = alphaG; //boolean
    this.gammaG = gammaG; //boolean
    this.halvedGOdds = halvedGOdds;
    this.halvedGCharm = halvedGCharm;
    this.halvedGBoost = halvedGBoost;
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
      rwResult.style.display = "block";
      rwResult.innerHTML = "Rainbow Wisp: ";
    } else {
      gammaResult.style.display = "none";
      rwResult.style.display = "none";
    }
  }
}

const lifeguardSharpod = new Loomian("Lifeguard Sharpod (2024 Anniversary)", 500, true, true);
const surferDractus = new Loomian("Surfer Dractus (2024 Anniversary)", 250, true, true);
const surfboardMirrami = new Loomian("Surfboard Mirrami (2024 Anniversary)", 100, true, true);
const rainbowChoochew = new Loomian("Rainbow Choochew (2024 Loomunity)", 5000, false, false);
const rainbowCosmiore = new Loomian("Rainbow Cosmiore (2024 Loomunity)", 10000, false, false);
const tennisBarblast = new Loomian("Tennisball Barblast (2024 Loomunity)", 1, true, true);
const fishingShawchi = new Loomian("Fisherman Shawchi (2024 Loomunity)", 100, true, true);
const rainbowTeridescent = new Loomian("Rainbow Teridescent (2024 Loomunity)", 1000, true, true, true);
const wispColouredChoochew = new Loomian("Coloured Choochew with Wisp (2024 Loomunity)", 1000, false, false);
const colouredChoochew = new Loomian("Coloured Choochew (2024 Loomunity)", 100, false, false);
const wispColouredCosmiores = new Loomian("Coloured Cosmiores with Wisp (2024 Loomunity)", 5000, false, false);
const colouredCosmiores = new Loomian("Coloured Cosmiores (2024 Loomunity)", 500, false, false);
const christmasGlassScorbs = new Loomian("Christmas Scorbs - Common (2022 Jolly Village)", 12, true, false);
const jellyGumpod = new Loomian("Jelly Gumpod (2022 Sweet Retreat)", 50, true, true);
const lunarBunpuff = new Loomian("Lunar New Year Bunpuff (2023 Chinese New Year)", 60, true, true);
const lunarBunpuffRad = new Loomian("Radiant Lunar New Year Bunpuff (2023 Chinese New Year)", 600, true, true);
const colouredGoppies = new Loomian("Coloured Goppies (2023 Loomunity)", 60, false, false);
const rainbowNymaurae = new Loomian("Rainbow Nymaurae (2023 Loomunity)", 15000, false, false);
const rainbowPyramind = new Loomian("Rainbow Pyramind (2023 Loomunity)", 20000, false, false);
const rainbowGoppie = new Loomian("Rainbow Goppie (2023 Loomunity)", 10000, false, false);
const valentinesAntsee = new Loomian("Valentines Antsee (2023 Valentines)", 80, true, true);
const bronzeGeklow = new Loomian("Bronze Geklow (2020 Anniversary)", 100, true, false, false, true, true);
const bronzeCopling = new Loomian("Bronze Copling (2023 Anniversary)", 100, true, false, false, true, true);
const silverGeklow = new Loomian("Silver Geklow (2020 Anniversary)", 250, true, false, false, true, true);
const silverCopling = new Loomian("Silver Copling (2023 Anniversary)", true, false, false, true, true);
const goldGeklow = new Loomian("Gold Geklow (2020 Anniversary)", 500, true, false, false, true, true);
const goldCopling = new Loomian("Gold Copling (2023 Anniversary)", 500, true, false, false, true, true);
const sapphireGeklow = new Loomian("Sapphire Geklow (2020 Anniversary)", 10000, true, false, false, true, true);
const sapphireCopling = new Loomian("Sapphire Copling (2023 Anniversary)", 10000, true, false, false, true, true);
const emeraldGeklow = new Loomian("Emerald Geklow (2020 Anniversary)", 2000, true, false, false, true, true);
const emeraldCopling = new Loomian("Emerald Copling (2023 Anniversary)", 2000, true, false, false, true, true);
const rubyGeklow = new Loomian("Ruby Geklow (2020 Anniversary)", 5000, true, false, false, true, true);
const rubyCopling = new Loomian("Ruby Copling (2023 Anniversary)", 5000, true, false, false, true, true);
const sweetsPhancub = new Loomian("Sweets Phancub (2022 Sweet Retreat)", 100, true, true);
const snowmanTotemochi = new Loomian("Snowman Totemochi (2022 Jolly Village)", 150, true, false);
const cakeSlugling = new Loomian("Cake Slugling (2022 Sweet Retreat)", 200, true, true,);
const halloweenSlugling = new Loomian("Halloween Slugling (2019 Halloween)", 300, true, false);
const christmasGlassScorb = new Loomian("Glass Scorb - Rare (2022 Jolly Village)", 372, true, false);
const halloweenTaoshi = new Loomian("Halloween Taoshi (2022 Uhnne Fair)", 450, true, true);
const halloweenTerriti = new Loomian("Halloween Territi (2022 Uhnne Fair)", 450, true, true);
const christmasPropae = new Loomian("Santa Propae (2021 Christmas)", 500, true, true);
const halloweenShawchi = new Loomian("Halloween Shawchi (2019 Halloween)", 500, true, false);
const Icigool2020 = new Loomian("Coloured Icigool (2020 Christmas)", 600, true, true, true);
const Icigool2021 = new Loomian("Coloured Icigool (2021 Christmas and Beyond)", 600, true, true);
const christmasRagoon = new Loomian("Santa Ragoon (2019 Christmas)", 1000, true, false);
const rainbowShawchi = new Loomian("Rainbow Shawchi (2022 Loomunity)", 1000, true, true, true);
const rainbowVari = new Loomian("Rainbow Vari (2022 Loomunity)", 15000, false, false);
const rainbowFlorant = new Loomian("Rainbow Florant (2023 Loomunity)", 1000, true, true);
const normalKyeggo = new Loomian("Normal Kyeggo (2023 Easter)", (6*(100/37)), true, true);
const frillyKyeggo = new Loomian("Frilly Kyeggo (2023 Easter)", (6*(100/18.7)), true, true);
const zzKyeggo = new Loomian("Zig-Zag Kyeggo (2023 Easter)", (6*(100/8.7)), true, true);
const starKyeggo = new Loomian("Star Kyeggo (2023 Easter)", (6*(100/6)), true, true);
const fabergeKyeggo = new Loomian("Faberge Kyeggo (2023 Easter)", (6*(100/0.33)), true, true);
const halloweenMistlebud = new Loomian("Halloween Mistlebud (2023 Haunted Village)", (100/1.6), true, true);
const halloweenCryocub = new Loomian("Halloween Cryocub (2023 Haunted Village)", (100/0.3), true, true);
const christmasImpkin = new Loomian("Elf Impkin (2023 Jolly Festival)", 10, true, true);
const christmasVolpup = new Loomian("Holiday Volpup (2023 Jolly Festival)", 133, true, true,);
const hwKabunga = new Loomian("Scarecrow Kabunga (2020 Halloween)", 3, true, true,)
const xmasVaris = new Loomian("Varilution Varis (2023 Jolly Festival)", 50, true, false)
const lunarDractus = new Loomian("Lunar New Year Dractus (2024 Chinese New Year)", 60, true, true);
const lunarDractusRad = new Loomian("Radiant Lunar New Year Dractus (2024 Chinese New Year)", 600, true, true);
const normalKyeggo2024 = new Loomian("Normal Kyeggo (2024 Easter)", 3, true, true);
const dreggodyneKyeggo = new Loomian("Runic-Pattern Kyeggo (2024 Easter)", 6, true, true);
const yellowKyeggo = new Loomian("Pastel Kyeggo (2024 Easter)", 6, true, true);
const greenStripesKyeggo = new Loomian("Pink-Green Stripes Kyeggo (2024 Easter)", 6, true, true);
const goldKyeggo = new Loomian("Gold Kyeggo (2024 Easter)", 17, true, true);
const fabergeKyeggo2024 = new Loomian("Faberge Kyeggos (2024 Easter)", ((100)*3), true, true);
const nymaurae = new Loomian("Nymaurae (2020 Valentines Event)", 1, true, true);
const nymesis = new Loomian("Nymesis (2024 Trick Retreat)", 1, true, true);
const eyeballMochibi = new Loomian("Eyeball Mochibi (2024 Trick Retreat)", 20, true, true);
const hwSwirelle = new Loomian("Halloween Swirelle (2024 Trick Retreat)", 100, true, true);
const xmasSkilava = new Loomian("Holiday Skilava (2024 Jolly Village)", 15, true, true);
const xmasKittone = new Loomian("Holiday Kittone (2024 Jolly Village)", 45, true, true);
const xmasGrievestone = new Loomian("Holiday Grievestone (2024 Jolly Village)", 240, true, true);
const xmasUrsoul = new Loomian("Holiday Ursoul (2024 Jolly Village)", 1, true, true);
const lunarSnicle = new Loomian("Lunar New Year Snicle (2025 Chinese New Year)", 100, true, true, true);
const lunarRadiantSnicle = new Loomian("Radiant Lunar New Year Snicle (2025 Chinese New Year)", 1000, true, true, true);
const valentinesTwittle = new Loomian("Valentines Twittle (2025 Valentines)", 40, true, true);
const KyeggoNormal2025 = new Loomian("Normal Kyeggo (2025 Easter)", 3, true, true);
const KyeggoTurqoise = new Loomian("Turqoise Kyeggo (2025 Easter)", 6, true, true);
const KyeggoGreen = new Loomian("Green Kyeggo (2025 Easter)", 6, true, true);
const KyeggoPink = new Loomian("Pink Kyeggo (2025 Easter)", 6, true, true);
const KyeggoPyramind = new Loomian("Pyramind Kyeggo (2025 Easter)", 17, true, true);
const KyeggoFabergeYellow = new Loomian("Yellow Faberge Kyeggo (2025 Easter)", 300, true, true);
const KyeggoFabergePink = new Loomian("Pink Faberge Kyeggo (2025 Easter)", 300, true, true);
const KyeggoFabergeCyan = new Loomian("Cyan Faberge Kyeggo (2025 Easter)", 300, true, true);
const easterDorogo = new Loomian("Easter Dorogo (2025 Easter)", 1, true, true);
const solnecta = new Loomian("Solnecta (2025 Loomunity)", 1, true, true);
const tennisGeksplode = new Loomian("Tennisball Geksplode (2025 Loomunity)", 1, true, true);
const drinkSingeel = new Loomian("Drink Singeel (2025 Loomunity)", 50, true, true);
const flowerPipsee = new Loomian("Flower Pipsee (2025 Loomunity)", 100, true, true);
const sandcastlePyramind = new Loomian("Sandcastle Pyramind (2025 Loomunity)", 800, true, true);  
const colouredCynamoth = new Loomian("Coloured Cynamoth (2025 Loomunity)", 100, false, false);
const wispColouredCynamoth = new Loomian("Coloured Cynamoth with Wisp (2025 Loomunity)", 1000, false, false);
const colouredObsidrugon = new Loomian("Coloured Obsidrugon (2025 Loomunity)", 500, false, false);
const wispColouredObsidrugon = new Loomian("Coloured Obsidrugon with Wisp (2025 Loomunity)", 5000, false, false);
const rainbowEleguana = new Loomian("Rainbow Eleguana (2025 Loomunity)", 1000, true, true, true, false, false);
const rainbowCynamoth = new Loomian("Rainbow Cynamoth (2025 Loomunity)", 2000, false, false);
const rainbowObsidrugon = new Loomian("Rainbow Obsidrugon (2025 Loomunity)", 5000, false, false);

//name, odds, alphaG, gammaG, halved odds, halved charm, quad boost

// collate all objects into an array
const optionData = [
  halloweenSlugling,
  halloweenShawchi,
  christmasRagoon,
  bronzeGeklow,
  silverGeklow,
  goldGeklow,
  emeraldGeklow,
  rubyGeklow,
  sapphireGeklow,
  hwKabunga,
  nymaurae,
  Icigool2020,
  christmasPropae,
  Icigool2021,
  rainbowShawchi,
  rainbowVari,
  sweetsPhancub,
  cakeSlugling,
  jellyGumpod,
  halloweenTaoshi,
  halloweenTerriti,
  christmasGlassScorb,
  christmasGlassScorbs,
  snowmanTotemochi,
  lunarBunpuff,
  lunarBunpuffRad,
  valentinesAntsee,
  normalKyeggo,
  frillyKyeggo,
  zzKyeggo,
  starKyeggo,
  fabergeKyeggo,
  rainbowFlorant,
  rainbowNymaurae,
  rainbowPyramind,
  rainbowGoppie,
  bronzeCopling,
  silverCopling,
  goldCopling,
  emeraldCopling,
  rubyCopling,
  sapphireCopling,
  halloweenMistlebud,
  halloweenCryocub,
  christmasImpkin,
  christmasVolpup,
  xmasVaris,
  lunarDractus,
  lunarDractusRad,
  normalKyeggo2024,
  yellowKyeggo,
  dreggodyneKyeggo,
  greenStripesKyeggo,
  goldKyeggo,
  fabergeKyeggo2024,
  fishingShawchi,
  colouredCosmiores,
  wispColouredCosmiores,
  colouredChoochew,
  wispColouredChoochew,
  rainbowTeridescent,
  rainbowCosmiore,
  rainbowChoochew,
  surfboardMirrami,
  surferDractus,
  lifeguardSharpod,
  eyeballMochibi,
  nymesis,
  hwSwirelle,
  xmasSkilava,
  xmasKittone,
  xmasGrievestone,
  xmasUrsoul,
  lunarSnicle,
  lunarRadiantSnicle,
  valentinesTwittle,
  KyeggoNormal2025,
  KyeggoTurqoise,
  KyeggoPink,
  KyeggoGreen,
  KyeggoFabergeCyan,
  KyeggoFabergePink,
  KyeggoFabergeYellow,
  easterDorogo,
  solnecta,
  tennisGeksplode,
  drinkSingeel,
  flowerPipsee,
  sandcastlePyramind,
  wispColouredCynamoth,
  colouredCynamoth,
  wispColouredObsidrugon,
  colouredObsidrugon,
  rainbowEleguana,
  rainbowCynamoth,
  rainbowObsidrugon,
]

// defining Variables
const selectElement = document.getElementById("mySelect");
const alphaResult = document.getElementById("AlphaResult");
const gammaResult = document.getElementById("GammaResult");
const rwResult = document.getElementById("RWResult");
const gCharm = document.getElementById("GleamingCharm");
const gBoost = document.getElementById("GleamingBoost");
const oddsDisplayButton = document.getElementById("displayOdds");
const calculateButton = document.getElementById("calculate");

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
  switch (selectedLoomian.halvedGOdds) {
    case true:
      gleamingOdds = 2048;
      break;
    default:
      gleamingOdds = 4096;
      break;
  }

  // change gCharmMultiplier
  switch (selectedLoomian.halvedGCharm) {
    case true:
      gCharmMultiplier = 0.25;
      break;
    default:
      gCharmMultiplier = 0.5;
      break;
  }

  // change gBoostMultiplier
  switch (selectedLoomian.halvedGBoost) {
    case true:
      gBoostMultiplier = 0.015625;
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
