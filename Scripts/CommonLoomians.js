class Loomian {
    constructor(name, odds, alphaG, gammaG){
        this.name = name; //string
        this.odds = odds; //float
        this.alphaG = alphaG; //boolean
        this.gammaG = gammaG; //boolean
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

const goswing = new Loomian("Goswing", 10, true, true);
const cicalute = new Loomian("Cicalute", 8, true, true);
const nymvolt = new Loomian("Nymvolt", 64, true, true);
const skampi = new Loomian("Skampi", 1, true, true);
const singeel = new Loomian("Singeel", 1, true, true);
const crabushi = new Loomian("Crabushi", 1, true, true);
const polypi = new Loomian("Polypi", 10, true, true);
const somata = new Loomian("Somata", 10, true, true);
const teripod = new Loomian("Teripod", 20, true, true);
const dokan = new Loomian("Dokan", 20, true, true);
const fentern = new Loomian("Fentern", 20, true, true);
const ampole = new Loomian("Ampole", 1, true, true);
const antsee = new Loomian("Antsee", 10, true, true);
const babore = new Loomian("Babore", 1, true, true);
const boonary = new Loomian("Boonary", 1, true, true);
const bunpuff = new Loomian("Bunpuff", 50, true, true);
const burroach = new Loomian("Burroach", 1, true, true);
const cafnote = new Loomian("Cafnote (M/F)", 1, true, true);
const cathorn = new Loomian("Cathorn", 1, true, true);
const cavenish = new Loomian("Cavenish", 1, true, true);
const ceratot = new Loomian("Ceratot", 1, true, true);
const chompactor = new Loomian("Chompactor", 1, true, true);
const cinnaboo = new Loomian("Cinnaboo", 1, true, true);
const copling = new Loomian("Copling", 20/17, true, true);
const cosmiore = new Loomian("Cosmiore", 128, true, true);
const craytal = new Loomian("Craytal", 1, true, true);
const eventCraytal = new Loomian("Event Craytal", 1, true, true);
const cryocub = new Loomian("Cryocub", 40, true, true);
const cupoink = new Loomian("Cupoink", 10, true, true);
const dobo = new Loomian("Dobo", 1, true, true);
const dractus = new Loomian("Dractus", 100, true, true);
const dripple = new Loomian("Dripple", 1, true, true);
const eaglit = new Loomian("Eaglit", 1, true, true);
const embit = new Loomian("Embit", 1, true, true);
const fevine = new Loomian("Fevine", 1, true, true);
const florant = new Loomian("Florant", 1, true, true);
const geklow = new Loomian("Geklow", 1, true, true);
const gobbidemic = new Loomian("Gobbidemic", 100/3, true, true);
const goppie = new Loomian("Goppie", 1, true, true);
const grubby = new Loomian("Grubby", 1, true, true);
const gumpod = new Loomian("Gumpod", 10, true, true);
const gwurm = new Loomian("Gwurm", 3, true, true);
const hydrini = new Loomian("Hydrini", 64, true, true);
const igneol = new Loomian("Igneol", 50, true, true);
const impkin = new Loomian("Impkin", 2, true, true);
const kabunga = new Loomian("Kabunga", 1, true, true);
const kanki = new Loomian("Kanki", 12.5, true, true);
const kittone = new Loomian("Kittone", 1, true, true);
const kleptyke = new Loomian("Kleptyke", 1, true, true);
const kyogo = new Loomian("Kyogo", 1, true, true);
const llamba = new Loomian("Llamba", 60, true, true);
const lumica = new Loomian("Lumica", 1, true, true);
const makame = new Loomian("Makame", 31, true, true);
const mistlebud = new Loomian("Mistlebud", 15, true, true);
const mochibi = new Loomian("Mochibi", 3, true, true);
const operaptor = new Loomian("Operaptor", 50, true, true);
const phancub = new Loomian("Phancub", 10, true, true);
const pipsee = new Loomian("Pipsee", 64, true, true);
const poochrol = new Loomian("Poochrol", 10, true, true);
const pwuff = new Loomian("Pwuff", 1, true, true);
const pyder = new Loomian("Pyder", 10, true, true);
const pyke = new Loomian("Pyke", 1, true, true);
const pyramind = new Loomian("Pyramind", 300, true, true);
const rakrawla = new Loomian("Rakrawla", 1, true, true);
const scorb = new Loomian("Scorb", 1, true, true);
const sharpod = new Loomian("Sharpod", 20, true, true);
const shawchi = new Loomian("Shawchi", 25, true, true);
const sherbot = new Loomian("Sherbot", 17, true, true);
const skilava = new Loomian("Skilava", 1, true, true);
const slugling = new Loomian("Slugling", 1, true, true);
const smoal = new Loomian("Smoal", 64, true, true);
const snagull = new Loomian("Snagull", 1, true, true);
const snagullS = new Loomian("Snagull (Sandwich)", 35, true, true);
const snocub = new Loomian("Snocub", 1, true, true);
const snowl = new Loomian("Snowl", 45, true, true);
const spirivii = new Loomian("Spirivii", 40, true, true);
const swimp = new Loomian("Swimp", 10, true, true);
const swirelle = new Loomian("Swirelle (Raspberry/Blueberry/Lemon)", (10/3)*80, true, true);
const swirelleS = new Loomian("Swirelle (Strawberry)", 10*80, true, true);
const swishy = new Loomian("Swishy", 5, true, true);
const taoshi = new Loomian("Taoshi", 10, true, true);
const territi = new Loomian("Territi", 1, true, true);
const twilat = new Loomian("Twilat", 1, true, true);
const twittle = new Loomian("Twittle", 1, true, true);
const vambat = new Loomian("Vamabt", 1, true, true);
const variF = new Loomian("Vari (Female)", 125, true, true);
const variM = new Loomian("Vari (Male)", 500, true, true);
const volpup = new Loomian("Volpup", 40, true, true);
const weevolt = new Loomian("Weevolt", 1, true, true);
const whimpor = new Loomian("Whimpor", 10, true, true);
const whispup = new Loomian("Whispup", 1, true, true);
const wiledile = new Loomian("Wiledile", 23, true, true);
const wispur = new Loomian("Wispur", 64, true, true);
const zaleo = new Loomian("Zaleo", 1, true, true);
const kayute = new Loomian("Kayute", 67, true, true);
const leopaw = new Loomian("Leopaw", 20, true, true)
const mirrami = new Loomian("Mirrami", 50, true, true);
const eyebrella = new Loomian("Eyebrella", 1, true, true);
const lissen = new Loomian("Lissen", 1, true, true);
const lantot = new Loomian("Lantot", 1, true, true);
const milgoo = new Loomian("Milgoo", 1, true, true);
const nautling = new Loomian("Nautling", 1, true, true);
const yutiny = new Loomian("Yutiny", 1, true, true);
const yuteen = new Loomian("Yuteen", 1, true, true);
const morphezu = new Loomian("Morphezu", 1, true, true);
const behemoroth = new Loomian("Behemoroth", 1, true, true);
const leviatross = new Loomian("Leviatross", 1, true, true);

// name, odds, is alpha, is gamma

const loomianList = [
    nymvolt,
    nautling,
    yutiny,
    yuteen,
    morphezu,
    behemoroth,
    leviatross,
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
    zaleo,
    wispur,
    kayute,
    leopaw,
    mirrami,
    eyebrella,
    lissen,
    lantot,
    milgoo,
    goswing,
    cicalute
]

// sort Loomians alphabetically
optionData = loomianList.sort((a, b) => {
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

// defining html elements
const selectElement = document.getElementById("mySelect");
const alphaResult = document.getElementById("AlphaResult");
const gammaResult = document.getElementById("GammaResult");
const rwResult = document.getElementById("RWResult");
const gCharm = document.getElementById("GleamingCharm");
const gBoost = document.getElementById("GleamingBoost");
const oddsDisplayButton = document.getElementById("displayOdds");
const calculateButton = document.getElementById("calculate");

// defining all JS data

const gleamingOdds = 4096
    // alpha is 4/5 of this so 1/5120
    // gamma is 1/5 of this so 1/20480
    // rainbow wisp is 1/125 of the gamma odds so 1/2560000

// charm halves gleaming odds
const gCharmMultiplier = 0.5

// boost gleaming odds by 16 fold
const gBoostMultiplier = 0.0625

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
        subtotal *= gCharmMultiplier;
    }

    // check if the boost box is enabled, uses the object's own multiplier if so
    if (gBoost.checked){
        subtotal *= gBoostMultiplier;
    }

    let alphaTotal = subtotal * (gleamingOdds * (5/4));
    let gammaTotal = subtotal * (gleamingOdds * (5));
    let rwTotal = gammaTotal * (125);

    // attach results to HTML element
    alphaResult.innerHTML = "Alpha: " + "<br> 1 in " + alphaTotal.toFixed(2)
    gammaResult.innerHTML = "Gamma: " + "<br> 1 in " + gammaTotal.toFixed(2)
    rwResult.innerHTML = "Rainbow Wisp: " + "<br> 1 in " + rwTotal.toFixed(2)
}
