class Roaming {
    constructor(name, odds, isAlpha, isGamma, rW, SetEncounter, alphaOdds, gammaOdds, gcharm, gboost, rcharm, rboost, roamingtable){
        this.name = name; //string
        this.odds = odds; //float
        this.isAlpha = isAlpha; //boolean
        this.isGamma = isGamma; //boolean
        this.rW = rW; //boolean
        this.SetEncounter = SetEncounter; //boolean
        this.alphaOdds = alphaOdds; //float
        this.gammaOdds = gammaOdds; //float
        this.gcharm = gcharm; //float
        this.gboost = gboost; //float
        this.rcharm = rcharm; //float
        this.rboost = rboost; //float
        this.roamingtable = roamingtable; //boolean
    }
    
    getOdds(selectedName) {
			// Convert the selectedName to lowercase to make the lookup case-insensitive
			const lowercaseSelectedName = selectedName.toLowerCase();
			// Check if the selectedName matches the Loomian's name
			if (this.name.toLowerCase() === lowercaseSelectedName) {
				return this.odds;
			} else {
				// Return null or any other value to indicate Loomian not found
				console.log("getOdds Error");
			}
    }

    gammaAvailable(element1, element2) {
			if (!this.isGamma) {
				element1.style.display = "none";
				element2.style.display = "none";
			} else if (this.isGamma) {
				element1.style.display = "block";
				element2.style.display = "block";
			} else {
				console.log("gammaAvailable Error");
			}
    }
}

