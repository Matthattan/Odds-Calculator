class Loomian {
    constructor(name, odds, wild, rallyRanch, weather, petrolith, saOdds, abilityCharm){
        this.name = name; //str
        this.odds = odds; //float
        this.wild = wild; //bool
        this.rallyRanch = rallyRanch; //bool
        this.weather = weather; //bool
        this.petrolith = petrolith; //bool
        this.saOdds = saOdds; //float
        this.abilityCharm = abilityCharm; //float
    }  

  isPetrolith() {
    if (this.petrolith) {
      rallyResult.style.display = "none";
      return true
    } else {
      rallyResult.style.display = "block";
      return false
    }
  }

  isRally() {
    if (this.rallyRanch) {
      rallyResult.style.display = "block";
      abilityLeaderID.disabled = false;
      return true
    } else {
      rallyResult.style.display = "none";
      abilityLeaderID.checked = false;
      abilityLeaderID.disabled = true;
      return false
    }
  }

  isWeather() {
    if (this.weather) {
      weatherResult.style.display = "block";
      return true
    } else {
      weatherResult.style.display = "none";
      return false
    }
  }
}

//Rallyable Event-Inclusive Loomians
const ampole = new Loomian("Ampole", 1, true, true, true, false, 256, 0.5,);
const antsee = new Loomian("Antsee", 10, true, true, true, false, 256, 0.5);
const babore = new Loomian("Babore", 1, true, true, true, false, 256, 0.5);
const bunpuff = new Loomian("Bunpuff", 50, true, true, false, false, 256, 0.5);
const burroach = new Loomian("Burroach", 1, true, true, true, false, 256, 0.5);
const cafnote = new Loomian("Cafnote (M/F)", 1, true, true, true, false, 256, 0.5);
const cathorn =  new Loomian("Cathorn", 1, true, true, true, false, 256, 0.5);
const cavenish =  new Loomian("Cavenish", 1, true, true, true, false, 256, 0.5);
const ceratot = new Loomian("Ceratot", 1, false, false, false, true, 256, 0.5);
const chompactor = new Loomian("Chompactor", 1, true, true, true, false, 256, 0.5);
const cinnaboo = new Loomian("Cinnaboo", 1, true, true, false, false, 256, 0.5);
const copling = new Loomian("Copling", 20/17, true, true, false, false, 256, 0.5);
const cosmiore = new Loomian("Cosmiore", 128, true, false, false, false, 256, 0.5);
const craytal = new Loomian("Craytal", 1, true, true, false, false, 256, 0.5);
const eventCraytal = new Loomian("Event Craytal", 1 , true, false, false, false, 256, 0.5);
const cryocub = new Loomian("Cryocub", 40, true, true, false, false, 256, 0.5);
const cupoink = new Loomian("Cupoink", 10, true, true, false, false, 256, 0.5);
const dobo = new Loomian("Dobo", 1, false, false, false, true, 256, 0.5);
const dractus = new Loomian("Dractus", 100, true, true, false, false, 256, 0.5);
const dripple = new Loomian("Dripple", 1, false, true, false, false, 256, 0.5);
const eaglit = new Loomian ("Eaglit", 1, false, true, false, false, 256, 0.5);
const embit = new Loomian("Embit", 1, false, true, false, false, 256, 0.5);
const fevine = new Loomian("Fevine", 1, false, true, false, false, 256, 0.5);
const florant = new Loomian("Florant", 1, true, true, true, false, 256, 0.5);
const geklow = new Loomian("Geklow", 1, true, true, true, false, 256, 0.5);
const gobbidemic = new Loomian("Gobbidemic", 100/3, true, true, true, false, 256, 0.5);
const goppie = new Loomian("Goppie", 1, true, true, true, false, 256, 0.5);
const grubby = new Loomian("Grubby", 1, true, true, true, false, 256, 0.5);
const gumpod = new Loomian("Gumpod", 10, true, true, true, false, 256, 0.5);
const gwurm = new Loomian("Gwurm", 1, true, true, false, false, 256, 0.5);
const hydrini = new Loomian("Hydrini", 64, true, true, false, false, 256, 0.5);
const icigool = new Loomian("Icigool", 90, true, false, false, false, 256, 0.5);
const igneol = new Loomian("Igneol", 50, true, true, false, false, 256, 0.5);
const impkin = new Loomian("Impkin", 2, true, true, false, false, 256, 0.5);
const kabunga = new Loomian("Kabunga", 1, true, true, true, false, 256, 0.5);
const kanki = new Loomian("Kanki", 12.5, true, true, true, false, 256, 0.5);
const kittone = new Loomian("Kittone", 1, true, true, false, false, 256, 0.5);
const kleptyke = new Loomian("Kleptyke", 1, true, true, true, false, 256, 0.5);
const kyogo = new Loomian("Kyogo", 1, true, true, false, true, 256, 0.5);
const llamba = new Loomian("Llamba", 60, true, true, true, false, 256, 0.5);
const lumica = new Loomian("Lumica", 1, true, true, true, false, 256, 0.5);
const makame = new Loomian("Makame", 31, true, true, true, false, 256, 0.5);
const mochibi = new Loomian("Mochibi", 1, true, true, false, false, 256, 0.5);
const nymaurae = new Loomian("Nymaurae", 1, true, false, false, false, 256, 0.5);
const operaptor = new Loomian("Operaptor", 50, true, true, true, false, 256, 0.5);
const phancub = new Loomian("Phancub", 10, true, true, true, false, 256, 0.5);
const pipsee = new Loomian("Pipsee", 64, true, true, false, false, 256, 0.5);
const poochrol = new Loomian("Poochrol", 10, true, true, false, false, 256, 0.5);
const pwuff = new Loomian("Pwuff", 1, true, true, true, false, 256, 0.5);
const pyder = new Loomian("Pyder", 10, true, true, true, false, 256, 0.5);
const pyke = new Loomian("Pyke", 1, false, false, false, true, 256, 0.5);
const pyramind = new Loomian("Pyramind", 300, true, false, false, false, 256, 0.5);
const rakrawla = new Loomian("Rakrawla", 1, true, true, true, false, 256, 0.5);
const scorb = new Loomian("Scorb", 1, true, true, false, false, 256, 0.5);
const sharpod = new Loomian("Sharpod", 20, true, true, true, false, 256, 0.5);
const shawchi = new Loomian("Shawchi", 25, true, true, true, false, 256, 0.5);
const sherbot = new Loomian("Sherbot", 17, true, true, true, false, 256, 0.5);
const skilava = new Loomian("Skilava", 1, true, true, true, false, 256, 0.5);
const slugling = new Loomian("Slugling", 1, true, true, true, false, 256, 0.5);
const smoal = new Loomian("Smoal", 64, true, true, false, false, 256, 0.5);
const snagull = new Loomian("Snagull", 1, true, true, true, false, 256, 0.5);
const snagullS = new Loomian("Snagull (Sandwich)", 35, true, false, false, false, 256, 0.5);
const snocub = new Loomian("Snocub", 1, false, true, false, false, 256, 0.5);
const snowl = new Loomian("Snowl", 45, true, true, false, false, 256, 0.5);
const swimp = new Loomian("Swimp", 10, true, true, true, false, 256, 0.5);
const swishy = new Loomian("Swishy", 5, true, true, false, false, 256, 0.5);
const taoshi = new Loomian("Taoshi", 10, true, true, true, false, 256, 0.5);
const territi = new Loomian("Territi", 1, true, true, false, false, 256, 0.5);
const twilat = new Loomian("Twilat", 1, true, true, true, false, 256, 0.5);
const twittle = new Loomian("Twittle", 1, true, true, true, false, 256, 0.5);
const vambat = new Loomian("Vambat", 1, false, true, false, false, 256, 0.5);
const variF = new Loomian("Vari (Female)", 125, true, true, false, false, 256, 0.5);
const variM = new Loomian("Vari (Male)", 500, true, true, false, false, 256, 0.5);
const volpup = new Loomian("Volpup", 40, true, true, false, false, 256, 0.5);
const weevolt = new Loomian("Weevolt", 1, false, true, false, false, 256, 0.5);
const whimpor = new Loomian("Whimpor", 10, true, true, true, false, 256, 0.5);
const whispup = new Loomian("Whispup", 1, true, true, true, false, 256, 0.5);
const wiledile = new Loomian("Wiledile", 23, true, true, true, false, 256, 0.5);
const wispur = new Loomian("Wispur", 64, true, true, false, false, 256, 0.5);
const zaleo = new Loomian("Zaleo", 1, false, false, false, true, 256, 0.5);
const fentern = new Loomian("Fentern", 20, true, true, true, false, 256, 0.5);
const dokan = new Loomian("Dokan", 20, true, true, true, false, 256, 0.5);
const teripod = new Loomian("Teripod", 20, true, true, true, false, 256, 0.5);
const polypi = new Loomian("Polypi", 10, true, true, true, false, 256, 0.5);
const somata = new Loomian("Somata", 10, true, true, true, false, 256, 0.5);
const crabushi = new Loomian("Crabushi", 1, true, true, true, false, 256, 0.5,);
const skampi = new Loomian("Skampi", 1, true, true, true, false, 256, 0.5,);
const singeel = new Loomian("Singeel", 1, true, true, true, false, 256, 0.5,);

