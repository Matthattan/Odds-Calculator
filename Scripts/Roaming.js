class Roaming {
    constructor(name, odds, isAlpha, isGamma, setEncounter, roamingtable){
        this.name = name; //string
        this.odds = odds; //float
        this.isAlpha = isAlpha; //boolean
        this.isGamma = isGamma; //boolean
        this.setEncounter = setEncounter; //boolean
        this.roamingtable = roamingtable; //boolean
    }
}

// name, odds, is alpha, is gamma, soft reset, roaming table
const duskit = new Roaming("Duskit", 1024, true, true, false, true);
const ikazune = new Roaming("Ikazune", 1024, true, true, false, true);
const protogon = new Roaming("Protogon", 1024, true, true, false, true);
const mutagon = new Roaming("Mutagon", 1024, true, true, true, true);
const metronette = new Roaming("Metronette (2020 Uhnne Fair)", 1024, true, true, true, false);
const hwDuskit = new Roaming("Skeleton Duskit (2020 Halloween)", 2048, true, false, false, false);
const cephalops = new Roaming("Cephalops", 1024, true, true, true, true);
const wabalisc = new Roaming("Wabalisc (2020 Jolly Village)", 1024, true, true, true, true);
const xmasIkazune = new Roaming("Reindeer Ikazune (2020 Christmas)", 2048, true, true, false, false);
const nevermare = new Roaming("Nevermare (2021 Uhnne Fair)", 1024, true, true, true, false);
const hwIkazune = new Roaming("Skeleton Ikazune (2021 Halloween)", 3072, true, false, false, false);
const hwProtogon = new Roaming("Withered Protogon (2021 Halloween)", 6144, true, true, false, false);
const akhalos = new Roaming("Akhalos (2021 Jolly Village)", 1024, true, true, true, true);
const xmasMutagon = new Roaming("Gem Mutagon (2021 Christmas)", 1024, true, true, false, false);
const elephage = new Roaming("Elephage/Phagenaut", 1024, true, true, true, true);
const gargolem = new Roaming("Gargolem (2022 Uhnne Fair)", 1024, true, true, true, false);
const hwCephalops = new Roaming("Skeleton Cephalops (2022 Halloween)", 1024, true, false, false, false);
const celesting = new Roaming("Celesting (2022 Jolly Village)", 1024, true, true, true, true);
const xmasMetronette = new Roaming("Nutcracker Metronette (2022 Jolly Village)", 1024, true, true, false, false);
const dakuda = new Roaming("Dakuda", 1024, true, true, false, true);
const arceros = new Roaming("Arceros", 1024, true, true, true, true);
const glacadia = new Roaming("Glacadia", 1024, true, true, true, true);
const odoyaga = new Roaming("Odoyaga (2023 Haunted Village)", 1024, true, true, true, false);
const hwAkhalos = new Roaming("Skeleton Akhalos (2023 Haunted Village)", 1024, true, false, false, false);
const hwWabalisc = new Roaming("Zombie Wabalisc (2023 Haunted Village)", 4096, true, true, false, false);
const mimask = new Roaming("Mimask (2023 Jolly Festival)", 1024, true, true, true, false);
const xmasNevermare = new Roaming("Reindeer Nevermare (2023 Jolly Festival)", 4096, true, true, false, false);

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
    xmasNevermare
]

// Declaring Elements
const selectBox = document.getElementById("mySelect");
const setEncounterCB = document.getElementById("SetEncounterBox");
const roamingAmount = document.getElementById("RoamingAmount");

const gCharmBox = document.getElementById("GleamingCharmBox");
const gBoostBox = document.getElementById("GleamingBoostBox");
const rCharmBox = document.getElementById("RoamingCharmBox");
const rBoostBox = document.getElementById("RoamingBoostBox");

const displayOddsButton = document.getElementById("displayOdds");
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
    selectBox.appendChild(option);
}

// Toggle gleaming outputs based on roaming property
selectBox.addEventListener("change", function() {
    let selectedName = this.value;
    let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);

    if (selectedLoomian) {
        calculateButton.disabled = false;
        displayOddsButton.disabled = false;
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
displayOddsButton.addEventListener('click', function() {
	let selectedName = selectBox.value;
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
	let selectedName = selectBox.value;
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

	// check if gleaming odds have been modified for selected Roaming
	switch (selectedName.value) {
		case "Reindeer Ikazune (2020 Christmas":
		case "Skeleton Cephalops (2022 Halloween)":
			gleamingOdds = 2048;
			break;
		default:
			gleamingOdds = 4096;
			break;
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