// Bring in dinosaur info via function to avoid globals
const dinosaurs = () => {
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

// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact) {
    this.species = species,
        this.weight = weight,
        this.height = height,
        this.diet = diet,
        this.where = where,
        this.when = when,
        this.fact = fact
}

// Create Dino Objects
function createDinosaurs() {
    // TODO: Implement construction of dino objects

    console.log('This function is not yet implemented.')
}

// Create Human Object
function createHuman() {
    // TODO: Implement construction of human object

    console.log('This function is not yet implemented.')
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

// Generate Tiles for each Dino in Array
function createDinosaurTile(dinosaurInfo) {
    const div = document.createElement('div')
    div.innerText = `${dinosaurInfo.species}`

    const dinosaurImage = document.createElement('img')
    dinosaurImage.src = `images/${dinosaurInfo.species.toLowerCase()}.png`
    div.append(dinosaurImage)

    return div
}

// Generate tile for human
function createHumanTile(humanInfo) {
    // TODO: Create a new grid element

    console.log('createHumanTile function is not yet implemented.')
}

// Add tiles to DOM
function createGrid(dinosaurInfo, humanInfo) {
    console.log('createGrid function is not yet implemented.')
}

// On button click, prepare and display infographic
function handleFormSubmission(event) {
    document.querySelector('form').style.display = 'none'

    console.log('You clicked the button! Too bad this function isn\'t implemented yet.')
}

// Use IIFE to get human data from form
(function () {
    document.querySelector('#btn').addEventListener('click', handleFormSubmission)
})()
