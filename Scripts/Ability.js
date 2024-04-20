class Loomian {
    constructor(name, odds, wild, rallyRanch, weather, petrolith){
        this.name = name; //str
        this.odds = odds; //float
        this.wild = wild; //bool
        this.rallyRanch = rallyRanch; //bool
        this.weather = weather; //bool
        this.petrolith = petrolith; //bool
    }  

  isPetrolith() {
    if (this.petrolith) {
      return true
    } else {
      return false
    }
  }

  isRally() {
    if (this.rallyRanch) {
        return true
    } else {
        return false
    }
  }

  isWeather() {
    if (this.weather) {
        return true
    } else {
        return false
    }
  }
}

//Rallyable Event-Inclusive Loomians
const ampole = new Loomian("Ampole", 1, true, true, true, false);
const antsee = new Loomian("Antsee", 10, true, true, true, false);
const babore = new Loomian("Babore", 1, true, true, true, false);
const bunpuff = new Loomian("Bunpuff", 50, true, true, false, false);
const burroach = new Loomian("Burroach", 1, true, true, true, false);
const cafnote = new Loomian("Cafnote (M/F)", 1, true, true, true, false);
const cathorn =  new Loomian("Cathorn", 1, true, true, true, false);
const cavenish =  new Loomian("Cavenish", 1, true, true, true, false);
const ceratot = new Loomian("Ceratot", 1, false, false, false, true);
const chompactor = new Loomian("Chompactor", 1, true, true, true, false);
const cinnaboo = new Loomian("Cinnaboo", 1, true, true, false, false);
const copling = new Loomian("Copling", 20/17, true, true, false, false);
const cosmiore = new Loomian("Cosmiore", 128, true, false, false, false);
const craytal = new Loomian("Craytal", 1, true, true, false, false);
const eventCraytal = new Loomian("Event Craytal", 1 , true, true, false, false);
const cryocub = new Loomian("Cryocub", 40, true, true, false, false);
const cupoink = new Loomian("Cupoink", 10, true, true, false, false);
const dobo = new Loomian("Dobo", 1, false, false, false, true);
const dractus = new Loomian("Dractus", 100, true, true, false, false);
const dripple = new Loomian("Dripple", 1, false, true, false, false);
const eaglit = new Loomian ("Eaglit", 1, false, true, false, false);
const embit = new Loomian("Embit", 1, false, true, false, false);
const fevine = new Loomian("Fevine", 1, false, true, false, false);
const florant = new Loomian("Florant", 1, true, true, true, false);
const geklow = new Loomian("Geklow", 1, true, true, true, false);
const gobbidemic = new Loomian("Gobbidemic", 100/3, true, true, true, false);
const goppie = new Loomian("Goppie", 1, true, true, true, false);
const grubby = new Loomian("Grubby", 1, true, true, true, false);
const gumpod = new Loomian("Gumpod", 10, true, true, true, false);
const gwurm = new Loomian("Gwurm", 1, true, true, false, false);
const hydrini = new Loomian("Hydrini", 64, true, true, false, false);
const icigool = new Loomian("Icigool", 90, true, false, false, false);
const igneol = new Loomian("Igneol", 50, true, true, false, false);
const impkin = new Loomian("Impkin", 2, true, true, false, false);
const kabunga = new Loomian("Kabunga", 1, true, true, true, false);
const kanki = new Loomian("Kanki", 12.5, true, true, true, false);
const kittone = new Loomian("Kittone", 1, true, true, false, false);
const kleptyke = new Loomian("Kleptyke", 1, true, true, true, false);
const kyogo = new Loomian("Kyogo", 1, true, true, false, true);
const llamba = new Loomian("Llamba", 60, true, true, true, false);
const lumica = new Loomian("Lumica", 1, true, true, true, false);
const makame = new Loomian("Makame", 31, true, true, true, false);
const mochibi = new Loomian("Mochibi", 1, true, true, false, false);
const nymaurae = new Loomian("Nymaurae", 1, true, false, false, false);
const operaptor = new Loomian("Operaptor", 50, true, true, true, false);
const phancub = new Loomian("Phancub", 10, true, true, true, false);
const pipsee = new Loomian("Pipsee", 64, true, true, false, false);
const poochrol = new Loomian("Poochrol", 10, true, true, false, false);
const pwuff = new Loomian("Pwuff", 1, true, true, true, false);
const pyder = new Loomian("Pyder", 10, true, true, true, false);
const pyke = new Loomian("Pyke", 1, false, false, false, true);
const pyramind = new Loomian("Pyramind", 300, true, false, false, false);
const rakrawla = new Loomian("Rakrawla", 1, true, true, true, false);
const scorb = new Loomian("Scorb", 1, true, true, false, false);
const sharpod = new Loomian("Sharpod", 20, true, true, true, false);
const shawchi = new Loomian("Shawchi", 25, true, true, true, false);
const sherbot = new Loomian("Sherbot", 17, true, true, true, false);
const skilava = new Loomian("Skilava", 1, true, true, true, false);
const slugling = new Loomian("Slugling", 1, true, true, true, false);
const smoal = new Loomian("Smoal", 64, true, true, false, false);
const snagull = new Loomian("Snagull", 1, true, true, true, false);
const snagullS = new Loomian("Snagull (Sandwich)", 35, true, false, false, false);
const snocub = new Loomian("Snocub", 1, false, true, false, false);
const snowl = new Loomian("Snowl", 45, true, true, false, false);
const swimp = new Loomian("Swimp", 10, true, true, true, false);
const swishy = new Loomian("Swishy", 5, true, true, false, false);
const taoshi = new Loomian("Taoshi", 10, true, true, true, false);
const territi = new Loomian("Territi", 1, true, true, false, false);
const twilat = new Loomian("Twilat", 1, true, true, true, false);
const twittle = new Loomian("Twittle", 1, true, true, true, false);
const vambat = new Loomian("Vambat", 1, false, true, false, false);
const variF = new Loomian("Vari (Female)", 125, true, true, false, false);
const variM = new Loomian("Vari (Male)", 500, true, true, false, false);
const volpup = new Loomian("Volpup", 40, true, true, false, false);
const weevolt = new Loomian("Weevolt", 1, false, true, false, false);
const whimpor = new Loomian("Whimpor", 10, true, true, true, false);
const whispup = new Loomian("Whispup", 1, true, true, true, false);
const wiledile = new Loomian("Wiledile", 23, true, true, true, false);
const wispur = new Loomian("Wispur", 64, true, true, false, false);
const zaleo = new Loomian("Zaleo", 1, false, false, false, true);
const fentern = new Loomian("Fentern", 20, true, true, true, false);
const dokan = new Loomian("Dokan", 20, true, true, true, false);
const teripod = new Loomian("Teripod", 20, true, true, true, false);
const polypi = new Loomian("Polypi", 10, true, true, true, false);
const somata = new Loomian("Somata", 10, true, true, true, false);
const crabushi = new Loomian("Crabushi", 1, true, true, true, false);
const skampi = new Loomian("Skampi", 1, true, true, true, false);
const singeel = new Loomian("Singeel", 1, true, true, true, false);
const kayute = new Loomian("Kayute", 1, true, true, false, false);
const leopaw = new Loomian("Leopaw", 1, true, true, false, false);
const mirrami = new Loomian("Mirrami", 50, true, true, false, false);
const eyebrella = new Loomian("Eyebrella", 1, true, true, false, false);
const lissen = new Loomian("Lissen", 1, true, true, false, false);
const lantot = new Loomian("Lantot", 1, true, true, false, false);
const milgoo = new Loomian("Milgoo", 1, true, true, false, false);
const nautling = new Loomian("Nautling", 1, false, false, false, true);
const yutiny = new Loomian("Yutiny", 1, false, false, false, true);
const yuteen = new Loomian("Yuteen", 1, false, false, false, true);
const morphezu = new Loomian("Morphezu", 1, false, false, false, true);
const behemoroth = new Loomian("Behemoroth", 1, false, false, false, true);
const leviatross = new Loomian("Leviatross", 1, false, false, false, true);