const duskit = new Roaming("Duskit", 1024, true, true, true, false, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const ikazune = new Roaming("Ikazune", 1024, true, true, true, false, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const protogon = new Roaming("Protogon", 1024, true, true, true, false, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const mutagon = new Roaming("Mutagon", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const cephalops = new Roaming("Cephalops", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const elephage = new Roaming("Elephage/Phagenaut", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const dakuda = new Roaming("Dakuda", 1024, true, true, true, false, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const arceros = new Roaming("Arceros", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const glacadia = new Roaming("Glacadia", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const metronette = new Roaming("Metronette", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const wabalisc = new Roaming("Wabalisc", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const nevermare = new Roaming("Nevermare", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const akhalos = new Roaming("Akhalos", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const gargolem = new Roaming("Gargolem", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const celesting = new Roaming("Celesting", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, true);
const hwDuskit = new Roaming("Skeleton Duskit (2020 Halloween", 2048, true, false, false, false, 4096, 0, 0.5, 0.0625, 0.5, 0.25, false);
const xmasIkazune = new Roaming("Reindeer Ikazune (2020 Christmas", 2048, true, true, true, false, 2048, 10240, 0.5, 0.0625, 0.5, 0.25, false);
const hwIkazune = new Roaming("Skeleton Ikazune (2021 Halloween)", 3072, true, false, false, false, 4096, 0, 0.5, 0.0625, 0.5, 0.25, false);
const hwProtogon = new Roaming("Withered Protogon (2021 Halloween)", 6144, true, true, true, false, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, false);
const xmasMutagon = new Roaming("Gem Mutagon (2021 Christmas)", 1024, true, true, true, false, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, false);
const hwCephalops = new Roaming("Skeleton Cephalops (2022 Halloween)", 1024, true, false, false, false, 2048, 0, 0.5, 0.0625, 0.5, 0.25, false);
const xmasMetronette = new Roaming("Nutcracker Metronette (2022 Christmas)", 1024, true, true, true, false, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, false);
const odoyama = new Roaming("Odoyama (2023 Haunted Village)", 1024, true, true, true, true, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, false)
const hwAkhalos = new Roaming("Skeleton Akhalos (2023 Haunted Village)", 1024, true, false, false, false, 4096, 0, 0.5, 0.0625, 0.5, 0.25, false)
const hwWabalisc = new Roaming("Zombie Wabalisc (2023 Haunted Village", 4096, true, true, true, false, 4096, 20480, 0.5, 0.0625, 0.5, 0.25, false)

const optionData = [
    duskit,
    ikazune,
    protogon,
    mutagon,
    cephalops,
    elephage,
	dakuda,
	arceros,
	glacadia,
    metronette,
    wabalisc,
    nevermare,
    akhalos,
    gargolem,
    celesting,
    hwDuskit,
    xmasIkazune,
    hwIkazune,
    hwProtogon,
    xmasMutagon,
    hwCephalops,
    xmasMetronette,
	odoyama,
	hwAkhalos,
	hwWabalisc
]

// Declaring Variables
const selectBox = document.getElementById("mySelect");
const setEncounterCB = document.getElementById("SetEncounterBox");
const roamingAmount = document.getElementById("RoamingAmount");

const gCharmBox = document.getElementById("GleamingCharmBox");
const gBoostBox = document.getElementById("GleamingBoostBox");
const RCharmBox = document.getElementById("RoamingCharmBox");
const RBoostBox = document.getElementById("RoamingBoostBox");

const displayOddsButton = document.getElementById("displayOdds");
const calculateButton = document.getElementById("calculate");

const oddsDescription = document.getElementById("odds");

const roamingResult = document.getElementById("RoamingResult");

const alphaResult = document.getElementById("AlphaResult");
const gammaResult = document.getElementById("GammaResult");
const rwResult = document.getElementById("RWResult");

// Generate all Select Options
for (let Loomian of optionData) {
    let option = document.createElement('option');
    option.value = Loomian.name; // Set the value to the object's name
    option.text = `${Loomian.name}`; // Set the label to a combination of name and option1
    selectBox.appendChild(option);
}

// Enable the Calculator and Accomodate for loomian properties
selectBox.addEventListener("change", function() {
    updateLabels(selectBox)
});

function updateLabels(arg1) {
    let selectedName = arg1.value;
    let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);

    setEncounterCB.checked = false;
    gammaResult.style.display = "block";
    rwResult.style.display = "block";

    if (selectedLoomian.SetEncounter || selectedLoomian.roamingtable) {
			setEncounterCB.disabled = !selectedLoomian.SetEncounter;
			roamingResult.style.display = "block";
    } else {
			setEncounterCB.disabled = true;
			roamingResult.style.display = "none";
    }
    
    if (selectedLoomian) {
			selectedLoomian.gammaAvailable(gammaResult, rwResult)
			calculateButton.disabled = false;
			displayOddsButton.disabled = false;
			RCharmBox.disabled = false;
			RBoostBox.disabled = false;
    }
}
// Display the Odds of the Loomian select when Button is clicked

displayOddsButton.addEventListener('click', function() {
    displayOdds(oddsDescription, selectBox);
})

function displayOdds(arg1, arg2) {
    let selectedName = arg2.value;
    let selectedLoomian = optionData.find(loomian => loomian.name === selectedName);

    if (selectedLoomian) {
        arg1.innerHTML = "1 in " + selectedLoomian.odds.toFixed(2);
    }
}

// Set Encounter enabled = Roaming Charm and Boost disabled
setEncounterCB.addEventListener('change', function() {
    if (this.checked) {
        RCharmBox.checked = false;
        RBoostBox.checked = false;
        RCharmBox.disabled = true;
        RBoostBox.disabled = true;
        gammaResult.style.display = 'none';
        rwResult.style.display = 'none';
    } else if (!this.checked){
        RCharmBox.checked = false;
        RBoostBox.checked = false;
        RCharmBox.disabled = false;
        RBoostBox.disabled = false;
        gammaResult.style.display = 'block';
        rwResult.style.display = 'block';
    } else {
        return null
    }
})

calculateButton.addEventListener('click', function() {
    calculate(selectBox);
})

function calculate(arg1) {
	let selectedName = arg1.value;
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

	if (RCharmBox.checked) {
			subtotal *= selectedLoomian.rcharm;
	} else if (!RCharmBox.checked) {
			subtotal = subtotal;
	} else {
			console.log("rcharmbox error");
	}

	if (RBoostBox.checked) {
			subtotal *= selectedLoomian.rboost;
	} else if (!RBoostBox.checked) {
			console.log("Roaming Boost not checked");
	} else {
			console.log("rboostbox error");
	}

	roamingResult.innerHTML = "Roaming: " + "<br> 1 in " + subtotal.toFixed(2);
	
	// second check the gleaming chances
	if (gCharmBox.checked) {
			subtotal *= selectedLoomian.gcharm;
	} else if (!gCharmBox.checked) {
			subtotal = subtotal;
	} else {
			console.log("gcharmbox error");
	}

	if (gBoostBox.checked) {
			subtotal *= selectedLoomian.gboost;
	} else if (!gBoostBox.checked) {
			subtotal = subtotal;
	} else {
			console.log("gboostbox error");
	}

	subtotal *= selectedLoomian.alphaOdds;
	alphaResult.innerHTML = "Alpha: " + "<br> 1 in " + subtotal.toFixed(2);

	subtotal *= 5;
	gammaResult.innerHTML = "Gamma: " + "<br> 1 in " + subtotal.toFixed(2);

	subtotal *= 125;
	rwResult.innerHTML = "Rainbow Wisp: " + "<br> 1 in " + subtotal.toFixed(2);
}
