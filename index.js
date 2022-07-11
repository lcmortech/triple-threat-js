//Originally refactored from Python

//Imports
import cardDeck from 'deck.js'

//Globals

let myDeck = {}
let compDeck = {}
let myTurn = random.sample(list(hand), 3)
let compTurn = random.sample(list(hand), 3)
let deckContainer = document.querySelector('#deckContainer')
let scoreBox = document.querySelector('#scoreBox')