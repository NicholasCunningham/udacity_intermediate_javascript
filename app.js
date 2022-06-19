// import Dinos from './dino.json' assert {type: 'json'};

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
        // TODO: Implement comparison between passed in human weight and this dinosaur's weight

        console.log('This function is not yet implemented.')
    },

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareHeight: function (humanHeight) {
        // TODO: Implement comparison between passed in human height and this dinosaur's height

        console.log('This function is not yet implemented.')
    },

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareDiet: function (humanDiet) {
        // TODO: Implement comparison between passed in human diet and this dinosaur's diet

        console.log('This function is not yet implemented.')
    }
}

// Generate Tiles for each Dino in Array
function createDinosaurTile(dinosaurInfo) {
    // TODO: Create a new grid element

    console.log('This function is not yet implemented.')
}

// Generate tile for human
function createHumanTile(humanInfo) {
    // TODO: Create a new grid element

    console.log('This function is not yet implemented.')
}

// Add tiles to DOM
function createGrid(dinosaurInfo, humanInfo) {
    // TODO: Create new fragment for appending to DOM

    // TODO: Append dinosaur tiles and human tile to grid

    console.log('This function is not yet implemented.')
}

// On button click, prepare and display infographic
function handleFormSubmission(event) {
    // TODO: Clear form from screen

    console.log('You clicked the button! Too bad this function isn\'t implemented yet.')
}

// Use IIFE to get human data from form
(function () {
    document.getElementById('btn').addEventListener('click', handleFormSubmission)
})()