//Non-Rallyable Event Loomians
const christmasGlassScorbs = new Loomian("Christmas Scorbs (Normal)", 12, true, false, false, false, 256, 0.5);
const jellyGumpod = new Loomian("Jelly Gumpod (2022 Sweet Retreat)", 50, true, false, false, false, 256, 0.5);
const lunarBunpuff = new Loomian("Lunar New Year Bunpuff (2023 Chinese New Year)", 60, true, false, false, false, 256, 0.5);
const colouredGoppies = new Loomian("Coloured Goppies (2023 Loomunity)", 60, true, false, false, false, 256, 0.5);
const valentinesAntsee = new Loomian("Valentines Antsee (2023 Valentines)", 80, true, false, false, false, 256, 0.5);
const bronzeGeklow = new Loomian("Bronze Geklow (2020 Anniversary)", 100, true, false, false, false, 256, 0.5);
const bronzeCopling = new Loomian("Bronze Copling (2023 Anniversary)", 100, true, false, false, false, 256, 0.5);
const sweetsPhancub = new Loomian("Sweets Phancub (2022 Sweet Retreat)", 100, true, false, false, false, 256, 0.5);
const snowmanTotemochi = new Loomian("Snowman Totemochi (2022 Christmas)", 150, true, false, false, false, 256, 0.5);
const cakeSlugling = new Loomian("Cake Slugling (2022 Sweet Retreat)", 200, true , false, false, false, 256, 0.5);
const silverGeklow = new Loomian("Silver Geklow (2020 Anniversary)", 250, true, false, false, false, 256, 0.5);
const silverCopling = new Loomian("Silver Copling (2023 Anniversary)", true, false, false, false, 256, 0.5);
const halloweenSlugling = new Loomian("Halloween Slugling (2019 Halloween)", 300, true, false, false, false, 256, 0.5);
const christmasGlassScorb = new Loomian("Glass Scorb (2022 Christmas)", 372, true, false, false, false, 256, 0.5);
const halloweenTaoshi = new Loomian("Halloween Taoshi (2022 Halloween)", 450, true, false, false, false, 256, 0.5);
const halloweenTerriti = new Loomian("Halloween Territi (2022 Halloween)", 450, true, false, false, false, 256, 0.5);
const goldGeklow = new Loomian("Gold Geklow (2020 Anniversary)", 500, true, false, false, false, 256, 0.5);
const goldCopling = new Loomian("Gold Copling (2023 Anniversary)", 500, true, false, false, false, 256, 0.5);
const christmasPropae = new Loomian("Santa Propae (2021 Christmas)", 500, true, false, false, false, 256, 0.5);
const halloweenShawchi = new Loomian("Halloween SHawchi (2019 Halloween)", 500, true, false, false, false, 256, 0.5);
const Icigool2019 = new Loomian("Coloured Icigool (2019 Christmas)", 600, true, false, false, false, 256, 0.5);
const Icigool2020 = new Loomian("Coloured Icigool (2020 Christmas)", 600, true, false, false, false, 256, 0.5);
const Icigool2021 = new Loomian("Coloured Icigool (2021 Christmas and Beyond)", 600, true, false, false, false, 256, 0.5);
const christmasRagoon = new Loomian("Santa Ragoon (2019 Christmas)", 1000, true, false, false, false, 256, 0.5);
const rainbowShawchi = new Loomian("Rainbow Shawchi (2022 Loomunity)", 1000, true, false, false, false, 256, 0.5);
const rainbowFlorant = new Loomian("Rainbow Florant (2023 Loomunity)", 1000, true, false, false, false, 256, 0.5);
const emeraldGeklow = new Loomian("Emerald Geklow (2020 Anniversary)", 2000, true, false, false, false, 256, 0.5);
const emeraldCopling = new Loomian("Emerald Copling (2023 Anniversary)", 2000, true, false, false, false, 256, 0.5);
const rubyGeklow = new Loomian("Ruby Geklow (2020 Anniversary)", 5000, true, false, false, false, 256, 0.5);
const rubyCopling = new Loomian("Ruby Copling (2023 Anniversary)", 5000, true, false, false, false, 256, 0.5);
const normalKyeggo = new Loomian("Normal Kyeggo (2023 Easter)", (6*(100/37)), true, true, false, false, 256, 0.5);
const frillyKyeggo = new Loomian("Frilly Kyeggo (2023 Easter)", (6*(100/18.7)), true, false, false, false, 256, 0.5);
const zzKyeggo = new Loomian("Zig-Zag Kyeggo (2023 Easter)", (6*(100/8.7)), true, false, false, false, 256, 0.5);
const starKyeggo = new Loomian("Star Kyeggo (2023 Easter)", (6*(100/6)), true, false, false, false, 256, 0.5);
const fabergeKyeggo = new Loomian("Faberge Kyeggo (2023 Easter)", (6*(100/0.33)), true, false, false, false, 256, 0.5);
const sapphireGeklow = new Loomian("Sapphire Geklow (2020 Anniversary)", 10000, true, false, false, false, 256, 0.5);
const sapphireCopling = new Loomian("Sapphire Copling (2023 Anniversary)", 10000, true, false, false, false, 256, 0.5);
const mirrami = new Loomian("Mirrami (2023 Halloween)", 50, true, true, false, false, 256, 0.5)
const halloweenCryocub = new Loomian("Halloween Cryocub (2023 Halloween)", 200, true, false, false, false, 256, 0.5)
const halloweenMistlebud = new Loomian("Halloween Mistlebud (2023 Halloween)", 50, true, false, false, false, 256, 0.5)
// collate all objects into an array

