var Place = document.getElementById("LSID");
var AbilityCharm = document.getElementById("AbilityCharmID");
var SALeaderLB = document.getElementById("SALeaderLabel");
var SALeader = document.getElementById("SALeaderID");
var footnote = document.getElementById("footnote2");
var Result = document.getElementById("SAResult");
var LoomianList = document.getElementById("LoomianList")

SALeaderLB.style.display = "none";
footnote.style.display = "none";

// to check if the player needs the SA Charm/Leader
Place.addEventListener('change', function GiveCharm() {
    switch (this.value) {
        case "Encounter":
            AbilityCharm.checked = true;
            AbilityCharm.disabled = true;
            SALeader.checked = false;
            SALeaderLB.style.display = "none";
            footnote.style.display = "block";
            break;
        case "RallyRanch":
            AbilityCharm.checked = false;
            AbilityCharm.disabled = false;
            SALeader.checked = false;
            SALeaderLB.style.display = "inline";
            footnote.style.display = "none";
            break;
        case "Petrolith":
            AbilityCharm.checked = false;
            AbilityCharm.disabled = false;
            SALeader.checked = false;
            SALeaderLB.style.display = "none";
            footnote.style.display = "none";
        default:
            AbilityCharm.checked = false;
            AbilityCharm.disabled = false;
            SALeader.checked = false;
            SALeaderLB.style.display = "none";
            footnote.style.display = "none";
            break;
    }
})