//Non-Rallyable Event Loomians
const christmasGlassScorbs = new Loomian("Common Christmas Scorbs (2022 Christmas)", 12, true, false, false, false);
const jellyGumpod = new Loomian("Jelly Gumpod (2022 Sweet Retreat)", 50, true, false, false, false);
const lunarBunpuff = new Loomian("Lunar New Year Bunpuff (2023 Chinese New Year)", 60, true, false, false, false);
const lunarBunpuffRad = new Loomian("Radiant Lunar New Year Bunpuff (2023 Chinese New Year)", 60, true, false, false, false);
const colouredGoppies = new Loomian("Coloured Goppies (2023 Loomunity)", 60, true, false, false, false);
const valentinesAntsee = new Loomian("Valentines Antsee (2023 Valentines)", 80, true, false, false, false);
const bronzeGeklow = new Loomian("Bronze Geklow (2020 Anniversary)", 100, true, false, false, false);
const bronzeCopling = new Loomian("Bronze Copling (2023 Anniversary)", 100, true, false, false, false);
const sweetsPhancub = new Loomian("Sweets Phancub (2022 Sweet Retreat)", 100, true, true, false, false);
const snowmanTotemochi = new Loomian("Snowman Totemochi (2022 Christmas)", 150, true, false, false, false);
const cakeSlugling = new Loomian("Cake Slugling (2022 Sweet Retreat)", 200, true , false, false, false);
const silverGeklow = new Loomian("Silver Geklow (2020 Anniversary)", 250, true, false, false, false);
const silverCopling = new Loomian("Silver Copling (2023 Anniversary)", true, false, false, false);
const halloweenSlugling = new Loomian("Halloween Slugling (2019 Halloween)", 300, true, false, false, false);
const christmasGlassScorb = new Loomian("Glass Scorb (2022 Christmas)", 372, true, false, false, false);
const halloweenTaoshi = new Loomian("Halloween Taoshi (2022 Halloween)", 450, true, false, false, false);
const halloweenTerriti = new Loomian("Halloween Territi (2022 Halloween)", 450, true, false, false, false);
const goldGeklow = new Loomian("Gold Geklow (2020 Anniversary)", 500, true, false, false, false);
const goldCopling = new Loomian("Gold Copling (2023 Anniversary)", 500, true, false, false, false);
const christmasPropae = new Loomian("Santa Propae (2021 Christmas)", 500, true, false, false, false);
const halloweenShawchi = new Loomian("Halloween Shawchi (2019 Halloween)", 500, true, false, false, false);
const Icigool2019 = new Loomian("Coloured Icigool (2019 Christmas)", 600, true, false, false, false);
const Icigool2020 = new Loomian("Coloured Icigool (2020 Christmas)", 600, true, false, false, false);
const Icigool2021 = new Loomian("Coloured Icigool (2021 Christmas and Beyond)", 600, true, false, false, false);
const christmasRagoon = new Loomian("Santa Ragoon (2019 Christmas)", 1000, true, false, false, false);
const rainbowShawchi = new Loomian("Rainbow Shawchi (2022 Loomunity)", 1000, true, false, false, false);
const rainbowFlorant = new Loomian("Rainbow Florant (2023 Loomunity)", 1000, true, false, false, false);
const emeraldGeklow = new Loomian("Emerald Geklow (2020 Anniversary)", 2000, true, false, false, false);
const emeraldCopling = new Loomian("Emerald Copling (2023 Anniversary)", 2000, true, false, false, false);
const rubyGeklow = new Loomian("Ruby Geklow (2020 Anniversary)", 5000, true, false, false, false);
const rubyCopling = new Loomian("Ruby Copling (2023 Anniversary)", 5000, true, false, false, false);
const normalKyeggo = new Loomian("Normal Kyeggo (2023 Easter)", (6*(100/37)), true, true, false, false);
const frillyKyeggo = new Loomian("Frilly Kyeggo (2023 Easter)", (6*(100/18.7)), true, false, false, false);
const zzKyeggo = new Loomian("Zig-Zag Kyeggo (2023 Easter)", (6*(100/8.7)), true, false, false, false);
const starKyeggo = new Loomian("Star Kyeggo (2023 Easter)", (6*(100/6)), true, false, false, false);
const fabergeKyeggo = new Loomian("Faberge Kyeggo (2023 Easter)", (6*(100/0.33)), true, false, false, false);
const sapphireGeklow = new Loomian("Sapphire Geklow (2020 Anniversary)", 10000, true, false, false, false);
const sapphireCopling = new Loomian("Sapphire Copling (2023 Anniversary)", 10000, true, false, false, false);
const halloweenCryocub = new Loomian("Halloween Cryocub (2023 Haunted Village)", (100/0.3), true, false, false, false);
const halloweenMistlebud = new Loomian("Halloween Mistlebud (2023 Haunted Village)", (100/1.6), true, false, false, false);
const christmasImpkin = new Loomian("Elf Impkin (2023 Jolly Festival)", 10, true, false, false, false);
const christmasVolpup = new Loomian("Holiday Volpup (2023 Jolly Festival)", 133, true, false, false, false);
const hwKabunga = new Loomian("Scarecrow Kabunga (2020 Halloween)", 1, true, true, false, false);
const rainbowVari = new Loomian("Rainbow Vari (2022 Loomunity)", 15000, true, false, false, false);
const xmasVaris = new Loomian("Varilution Varis (2023 Jolly Festival)", 50, true, false, false, false); 
const lunarDractus = new Loomian("Lunar New Year Dractus (2024 Chinese New Year)", 60, true, false, false, false);
const lunarDractusRad = new Loomian("Radiant Lunar New Year Dractus (2024 Chinese New Year)", 600, true, false, false, false);
const normalKyeggo2024 = new Loomian("Normal Kyeggo (2024 Easter)", 3, true, true, false, false);
const dreggodyneKyeggo = new Loomian("Runic-Pattern Kyeggo (2024 Easter)", 6, true, false, false, false);
const yellowKyeggo = new Loomian("Pastel Kyeggo (2024 Easter)", 6, true, false, false, false);
const greenStripesKyeggo = new Loomian("Triangle-Striped Kyeggo (2024 Easter)", 6, true, false, false, false);
const goldKyeggo = new Loomian("Gold Kyeggo (2024 Easter)", 17, true, false, false , false);
const fabergeKyeggo2024 = new Loomian("Faberge Kyeggos (2024 Easter)", ((100)*3), true, false, false, false);

