//Originally refactored from Python

//Imports
import cardDeck from 'deck.js'

//Globals

let myDeck = {}
let compDeck = {}
//let myTurn = random.sample(list(hand), 3)
let myTurn = Math.random
//let compTurn = random.sample(list(hand), 3)
let deckContainer = document.querySelector('#deckContainer')
let scoreBox = document.querySelector('#scoreBox')

//add loops
let testConsole = document.querySelector('#testConsole')

//Actions (Functions)
let currHand = cardDeck.keys()
testConsole.textContent = 'test here'
console.log(currHand)

const playTurn = ()=> {
    return null
}