const optionData = {
    'Encounter': [
      {label: 'Ampole', value: 'Ampole',},
      {label: 'Antsee', value: 'Antsee',},
      { label: 'Babore', value: 'Babore' },
      { label: 'Bunpuff', value: 'Bunpuff' },
      { label: 'Burroach', value: 'Burroach' },
      { label: 'Cafnote (Male & Female)', value: 'Cafnote' },
      { label: 'Cathorn', value: 'Cathorn' },
      { label: 'Cavenish', value: 'Cavenish' },
      { label: 'Chompactor', value: 'Chompactor' },
      { label: 'Cinnaboo', value: 'Cinnaboo' },
      { label: 'Copling', value: 'Copling' },
      { label: 'Cosmiore', value: 'Cosmiore' },
      { label: 'Craytal', value: 'Craytal' },
      { label: 'Winter Craytal', value: 'Event Craytal' },
      { label: 'Cryocub', value: 'Cryocub' },
      { label: 'Cupoink', value: 'Cupoink' },
      { label: 'Dractus', value: 'Dractus' },
      { label: 'Florant', value: 'Florant' },
      { label: 'Geklow', value: 'Geklow' },
      { label: 'Gobbidemic', value: 'Gobbidemic' },
      { label: 'Goppie', value: 'Goppie' },
      { label: 'Grubby', value: 'Grubby' },
      { label: 'Gumpod', value: 'Gumpod' },
      { label: 'Gwurm', value: 'Gwurm' },
      { label: 'Hydrini', value: 'Hydrini' },
      { label: 'Icigool', value: 'Icigool' },
      { label: 'Igneol', value: 'Igneol' },
      { label: 'Impkin', value: 'Impkin' },
      { label: 'Kabunga', value: 'Kabunga' },
      { label: 'Kanki', value: 'Kanki' },
      { label: 'Kittone', value: 'Kittone' },
      { label: 'Kleptyke', value: 'Kleptyke' },
      { label: 'Lumica', value: 'Lumica' },
      { label: 'Makame', value: 'Makame' },
      { label: 'Mochibi', value: 'Mochibi' },
      { label: 'Nymaurae', value: 'Nymaurae' },
      { label: 'Operaptor', value: 'Operaptor' },
      { label: 'Phancub', value: 'Phancub' },
      { label: 'Pipsee', value: 'Pipsee' },
      { label: 'Poochrol', value: 'Poochrol' },
      { label: 'Pwuff', value: 'Pwuff' },
      { label: 'Pyramind', value: 'Pyramind' },
      { label: 'Rakrawla', value: 'Rakrawla' },
      { label: 'Scorb', value: 'Scorb' },
      { label: 'Sharpod', value: 'Sharpod' },
      { label: 'Shawchi', value: 'Shawchi' },
      { label: 'Sherbot', value: 'Sherbot' },
      { label: 'Skilava', value: 'Skilava' },
      { label: 'Slugling', value: 'Slugling' },
      { label: 'Smoal', value: 'Smoal' },
      { label: 'Snagull', value: 'Snagull' },
      { label: 'Snowl', value: 'Snowl' },
      { label: 'Swimp', value: 'Swimp' },
      { label: 'Taoshi', value: 'Taoshi' },
      { label: 'Territi', value: 'Territi' },
      { label: 'Twilat', value: 'Twilat' },
      { label: 'Twittle', value: 'Twittle' },
      { label: 'Whimpor', value: 'Whimpor' },
      { label: 'Whispup', value: 'Whispup' },
      { label: 'Wiledile', value: 'Wiledile' },
      { label: 'Wispur', value: 'Wispur' },
      { label: 'Vari', value: 'Vari' },
      { label: 'Volpup', value: 'Volpup' },
    ],
    'Petrolith': [
        { label: 'Ceratot', 
        value: 'Ceratot' },
        { label: 'Dobo', 
        value: 'Dobo' },
        { label: 'Koyogo', 
        value: 'Koyogo' },
        { label: 'Pyke', 
        value: 'Pyke' },
        { label: 'Zaleo', 
        value: 'Zaleo' }
    ],
    'RallyRanch': [
        {label: 'Ampole', value: 'Ampole',},
        {label: 'Antsee', value: 'Antsee',},
        { label: 'Babore', value: 'Babore' },
        { label: 'Bunpuff', value: 'Bunpuff' },
        { label: 'Burroach', value: 'Burroach' },
        { label: 'Cafnote (Male & Female)', value: 'Cafnote' },
        { label: 'Cathorn', value: 'Cathorn' },
        { label: 'Cavenish', value: 'Cavenish' },
        { label: 'Chompactor', value: 'Chompactor' },
        { label: 'Cinnaboo', value: 'Cinnaboo' },
        { label: 'Copling', value: 'Copling' },
        { label: 'Craytal', value: 'Craytal' },
        { label: 'Cryocub', value: 'Cryocub' },
        { label: 'Cupoink', value: 'Cupoink' },
        { label: 'Dractus', value: 'Dractus' },
        { label: 'Dripple', value: 'Dripple' },
        { label: 'Doreggo (Default)', value: 'Doreggo'},
        { label: 'Eaglit', value: 'Eaglit' },
        { label: 'Embit', value: 'Embit' },
        { label: 'Fevine', value: 'Fevine' },
        { label: 'Florant', value: 'Florant' },
        { label: 'Geklow', value: 'Geklow' },
        { label: 'Gobbidemic', value: 'Gobbidemic' },
        { label: 'Goppie', value: 'Goppie' },
        { label: 'Grubby', value: 'Grubby' },
        { label: 'Gumpod', value: 'Gumpod' },
        { label: 'Gwurm', value: 'Gwurm' },
        { label: 'Hydrini', value: 'Hydrini' },
        { label: 'Igneol', value: 'Igneol' },
        { label: 'Impkin', value: 'Impkin' },
        { label: 'Kabunga', value: 'Kabunga' },
        { label: 'Kanki', value: 'Kanki' },
        { label: 'Kittone', value: 'Kittone' },
        { label: 'Kleptyke', value: 'Kleptyke' },
        { label: 'Lumica', value: 'Lumica' },
        { label: 'Makame', value: 'Makame' },
        { label: 'Mochibi', value: 'Mochibi' },
        { label: 'Operaptor', value: 'Operaptor' },
        { label: 'Phancub', value: 'Phancub' },
        { label: 'Pipsee', value: 'Pipsee' },
        { label: 'Poochrol', value: 'Poochrol' },
        { label: 'Pwuff', value: 'Pwuff' },
        { label: 'Pyramind', value: 'Pyramind' },
        { label: 'Rakrawla', value: 'Rakrawla' },
        { label: 'Scorb', value: 'Scorb' },
        { label: 'Sharpod', value: 'Sharpod' },
        { label: 'Shawchi', value: 'Shawchi' },
        { label: 'Sherbot', value: 'Sherbot' },
        { label: 'Skilava', value: 'Skilava' },
        { label: 'Slugling', value: 'Slugling' },
        { label: 'Smoal', value: 'Smoal' },
        { label: 'Snagull', value: 'Snagull' },
        { label: 'Snocub', value: 'Snocub' },
        { label: 'Snowl', value: 'Snowl' },
        { label: 'Swimp', value: 'Swimp' },
        { label: 'Taoshi', value: 'Taoshi' },
        { label: 'Territi', value: 'Territi' },
        { label: 'Twilat', value: 'Twilat' },
        { label: 'Twittle', value: 'Twittle' },
        { label: 'Vambat', value: 'Vambat' },
        { label: 'Weevolt', value: 'Weevolt' },
        { label: 'Whimpor', value: 'Whimpor' },
        { label: 'Whispup', value: 'Whispup' },
        { label: 'Wiledile', value: 'Wiledile' },
        { label: 'Wispur', value: 'Wispur' },
        { label: 'Vari', value: 'Vari' },
        { label: 'Volpup', value: 'Volpup' },
      ],
      'Weather': [
        {label: 'Ampole', value: 'Ampole',},
        {label: 'Antsee', value: 'Antsee',},
        { label: 'Babore', value: 'Babore' },
        { label: 'Burroach', value: 'Burroach' },
        { label: 'Cafnote (Male & Female)', value: 'Cafnote' },
        { label: 'Cathorn', value: 'Cathorn' },
        { label: 'Cavenish', value: 'Cavenish' },
        { label: 'Chompactor', value: 'Chompactor' },
        { label: 'Copling', value: 'Copling' },
        { label: 'Craytal', value: 'Craytal' },
        { label: 'Florant', value: 'Florant' },
        { label: 'Geklow', value: 'Geklow' },
        { label: 'Gobbidemic', value: 'Gobbidemic' },
        { label: 'Goppie', value: 'Goppie' },
        { label: 'Grubby', value: 'Grubby' },
        { label: 'Gumpod', value: 'Gumpod' },
        { label: 'Igneol', value: 'Igneol' },
        { label: 'Kabunga', value: 'Kabunga' },
        { label: 'Kanki', value: 'Kanki' },
        { label: 'Kittone', value: 'Kittone' },
        { label: 'Kleptyke', value: 'Kleptyke' },
        { label: 'Lumica', value: 'Lumica' },
        { label: 'Makame', value: 'Makame' },
        { label: 'Operaptor', value: 'Operaptor' },
        { label: 'Phancub', value: 'Phancub' },
        { label: 'Poochrol', value: 'Poochrol' },
        { label: 'Pwuff', value: 'Pwuff' },
        { label: 'Rakrawla', value: 'Rakrawla' },
        { label: 'Scorb', value: 'Scorb' },
        { label: 'Sharpod', value: 'Sharpod' },
        { label: 'Shawchi', value: 'Shawchi' },
        { label: 'Sherbot', value: 'Sherbot' },
        { label: 'Skilava', value: 'Skilava' },
        { label: 'Slugling', value: 'Slugling' },
        { label: 'Snagull', value: 'Snagull' },
        { label: 'Swimp', value: 'Swimp' },
        { label: 'Taoshi', value: 'Taoshi' },
        { label: 'Twilat', value: 'Twilat' },
        { label: 'Twittle', value: 'Twittle' },
        { label: 'Whimpor', value: 'Whimpor' },
        { label: 'Whispup', value: 'Whispup' },
        { label: 'Wiledile', value: 'Wiledile' },
      ]
  };

  const firstList = document.querySelector('#LSID');
  const secondList = document.querySelector('#LoomianList');
  
  function removeOptions(selectElement) {
    for (let i = selectElement.options.length - 1; i >= 0; i--) {
      selectElement.remove(i);
    }
  }
  
  // Update the second `<select>` based on the first's selection.
  firstList.addEventListener('change', event => {
    const value = event.target.value;
    const options = optionData[value];
    removeOptions(secondList);
    for (const { label, value } of options) {
      const option = new Option(label, value);
      secondList.add(option);
    }
    var calculateButtons = document.getElementsByClassName('calculate-button');
for (var i = 0; i < calculateButtons.length; i++) {
  calculateButtons[i].disabled = false;
}

  });