// name, odds, is wild?, is rallyable?, is weather affected?, is petrolith?

// collate all objects into an array
var optionData = [
    nautling,
    yutiny,
    yuteen,
    morphezu,
    behemoroth,
    leviatross,
    ampole, 
    antsee,
    babore, 
    bunpuff,
    burroach,
    cafnote,
    cathorn,
    cavenish,
    ceratot,
    chompactor,
    cinnaboo,
    copling,
    cosmiore,
    crabushi,
    craytal,
    eventCraytal,
    cryocub,
    cupoink,
    dobo,
    dokan,
    dractus,
    dripple,
    eaglit,
    embit,
    fevine,
    fentern,
    florant,
    geklow, 
    gobbidemic,
    goppie,
    grubby,
    gumpod,
    gwurm,
    hydrini,
    igneol,
    icigool,
    impkin,
    kabunga,
    kanki,
    kittone,
    kleptyke,
    kyogo,
    llamba,
    lumica,
    makame,
    mochibi,
    nymaurae,
    operaptor,
    phancub,
    pipsee,
    poochrol,
    polypi,
    pwuff,
    pyder,
    pyke,
    pyramind,
    rakrawla,
    scorb,
    sharpod,
    shawchi,
    sherbot,
    singeel,
    skampi,
    skilava,
    slugling,
    smoal,
    snagull,
    snagullS,
    snocub,
    snowl,
    somata,
    swimp,
    swimp,
    taoshi,
    teripod,
    territi,
    twilat,
    twittle,
    vambat,
    variF,
    variM,
    volpup,
    weevolt,
    whimpor,
    whispup,
    wiledile,
    wispur,
    zaleo,
    kayute,
    leopaw,
    mirrami,
    eyebrella,
    lissen,
    lantot,
    milgoo,
]