var commonLoomianData = [
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
]

var eventLoomianData = [
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
  Icigool2019,
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
  halloweenCryocub,
  halloweenMistlebud
]

var selectionList = []

const eventSelectBox = document.getElementById("eventSelect");
const loomianSelectBox = document.getElementById("mySelect");

let oddsDisplayButton = document.getElementById("displayOdds");
let calculateButton = document.getElementById("calculate");
let abilityCharmID = document.getElementById("AbilityCharm"); 
let abilityLeaderID = document.getElementById("AbilityLeader");
let saResult = document.getElementById("SAResult");
let weatherResult = document.getElementById("Weather");
let rallyResult = document.getElementById("RallyResult");

//Load 2nd select box based on 1st box selection
eventSelectBox.addEventListener("change", function() {
    switch (this.value) {
      case "Common Loomians":
        //for every item in the 2nd select box, remove it
        for (let i = loomianSelectBox.options.length - 1; i >= 0; i--) {
          loomianSelectBox.remove(i);
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
          option.value = Loomian.name; // Set the value to the object's name
          option.text = `${Loomian.name}`; // Set the label to a combination of name and option1
          let selectElement = document.getElementById("mySelect")
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
        for (let i = loomianSelectBox.options.length - 1; i >= 0; i--) {
          loomianSelectBox.remove(i);
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
loomianSelectBox.addEventListener("change", function updateLabels() {
  let selectedName = document.getElementById("mySelect").value;
  let selectedLoomian = selectionList.find(loomian => loomian.name === selectedName);

  if (selectedLoomian) {
  selectedLoomian.isPetrolith()
  selectedLoomian.isRally()
  selectedLoomian.isWeather()
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
  let selectedName = document.getElementById("mySelect").value;
  let selectedLoomian = selectionList.find(loomian => loomian.name === selectedName);
  let wildOdds = selectedLoomian.saOdds * selectedLoomian.odds
  let rallyOdds = selectedLoomian.saOdds
  let weatherOdds = selectedLoomian.saOdds * selectedLoomian.odds

  //console.log(wildOdds)
 
  //console.log(selectedLoomian.name) 

  //Check if the Loomian is a Petrolith and if the Charm has been selected
  switch (true) {
    case abilityCharmID.checked && selectedLoomian.isPetrolith():
      wildOdds *= (selectedLoomian.abilityCharm*0.5)
      break;
    case abilityCharmID.checked && !selectedLoomian.isPetrolith():
      //console.log("WildOdds Unchanged");
      break;
    case !abilityCharmID.checked && selectedLoomian.isPetrolith():
      //console.log("WildOdds Unchanged");
      break;   
    case !abilityCharmID.checked && !selectedLoomian.isPetrolith():
      //console.log("WildOdds Unchanged");
      break;
    default:
      //console.log("WildOdds Error");
  }

  //Assign wild odds to label
  saResult.innerHTML = "Wild: " + "<br> 1 in " + wildOdds.toFixed(2)

  //Check if the Loomian is Rallyable anc if the Charm has been selected
  switch (true) {
    case abilityCharmID.checked && selectedLoomian.isRally():
      rallyOdds *= selectedLoomian.abilityCharm;
      break;
    case !abilityCharmID.checked && selectedLoomian.isRally():
    case abilityCharmID.checked && !selectedLoomian.isRally():
    case !abilityCharmID.checked && !selectedLoomian.isRally():
      //console.log("RallyOdds Unchanged");
      break;
    default:
      //console.log("RallyOdds Error");
  }

  //Check if SA Leader has been checked
  if (abilityLeaderID.checked) {
    rallyOdds *= 0.25
  } else if (!abilityLeaderID.checked) {
    //console.log("SA Leader not Checked")
  } else {
    //console.log("SA Leader Error")
  }

  if (selectedLoomian == variM) {
    rallyOdds *= 5
  } else if (selectedLoomian == variF) {
    rallyOdds *= 1.25
  } else {
    rallyOdds
  }

  //Assign Rally Odds to Label
  rallyResult.innerHTML = "Rally Ranch: " + "<br> 1 in " + rallyOdds.toFixed(2)

  //Check if Loomian can act strangely and if Charm is checked
  switch (true) {
    case selectedLoomian.isWeather() && abilityCharmID.checked:
      weatherOdds *= (selectedLoomian.abilityCharm * 0.5) * 0.5;
      //console.log("option 1")
      break;
    case selectedLoomian.isWeather() && !abilityCharmID.checked:
      weatherOdds *= 0.5;
      //console.log("option 2")
      break;
    case !selectedLoomian.isWeather() && abilityCharmID.checked:
      weatherOdds = 0;
      //console.log("option 3")
      break;
    case !selectedLoomian.isWeather() && !abilityCharmID.checked:
      //console.log("WeatherOdds Unchanged");
      //console.log("option 4")
      break;
    default:
      //console.log("Weather Error");
  }

  //console.log(weatherOdds)

  //Assign Weather Odds to Label
  weatherResult.innerHTML = "Weather: " + "<br> 1 in " + weatherOdds.toFixed(2)
}

