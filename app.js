// Create Dino Constructor
function Dinosaur(dinosaur) {
    this.species = dinosaur.species,
        this.weight = dinosaur.weight,
        this.height = dinosaur.height,
        this.diet = dinosaur.diet,
        this.where = dinosaur.where,
        this.when = dinosaur.when,
        this.fact = dinosaur.fact
}


// Create prototype for dinosaur to avoid recreating functions with each instance
const dinosaurPrototype = {
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    compareWeight: function (humanWeight) {
        const weightComparison = (humanWeight / this.weight).toFixed(2)

        return `You weigh ${weightComparison} times as much as the ${this.species}.`
    },

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareHeight: function (humanHeight) {
        const heightComparison = (humanHeight / this.height).toFixed(2)

        return `You are ${heightComparison} times as tall as the ${this.species}.`
    },

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareDiet: function (humanDiet) {
        return this.diet === humanDiet ?
            `You have the same diet as ${this.species}.` :
            `${this.species} has a ${this.diet} but you have a ${humanDiet} diet.`
    }
}

Dinosaur.prototype = dinosaurPrototype


// Bring in dinosaur info via function to avoid globals
function populateDinosaurs() {
    return [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
}


// Create Dino Objects
function createDinosaurs() {
    const dinosaursArray = populateDinosaurs()
    let dinosaurs = []

    dinosaursArray.forEach(dinosaur => {
        dinosaurs.push(new Dinosaur(dinosaur))
    })

    return dinosaurs
}


// Create Human Object
function createHuman() {
    let heightFeet = document.querySelector('#feet').value
    let heightInches = document.querySelector('#inches').value
    let weight = document.querySelector('#weight').value
    let dietSelection = document.querySelector('#diet')
    let diet = dietSelection.options[dietSelection.selectedIndex].text

    return {
        feet: heightFeet,
        inches: heightInches,
        weight: weight,
        diet: diet
    }
}


// Generate tile for human
function createHumanTile(humanInfo) {
    const div = document.createElement('div')
    div.className = 'grid-item'
    div.innerHTML = `<h2>Human</h2>`

    const humanImage = document.createElement('img')
    humanImage.src = `images/human.png`
    div.append(humanImage)

    const randomFact = document.createElement('p')
    randomFact.innerText = `You are ${humanInfo.feet} feet and ${humanInfo.inches} inches tall!`
    div.append(randomFact)

    return div
}


// Generate Tiles for each Dino in Array
function createDinosaurTile(dinosaur) {
    const div = document.createElement('div')
    div.className = 'grid-item'
    div.innerHTML = `<h2>${dinosaur.species}</h2>`

    const dinosaurImage = document.createElement('img')
    dinosaurImage.src = `images/${dinosaur.species.toLowerCase()}.png`
    div.append(dinosaurImage)

    const randomFact = document.createElement('p')
    randomFact.innerText = `This ${dinosaur.species} weighs ${dinosaur.weight} pounds!`
    div.append(randomFact)

    return div
}


// Add tiles to DOM
function createGrid(dinosaurInfo, humanInfo) {
    // Create div for each dinosaur object
    dinosaurInfo.forEach(dinosaur => {
        const dinosaurTile = createDinosaurTile(dinosaur)
        document.querySelector('#grid').append(dinosaurTile)
    })
    //Create div for human object
    const humanTile = createHumanTile(humanInfo)
    document.querySelector('#grid').append(humanTile)
}


// On button click, prepare and display infographic
function handleFormSubmission(event) {
    // Hide form
    document.querySelector('form').style.display = 'none'

    // Populate grid
    testDinosaurs = createDinosaurs()
    testHuman = createHuman()
    createGrid(testDinosaurs, testHuman)
}


// IIFE to listen for form submission
(function () {
    document.querySelector('#btn').addEventListener('click', handleFormSubmission)
})()