var eventLoomianData = [
    halloweenSlugling,
    halloweenShawchi,
    christmasRagoon,
    Icigool2019,
    bronzeGeklow,
    silverGeklow,
    goldGeklow,
    emeraldGeklow,
    rubyGeklow,
    sapphireGeklow,
    hwKabunga,
    Icigool2020,
    Icigool2021,
    christmasPropae,
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
    bronzeCopling,
    silverCopling,
    goldCopling,
    emeraldCopling,
    rubyCopling,
    sapphireCopling,
    halloweenCryocub,
    halloweenMistlebud,
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
    fabergeKyeggo2024
]

// sort Common Loomians alphabetically
commonLoomianData = optionData.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // convert names to uppercase for case-insensitive sorting
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
        return -1;
    }

    if (nameA > nameB) {
        return 1;
    }

    return 0; // names are equal
});

// HTML elements
const eventSelectBox = document.getElementById("eventSelect");
const selectElement = document.getElementById("mySelect");
const oddsDisplayButton = document.getElementById("displayOdds");
const calculateButton = document.getElementById("calculate");
const abilityCharmID = document.getElementById("AbilityCharm"); 
const abilityLeaderID = document.getElementById("AbilityLeader");
const saResult = document.getElementById("SAResult");
const weatherResult = document.getElementById("Weather");
const rallyResult = document.getElementById("RallyResult");

