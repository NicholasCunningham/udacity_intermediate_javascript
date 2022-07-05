/**
* @description Represents an individual dinosaur
* @constructor
* @param {Object} dinosaur - The object representation of a dinosaur, including
                             species, weight, height, diet, where it lived, when it
                             lived, and a fact about it
*/
function Dinosaur(dinosaur) {
    this.species = dinosaur.species,
        this.weight = dinosaur.weight,
        this.height = dinosaur.height,
        this.diet = dinosaur.diet,
        this.where = dinosaur.where,
        this.when = dinosaur.when,
        this.fact = dinosaur.fact
}


const dinosaurPrototype = {
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareWeight: function (humanWeight) {
        const weightComparison = ((humanWeight / this.weight) * 100).toFixed(1)

        return `You weigh ${weightComparison}% as much as the ${this.species}.`
    },

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareHeight: function (humanHeight) {
        const heightComparison = (humanHeight / this.height).toFixed(2)

        return `You are ${heightComparison}% as tall as the ${this.species}.`
    },

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareDiet: function (humanDiet) {
        return this.diet === humanDiet
            ? `You have the same diet as ${this.species} - you are both ${this.diet}s`
            : `${this.species} had a ${this.diet} diet but you have a ${humanDiet} diet.`
    }
}

Dinosaur.prototype = dinosaurPrototype


/**
* @description Adds two numbers
* @returns {Array<Object>} An array of eight plain objects representing dinosaurs,
                           for use in other functions 
*/
function populateDinosaurs() {
    return [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "Herbavore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "Carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "Herbavore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": 372,
            "diet": "Herbavore",
            "where": "North America",
            "when": "Late Jurassic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "Herbavore",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 separate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "Carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "Carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "Herbavore",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
}


/**
* @description Creates all of the required Dinosaur objects at once
* @returns {Array<Dinosaur>} An array of eight constructed dinosaur objects 
*/
function createDinosaurs() {
    const dinosaursArray = populateDinosaurs()
    let dinosaurs = []

    dinosaursArray.forEach(dinosaur => {
        dinosaurs.push(new Dinosaur(dinosaur))
    })

    return dinosaurs
}


/**
* @description Creates an object representing the human data collected 
               from user input on the form
* @returns {Object} An array of eight dinosaur objects for use in other functions 
*/
function createHuman() {
    let dietSelection = document.querySelector('#diet')

    return {
        name: document.querySelector('#name').value,
        feet: document.querySelector('#feet').value,
        inches: document.querySelector('#inches').value,
        weight: document.querySelector('#weight').value,
        diet: dietSelection.options[dietSelection.selectedIndex].text
    }
}


/**
* @description Creates a tile representing the human data for placement in the grid
* @param {Object} humanInfo - The object representation of a human
* @returns {Element} A div element containing the human's name and an image of a human
*/
function createHumanTile(humanInfo) {
    const div = document.createElement('div')
    div.className = 'grid-item'
    div.innerHTML = `<h2>${humanInfo.name}</h2>`

    const humanImage = document.createElement('img')
    humanImage.src = `images/human.png`
    div.append(humanImage)

    return div
}


/**
* @description Creates a tile representing the dinosaur data for placement in the grid
* @param {Object} dinosaur - The object representation of a dinosaur
* @returns {Element} A div element containing the dinosaur species' name, 
                     an image of the dinosaur, and a random fact about the dinosaur
*/
function createDinosaurTile(dinosaur) {
    const div = document.createElement('div')
    div.className = 'grid-item'
    div.innerHTML = `<h2>${dinosaur.species}</h2>`

    const dinosaurImage = document.createElement('img')
    dinosaurImage.src = `images/${dinosaur.species.toLowerCase()}.png`
    div.append(dinosaurImage)

    const randomFact = document.createElement('p')
    randomFact.innerText = (dinosaur.species === 'Pigeon')
        ? `All birds are dinosaurs`
        : produceRandomFact(dinosaur)
    div.append(randomFact)

    return div
}

/**
* @description Produces one of six random facts relating to the given dinosaur
* @param {Object} dinosaur - The object representation of a dinosaur
* @returns {string} A random fact, potentially comparing the human and dinosaur
*/
function produceRandomFact(dinosaur) {
    human = createHuman()
    factNumber = Math.floor(Math.random() * 6)

    switch (factNumber) {
        case 0:
            return dinosaur.compareWeight(human.weight)
        case 1:
            return dinosaur.compareHeight((human.feet * 12) + human.inches)
        case 2:
            return dinosaur.compareDiet(human.diet)
        case 3:
            return dinosaur.fact
        case 4:
            return `Lived during the ${dinosaur.when} period`
        case 5:
            return `Could be found in ${dinosaur.where}`
        default:
            break
    }
}


/**
* @description Creates a grid using the 8 dinosaur tiles and the human tile
* @param {Object} dinosaurInfo - The object representation of a dinosaur
* @param {Object} humanInfo - The object representation of a human
*/
function createGrid(dinosaurInfo, humanInfo) {
    //Create div for human object
    const humanTile = createHumanTile(humanInfo)
    grid = document.querySelector('#grid')

    // Create div for each dinosaur object
    dinosaurInfo.forEach(dinosaur => {
        const dinosaurTile = createDinosaurTile(dinosaur)
        grid.append(dinosaurTile)
    })

    // Insert human tile in correct position
    grid.insertBefore(humanTile, grid.children[4])
}


/**
* @description Handles the removal of the form and display of the grid on form submission
*/
function handleFormSubmission() {
    // Hide form
    document.querySelector('form').style.display = 'none'

    // Populate grid
    testDinosaurs = createDinosaurs()
    testHuman = createHuman()
    createGrid(testDinosaurs, testHuman)
}


/**
* @description IIFE to add event listener for form submission
*/
(function () {
    document.querySelector('#btn').addEventListener('click', handleFormSubmission)
})()