function FindSARate() {
    var SAOdds = 256;
    var AbilityCharmMultiplier = 1/2;
    var SALeaderMultiplier = 1/4;

    switch (Place.value) {
        case "Encounter":
            if (AbilityCharm.checked) {
                SAOdds = 256;}
            break;
        case "RallyRanch":
            if (AbilityCharm.checked) {
                SAOdds *= AbilityCharmMultiplier}
            if (SALeader.checked){
                SAOdds *= SALeaderMultiplier}
            break;
        case "Petrolith":
            if (AbilityCharm.checked){
                SAOdds *= 1/4
            } else {
                SAOdds *= 1/2}
            break;
        case "Weather":
            if (AbilityCharm.checked) {
                SAOdds *= 1/8
            } else {
                SAOdds *= 1/2}
            break;
        default:
            SAOdds = 256;
            break;
    }
    Result.innerHTML = "1 in " + SAOdds.toFixed(2);

    var AbilityRate = SAOdds
    return AbilityRate
}

function CalculateOverallRate() {
    var abilityRate = FindSARate();
    var LoomianMultiplier = 1;
    var LoomianList = document.getElementById("LoomianList")

    switch (LoomianList.value) {
        case "Impkin":
            LoomianMultiplier = 2;
            break;
        case "Mochibi":
            LoomianMultiplier = 3;
            break;
        case "Shawchi":
        case "Antsee":
        case "Cupoink":
        case "Gumpod":
        case "Territi":
        case "Taoshi":
        case "Whimpor":
        case "Phancub":
        case "Kleptyke":
        case "Poochrol":
            LoomianMultiplier = 10;
            break;
        case "Copling":
            LoomianMultiplier = 20/17;
            break;
        case "Kanki":
            LoomianMultiplier = 12.5;
            break;
        case "Mistlebud":
            LoomianMultiplier = 15;
            break;
        case "Sharpod":
            LoomianMultiplier = 20;
            break;
        case "Wiledile":
            LoomianMultiplier = 23;
            break;
        case "Gobbidemic":
            LoomianMultiplier = 100/3;
            break;
        case "SnagullS":
            LoomianMultiplier = 35;
            break;
        case "Cryocub":
        case "Volpup":
        case "Spirivii":
            LoomianMultiplier = 40;
            break;
        case "Snowl":
            LoomianMultiplier = 45;
            break;
        case "Igneol":
        case "Bunpuff":
        case "Operaptor":
            LoomianMultiplier = 50;
            break;
        case "Icigool":
            LoomianMultiplier = 90;
            break;
        case "Pyramind":
            LoomianMultiplier = 300;
            break;
        case "Pipsee":
        case "Hydrini":
        case "Wispur":   
            LoomianMultiplier = 64;
            break;
        case "Swirelle":
            LoomianMultiplier = (10/3)*80;
            break;
        case "SwirelleS":
            LoomianMultiplier = 10*80;
            break;
        case "Dractus":
        case "Vari":
            LoomianMultiplier = 100;  
            break;   
        case "Cosmiore":
            LoomianMultiplier = 128;
            break;
        default:
            LoomianMultiplier = 1;
            break;
        }

        if (Place.value == "RallyRanch" || Place.value == "Petrolith") {
            LoomianMultiplier = 1;
        }
    
    var AbilityOdds = LoomianMultiplier*abilityRate;

    document.getElementById("TotalResult").innerHTML = "Overall SA Odds: 1 in " + AbilityOdds.toFixed(2);
    return[AbilityOdds];
}

function encrypt(event, AbilityOdds) {
    // Get a reference to the button that was clicked
    const clickedButton = event.target;
  
    // Check the ID of the clicked button using an if statement
    if (clickedButton.id === "AbilityEncrypt") {
      // Do something if the AlphaEncrypt button was clicked
      const AbilityEncrypted = window.btoa(AbilityOdds);
      window.alert("Copy to Compound Calculator: " + AbilityEncrypted);
    } else {
      // Do something else if a different button was clicked
      console.log("Unknown button clicked");
    }
}

// Call multiply() to get the values and pass them as arguments to encrypt()
  document.getElementById("AbilityEncrypt").addEventListener("click", function(event) {
    const [AbilityOdds] = CalculateOverallRate();
    encrypt(event, AbilityOdds);
});