// JS Constants and Variables
var selectionList = []

// Load 2nd select box based on 1st box selection
eventSelectBox.addEventListener("change", function() {
    switch (this.value) {
      case "Common Loomians":
        //for every item in the 2nd select box, remove it
        for (let i = selectElement.options.length - 1; i >= 0; i--) {
          selectElement.remove(i);
        }

        selectionList = []
        rallyResult.style.display = "block";

        //add all from common loomian array into selection array
        for (let Loomian of commonLoomianData) {
          selectionList.push(Loomian)
        }

        //add selection array into 2nd select box
        for (let Loomian of selectionList) {
          let option = document.createElement('option');
          let selectElement = document.getElementById("mySelect")

          option.value = Loomian.name; // Set the value to the object's name
          option.text = `${Loomian.name}`; // Set the label to a combination of name and option1
          selectElement.appendChild(option);
        }

        oddsDisplayButton.disabled = false;
        calculateButton.disabled = false;

        rallyResult.style.display = "block";
        abilityLeaderID.checked = false;
        abilityLeaderID.disabled = false;
        weatherResult.style.display = "block";

        // console.log("Common Loomians loaded")
        break;
      case "Event Loomians":
        //for every item in the 2nd select box, remove it
        for (let i = selectElement.options.length - 1; i >= 0; i--) {
          selectElement.remove(i);
        }

        selectionList = []
        rallyResult.style.display = "block";

        //add all from common loomian array into selection array
        for (let Loomian of eventLoomianData) {
          selectionList.push(Loomian)
        }

        //add selection array into 2nd select box
        for (let Loomian of selectionList) {
          let option = document.createElement('option');
          option.value = Loomian.name; // Set the value to the object's name
          option.text = `${Loomian.name}`; // Set the label to a combination of name and option1
          let selectElement = document.getElementById("mySelect")
          selectElement.appendChild(option);
        }

        oddsDisplayButton.disabled = false;
        calculateButton.disabled = false;

        rallyResult.style.display = "none";
        abilityLeaderID.checked = false;
        abilityLeaderID.disabled = true;
        weatherResult.style.display = "none";

        //console.log("Event Loomians loaded")
        break;
      default:
        //console.log("Option Loading Error")
        break;
    }
})

