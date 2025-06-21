class Roaming {
    constructor(name, odds, isAlpha, isGamma, setEncounter, roamingtable, doubledGleaming){
        this.name = name; //string
        this.odds = odds; //float
        this.isAlpha = isAlpha; //boolean
        this.isGamma = isGamma; //boolean
        this.setEncounter = setEncounter; //boolean
        this.roamingtable = roamingtable; //boolean
        this.doubledGleaming = doubledGleaming; // boolean
    }

    isDoubledGleam(){
        return this.doubledGleaming;
    }
}

// name, odds, is alpha, is gamma, soft reset, roaming table, doubled gleaming
const duskit = new Roaming("Duskit", 1024, true, true, false, true, false);
const ikazune = new Roaming("Ikazune", 1024, true, true, false, true, false);
const protogon = new Roaming("Protogon", 1024, true, true, false, true, false);
const mutagon = new Roaming("Mutagon", 1024, true, true, true, true, false);
const metronette = new Roaming("Metronette (2020 Uhnne Fair)", 1024, true, true, true, false, false);
const hwDuskit = new Roaming("Skeleton Duskit (2020 Haloine's Nightmare)", 2048, true, false, false, false, false);
const cephalops = new Roaming("Cephalops", 1024, true, true, true, true, false);
const wabalisc = new Roaming("Wabalisc (2020 Jolly Village)", 1024, true, true, true, true, false);
const xmasIkazune = new Roaming("Reindeer Ikazune (2020 Jolly Village)", 2048, true, true, false, false, true);
const nevermare = new Roaming("Nevermare (2021 Uhnne Fair)", 1024, true, true, true, false, false);
const hwIkazune = new Roaming("Skeleton Ikazune (2021 Uhnne Fair)", 3072, true, false, false, false, false);
const hwProtogon = new Roaming("Withered Protogon (2021 Uhnne Fair)", 6144, true, true, false, false, false);
const akhalos = new Roaming("Akhalos (2021 Jolly Village)", 1024, true, true, true, true, false);
const xmasMutagon = new Roaming("Gem Mutagon (2021 Jolly Village)", 1024, true, true, false, false, false);
const elephage = new Roaming("Elephage/Phagenaut", 1024, true, true, true, true, false);
const gargolem = new Roaming("Gargolem (2022 Uhnne Fair)", 1024, true, true, true, false);
const hwCephalops = new Roaming("Skeleton Cephalops (2022 Uhnne Fair)", 1024, true, false, false, false, false, true);
const celesting = new Roaming("Celesting (2022 Jolly Village)", 1024, true, true, true, true, false, false);
const xmasMetronette = new Roaming("Nutcracker Metronette (2022 Jolly Village)", 1024, true, true, false, false, false);
const dakuda = new Roaming("Dakuda", 1024, true, true, false, true, false);
const arceros = new Roaming("Arceros", 1024, true, true, true, true, false);
const glacadia = new Roaming("Glacadia", 1024, true, true, true, true, false);
const odoyaga = new Roaming("Odoyaga (2023 Haunted Village)", 1024, true, true, true, false, false);
const hwAkhalos = new Roaming("Skeleton Akhalos (2023 Haunted Village)", 1024, true, false, false, false, false);
const hwWabalisc = new Roaming("Zombie Wabalisc (2023 Haunted Village)", 4096, true, true, false, false, false);
const mimask = new Roaming("Mimask (2023 Jolly Festival)", 1024, true, true, true, false, false);
const xmasNevermare = new Roaming("Reindeer Nevermare (2023 Jolly Festival)", 4096, true, true, false, false, false);
const xmasGargolems = new Roaming("Christmas Gargolem Forms (2023 Jolly Festival)", 1024, true, true, false, false, true);
const cosmeleon = new Roaming("Cosmeleon", 1024, true, true, false, false, false); 
const loomunityWabalisc = new Roaming("Surfer Wabalisc (2024 Loomunity)", 1024, true, true, false, false, false);
const plushieDuskit = new Roaming("Plushie Duskit (2024 Anniversary)", 1024, true, true, false, false, false);
const hwDakuda = new Roaming("Skeleton Dakuda (2024 Trick Retreat)", 1024, true, false, false, false, true);
const hwElephage = new Roaming("Pumpkin Elepehage (2024 Trick Retreat)", 2048, true, true, false, false, false);
const grimyuline = new Roaming("Grimyuline (2024 Jolly Village)", 1024, true, true, false);
const toyProtogn = new Roaming("Toy Protogon (2024 Jolly Village)", 1024, true, false, false, false, true); // don't know if its actually part of the main table. Gonna set it to false anyways
const santaDuskit = new Roaming("Santa Duskit (2024 Jolly Village)", 2048, true, false, false, false, false);
const holidayOdoyaga = new Roaming("Holiday Odoyaga (2024 Jolly Village)", 2048, true, true, false, false, false);
const rainbowGlacadia = new Roaming("Rainbow Glacadia (2025 Loomunity)", 10000, false, false, false, false, false);
const rainbowArceros = new Roaming("Rainbow Arceros (2025 Loomunity)", 10000, false, false, false, false, false);
const summerMimask = new Roaming("Summer Mimask (2025 Loomunity)", 4096, true, true, false, false, false, false);

const optionData = [
    duskit,
    ikazune,
    protogon,
    mutagon,
    metronette,
    hwDuskit,
    cephalops,
    wabalisc,
    xmasIkazune,
    nevermare,
    hwIkazune,
    hwProtogon,
    akhalos,
    xmasMutagon,
    elephage,
    gargolem,
    hwCephalops,
    celesting,
    xmasMetronette,
    dakuda,
	arceros,
	glacadia,
	odoyaga,
	hwAkhalos,
	hwWabalisc,
    mimask,
    xmasNevermare,
    xmasGargolems,
    cosmeleon,
    loomunityWabalisc,
    plushieDuskit,
    hwDakuda,
    hwElephage,
    grimyuline,
    toyProtogn,
    santaDuskit,
    holidayOdoyaga,
    rainbowArceros,
    rainbowGlacadia,
    summerMimask
]

