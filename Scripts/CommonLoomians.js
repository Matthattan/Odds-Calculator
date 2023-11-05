class Loomian {
    constructor(name, odds, alphaG, gammaG, rW, alpha, gamma, gcharm, gboost){
        this.name = name; //string
        this.odds = odds; //float
        this.alphaG = alphaG; //boolean
        this.gammaG = gammaG; //boolean
        this.rW = rW; //boolean
        this.alpha = alpha; //float
        this.gamma = gamma; //float
        this.gcharm = gcharm; //float
        this.gboost = gboost; //float
    }
    
    getOdds(selectedName) {
        // Convert the selectedName to lowercase to make the lookup case-insensitive
        const lowercaseSelectedName = selectedName.toLowerCase();
        // Check if the selectedName matches the Loomian's name
        if (this.name.toLowerCase() === lowercaseSelectedName) {
            return this.odds;
        } else {
          // Return null or any other value to indicate Loomian not found
          return null;
        }
    }
};

const skampi = new Loomian("Skampi", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const singeel = new Loomian("Singeel", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const crabushi = new Loomian("Crabushi", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const polypi = new Loomian("Polypi", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const somata = new Loomian("Somata", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const teripod = new Loomian("Teripod", 20, true, true, true, 4096, 20480, 0.5, 0.0625);
const dokan = new Loomian("Dokan", 20, true, true, true, 4096, 20480, 0.5, 0.0625);
const fentern = new Loomian("Fentern", 20, true, true, true, 4096, 20480, 0.5, 0.0625);
const ampole = new Loomian("Ampole", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const antsee = new Loomian("Antsee", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const babore = new Loomian("Babore", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const boonary = new Loomian("Boonary", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const bunpuff = new Loomian("Bunpuff", 50, true, true, true, 4096, 20480, 0.5, 0.0625);
const burroach = new Loomian("Burroach", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const cafnote = new Loomian("Cafnote (M/F)", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const cathorn = new Loomian("Cathorn", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const cavenish = new Loomian("Cavenish", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const ceratot = new Loomian("Ceratot", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const chompactor = new Loomian("Chompactor", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const cinnaboo = new Loomian("Cinnaboo", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const copling = new Loomian("Copling", 20/17, true, true, true, 4096, 20480, 0.5, 0.0625);
const cosmiore = new Loomian("Cosmiore", 128, true, true, true, 2048, 10240, 0.5, 0.0625);
const craytal = new Loomian("Craytal", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const eventCraytal = new Loomian("Event Craytal", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const cryocub = new Loomian("Cryocub", 40, true, true, true, 4096, 20480, 0.5, 0.0625);
const cupoink = new Loomian("Cupoink", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const dobo = new Loomian("Dobo", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const dractus = new Loomian("Dractus", 100, true, true, true, 4096, 20480, 0.5, 0.0625);
const dripple = new Loomian("Dripple", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const eaglit = new Loomian("Eaglit", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const embit = new Loomian("Embit", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const fevine = new Loomian("Fevine", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const florant = new Loomian("Florant", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const geklow = new Loomian("Geklow", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const gobbidemic = new Loomian("Gobbidemic", 100/3, true, true, true, 4096, 20480, 0.5, 0.0625);
const goppie = new Loomian("Goppie", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const grubby = new Loomian("Grubby", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const gumpod = new Loomian("Gumpod", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const gwurm = new Loomian("Gwurm", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const hydrini = new Loomian("Hydrini", 64, true, true, true, 4096, 20480, 0.5, 0.0625);
const igneol = new Loomian("Igneol", 50, true, true, true, 4096, 20480, 0.5, 0.0625);
const impkin = new Loomian("Impkin", 2, true, true, true, 4096, 20480, 0.5, 0.0625);
const kabunga = new Loomian("Kabunga", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const kanki = new Loomian("Kanki", 12.5, true, true, true, 4096, 20480, 0.5, 0.0625);
const kittone = new Loomian("Kittone", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const kleptyke = new Loomian("Kleptyke", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const kyogo = new Loomian("Kyogo", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const llamba = new Loomian("Llamba", 60, true, true, true, 4096, 20480, 0.5, 0.0625);
const lumica = new Loomian("Lumica", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const makame = new Loomian("Makame", 31, true, true, true, 4096, 20480, 0.5, 0.0625);
const mistlebud = new Loomian("Mistlebud", 15, true, true, true, 4096, 20480, 0.5, 0.0625);
const mochibi = new Loomian("Mochibi", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const nymaurae = new Loomian("Nymaurae", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const operaptor = new Loomian("Operaptor", 50, true, true, true, 4096, 20480, 0.5, 0.0625);
const phancub = new Loomian("Phancub", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const pipsee = new Loomian("Pipsee", 64, true, true, true, 4096, 20480, 0.5, 0.0625);
const poochrol = new Loomian("Poochrol", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const pwuff = new Loomian("Pwuff", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const pyder = new Loomian("Pyder", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const pyke = new Loomian("Pyke", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const pyramind = new Loomian("Pyramind", 300, true, true, true, 4096, 20480, 0.5, 0.0625);
const rakrawla = new Loomian("Rakrawla", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const scorb = new Loomian("Scorb", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const sharpod = new Loomian("Sharpod", 20, true, true, true, 4096, 20480, 0.5, 0.0625);
const shawchi = new Loomian("Shawchi", 25, true, true, true, 4096, 20480, 0.5, 0.0625);
const sherbot = new Loomian("Sherbot", 17, true, true, true, 4096, 20480, 0.5, 0.0625);
const skilava = new Loomian("Skilava", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const slugling = new Loomian("Slugling", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const smoal = new Loomian("Smoal", 64, true, true, true, 4096, 20480, 0.5, 0.0625);
const snagull = new Loomian("Snagull", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const snagullS = new Loomian("Snagull (Sandwich)", 35, true, true, true, 4096, 20480, 0.5, 0.0625);
const snocub = new Loomian("Snocub", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const snowl = new Loomian("Snowl", 45, true, true, true, 4096, 20480, 0.5, 0.0625);
const spirivii = new Loomian("Spirivii", 40, true, true, true, 4096, 20480, 0.5, 0.0625);
const swimp = new Loomian("Swimp", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const swirelle = new Loomian("Swirelle (Raspberry/Blueberry/Lemon)", (10/3)*80, true, true, true, 4096, 20480, 0.5, 0.0625);
const swirelleS = new Loomian("Swirelle (Strawberry)", 10*80, true, true, true, 4096, 20480, 0.5, 0.0625);
const swishy = new Loomian("Swishy", 5, true, true, true, 4096, 20480, 0.5, 0.0625);
const taoshi = new Loomian("Taoshi", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const territi = new Loomian("Territi", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const twilat = new Loomian("Twilat", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const twittle = new Loomian("Twittle", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const vambat = new Loomian("vamabt", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const variF = new Loomian("Vari (Female)", 125, true, true, true, 4096, 20480, 0.5, 0.0625);
const variM = new Loomian("Vari (Male)", 500, true, true, true, 4096, 20480, 0.5, 0.0625);
const volpup = new Loomian("Volpup", 40, true, true, true, 4096, 20480, 0.5, 0.0625);
const weevolt = new Loomian("Weevolt", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const whimpor = new Loomian("Whimpor", 10, true, true, true, 4096, 20480, 0.5, 0.0625);
const whispup = new Loomian("Whispup", 1, true, true, true, 4096, 20480, 0.5, 0.0625);
const wiledile = new Loomian("Wiledile", 23, true, true, true, 4096, 20480, 0.5, 0.0625);
const wispur = new Loomian("Wispur", 64, true, true, true, 4096, 20480, 0.5, 0.0625);
const zaleo = new Loomian("Zaleo", 1, true, true, true, 4096, 20480, 0.5, 0.0625);

const optionData = [
    ampole,
    antsee,
    babore,
    boonary,
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
    impkin,
    kabunga,
    kanki,
    kittone,
    kleptyke,
    kyogo,
    llamba,
    lumica,
    makame,
    mistlebud,
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
    spirivii,
    swimp,
    swirelle,
    swirelleS,
    swishy,
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
    wispur,
    zaleo,
]

// defining Variables
let selectElement = document.getElementById("mySelect");
let alphaResult = document.getElementById("AlphaResult");
let gammaResult = document.getElementById("GammaResult");
let rwResult = document.getElementById("RWResult");
let gCharm = document.getElementById("GleamingCharm");
let gBoost = document.getElementById("GleamingBoost");
let oddsDisplayButton = document.getElementById("displayOdds");
let calculateButton = document.getElementById("calculate")
;
//load all loomians into select element
for (let Loomian of optionData) {
    let option = document.createElement('option');
    option.value = Loomian.name; // Set the value to the object's name
    option.text = `${Loomian.name}`; // Set the label to a combination of name and option1
    let selectElement = document.getElementById("mySelect")
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
        calculateButton.disabled = false;
        oddsDisplayButton.disabled = false;
    }
});

// the actual calculations
function calculate() {
    let selectedName = document.getElementById("mySelect").value;
    let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);
	let subtotal = selectedLoomian.odds;

    // check if the charm box is enabled, uses the object's own multiplier if so
    if (gCharm.checked){
        subtotal *= selectedLoomian.gcharm ;
    } else {
        subtotal = subtotal;
    }

    // check if the boost box is enabled, uses the object's own multiplier if so
    if (gBoost.checked){
        subtotal *= selectedLoomian.gboost;
    } else {
        subtotal = subtotal;
    }

    let alphaTotal = subtotal*selectedLoomian.alpha;
    let gammaTotal = subtotal*selectedLoomian.gamma;
    let rwTotal = gammaTotal*125;

    // attach results to HTML element
    alphaResult.innerHTML = "Alpha: " + "<br> 1 in " + alphaTotal.toFixed(2)
    gammaResult.innerHTML = "Gamma: " + "<br> 1 in " + gammaTotal.toFixed(2)
    rwResult.innerHTML = "Rainbow Wisp: " + "<br> 1 in " + rwTotal.toFixed(2)
}