// update statistics
selectElement.addEventListener("change", function updateLabels() {
    let selectedName = document.getElementById("mySelect").value;
    let selectedLoomian = selectionList.find(loomian => loomian.name === selectedName);

    if (selectedLoomian) {
        if (selectedLoomian.isPetrolith()) { // disable rally since petroliths aren't rallyable
        rallyResult.style.display = "none";
        } else {
        rallyResult.style.display = "block";
        }

        if (selectedLoomian.isRally()) { // enable all rally related inputs
        rallyResult.style.display = "block";
        abilityLeaderID.disabled = false;
        } else {
        rallyResult.style.display = "none";
        abilityLeaderID.checked = false;
        abilityLeaderID.disabled = true;
        }

        if (selectedLoomian.isWeather()) { // enable all weather related inputs
        weatherResult.style.display = "block";
        } else {
        weatherResult.style.display = "none";
        }

        calculateButton.disabled = false;
        oddsDisplayButton.disabled = false;
    }
});

//Show the odds of selected Loomian
function displayOdds() {
    let oddsDescription = document.getElementById("odds")
    let selectedName = document.getElementById("mySelect").value;
    let selectedLoomian = selectionList.find(loomian => loomian.name === selectedName);

    if (selectedLoomian) {
        oddsDescription.innerHTML = "1 in " + selectedLoomian.odds.toFixed(2)
    }
}

//calculate odds for the 3 situations
function calculate() {
    const abilityOdds = 512 // F2P has wild odds start at 512
    const abilityCharmMultiplier = 0.5 // charm halves this so wild encounters are 256

    let selectedName = document.getElementById("mySelect").value;
    let selectedLoomian = selectionList.find(loomian => loomian.name === selectedName);
    let wildOdds = abilityOdds * selectedLoomian.odds
    let rallyOdds = abilityOdds * 0.5
    let weatherOdds = abilityOdds * selectedLoomian.odds * 0.25

    //Check if the Loomian is a Petrolith and if the Charm has been selected
    switch (true) {
        case abilityCharmID.checked && selectedLoomian.isPetrolith():
            wildOdds *= 0.5 * 0.25
            break;
        case abilityCharmID.checked && !selectedLoomian.isPetrolith():
            wildOdds *= 0.5
            break;
        case !abilityCharmID.checked && selectedLoomian.isPetrolith():
            wildOdds *= 0.5
            break;   
        case !abilityCharmID.checked && !selectedLoomian.isPetrolith():
            break;
        default:
    }

    //Check if the Loomian is Rallyable anc if the Charm has been selected
    switch (true) {
        case abilityCharmID.checked && selectedLoomian.isRally():
            rallyOdds *= abilityCharmMultiplier;
            break;
        case !abilityCharmID.checked && selectedLoomian.isRally():
        case abilityCharmID.checked && !selectedLoomian.isRally():
        case !abilityCharmID.checked && !selectedLoomian.isRally():
            break;
        default:
    }

    //Check if SA Leader has been checked
    if (abilityLeaderID.checked) {
        rallyOdds *= 0.25
    } 

    if (selectedLoomian == variM) {
        rallyOdds *= 5;
    } else if (selectedLoomian == variF) {
        rallyOdds *= 1.25;
    } else {
        rallyOdds
    }

    //Check if Loomian can act strangely and if Charm is checked
    switch (true) {
        case selectedLoomian.isWeather() && abilityCharmID.checked:
            weatherOdds *= abilityCharmMultiplier;
            break;
        case selectedLoomian.isWeather() && !abilityCharmID.checked:
            weatherOdds
            break;
        case !selectedLoomian.isWeather() && abilityCharmID.checked:
            weatherOdds = 0;
            break;
        case !selectedLoomian.isWeather() && !abilityCharmID.checked:
            break;
        default:
    }

//Output all calcs
saResult.innerHTML = "Wild: " + "<br> 1 in " + wildOdds.toFixed(2);
rallyResult.innerHTML = "Rally Ranch: " + "<br> 1 in " + rallyOdds.toFixed(2);
weatherResult.innerHTML = "Weather: " + "<br> 1 in " + weatherOdds.toFixed(2);
}