// Declaring Elements
const selectElement = document.getElementById("mySelect");
const setEncounterCB = document.getElementById("SetEncounterBox");
const roamingAmount = document.getElementById("RoamingAmount");

const gCharmBox = document.getElementById("GleamingCharmBox");
const gBoostBox = document.getElementById("GleamingBoostBox");
const rCharmBox = document.getElementById("RoamingCharmBox");
const rBoostBox = document.getElementById("RoamingBoostBox");

const oddsDisplayButton = document.getElementById("displayOdds");
const calculateButton = document.getElementById("calculate");

const oddsDescription = document.getElementById("odds");
const roamingResult = document.getElementById("RoamingResult");
const alphaResult = document.getElementById("AlphaResult");
const gammaResult = document.getElementById("GammaResult");
const rwResult = document.getElementById("RWResult");

// Declaring Values
let gleamingOdds = 4096;
let gCharmMultiplier = 0.5;
let gBoostMultiplier = 0.0625;
let rCharmMultiplier = 0.5;
let rBoostMultiplier = 0.25;

// Generate all Select Options
for (let Loomian of optionData) {
    let option = document.createElement('option');
    option.value = Loomian.name; // Set the value to the object's name
    option.text = `${Loomian.name}`; // Set the label to a combination of name and option1
    selectElement.appendChild(option);
}

// Toggle gleaming outputs based on roaming property
selectElement.addEventListener("change", function() {
    let selectedName = this.value;
    let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);

    if (selectedLoomian) {
        calculateButton.disabled = false;
        oddsDisplayButton.disabled = false;
    }

    // check if Loomian is a set encounter
    // this should enable the set encounter button to be toggled
    if (selectedLoomian.setEncounter) {
        setEncounterCB.disabled = false;
    } else {
        setEncounterCB.disabled = true;
    }

    // set the CB to be unchecked by default
    setEncounterCB.checked = false;

    // check if loomian has a Alpha Form
    if (selectedLoomian.isAlpha) {
        alphaResult.style.display = 'block';
    } else {
        alphaResult.style.display = 'none';
    }

    // check if loomian has a Gamma Form
    if (selectedLoomian.isGamma) {
        gammaResult.style.display = 'block';
        rwResult.style.display = 'block';
    } else {
        gammaResult.style.display = 'none';
        rwResult.style.display = 'none';
    }
});

// Display the Odds of the Loomian select when Button is clicked
oddsDisplayButton.addEventListener('click', function() {
	let selectedName = selectElement.value;
    let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);

	// Output the raw roaming odds of the Loomian
    oddsDescription.innerHTML = "1 in " + selectedLoomian.odds.toFixed(2);
})

// Set Encounter enabled = Roaming Charm and Boost disabled
setEncounterCB.addEventListener('change', function() {
    if (this.checked) {
        rCharmBox.disabled = true;
        rBoostBox.disabled = true;
        gammaResult.style.display = 'none';
        rwResult.style.display = 'none';
    } else {
        rCharmBox.disabled = false;
        rBoostBox.disabled = false;
        gammaResult.style.display = 'block';
        rwResult.style.display = 'block';
    }

	// make sure the roaming boxes are set to unchecked ready to be toggled
	rCharmBox.checked = false;
	rBoostBox.checked = false;
})

// calculate gleaming and roaming odds
calculateButton.addEventListener('click', function() {
	let selectedName = selectElement.value;
	let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);
	let subtotal = 1;

	// first check if its a set encounter; roaming amount should be set to 1
	if (setEncounterCB.checked && !selectedLoomian.roamingtable) {
			console.log("Set Encounter subtotal unchanged");
	} else if (!setEncounterCB.checked  && !selectedLoomian.roamingtable) {
			subtotal *= selectedLoomian.odds;
	} else if (!setEncounterCB.checked  && selectedLoomian.roamingtable) {
			subtotal *= roamingAmount.value || 1;
			subtotal *= selectedLoomian.odds;
	} else if (setEncounterCB.checked && selectedLoomian.roamingtable) {
			subtotal = 1
	} else {  
			console.log("Set Encounter cant be found");
	}

    if (selectedLoomian.isDoubledGleam()){
        gleamingOdds = 2048;
    } else {
        gleamingOdds = 4096;
    }

	// check if Roaming multipliers have been checked
	if (rCharmBox.checked) {
			subtotal *= rCharmMultiplier;
	}

	if (rBoostBox.checked) {
			subtotal *= rBoostMultiplier;
	}

	roamingResult.innerHTML = "Roaming: " + "<br> 1 in " + subtotal.toFixed(2);
	
	// check if Gleaming multipliers have been checked
	if (gCharmBox.checked) {
			subtotal *= gCharmMultiplier;
	}

	if (gBoostBox.checked) {
			subtotal *= gBoostMultiplier;
	}

	// calculate odds with gleamingOdds
	alphaTotal = subtotal * (gleamingOdds * (5/4));
	gammaTotal = subtotal * (gleamingOdds * (5));
	rwTotal = gammaTotal * (125);

	// append all totals onto Elements
	alphaResult.innerHTML = "Alpha: " + "<br> 1 in " + alphaTotal.toFixed(2);
	gammaResult.innerHTML = "Gamma: " + "<br> 1 in " + gammaTotal.toFixed(2);
	rwResult.innerHTML = "Rainbow Wisp: " + "<br> 1 in " + rwTotal.toFixed(2);
})