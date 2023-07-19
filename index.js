// function doSomethingLater() {
//     console.log('I will happen later')
// }

// const { forEach } = require("lodash")

// console.log('Hello I am synchronous!')

// setTimeout(doSomethingLater, 200)

// console.log('Hello I am ALSO synchronous')

// console.log('Hello also synchronous')

// for (let i = 0; i < 20000; i++){
//     console.log(i)
// }

/* ----------------------- Making Fetch Happen ------------------------- */

// Get the dad jokes container
const dadJokesContainer = document.getElementById('dad-jokes-container')

const OPTIONS = {
    headers: {
        'Accept': 'application/json'
    }
}

// Adds a new joke
// function addJoke(jokeObject) {
    
// }
function fetchJokeArray() {
    fetch(`http://localhost:3000/jokes/`, OPTIONS)
    .then(response => response.json())
    .then(jokeArray => {
        console.log(jokeArray.length)
        return(jokeArray.length)
    })
}
const arrayLength = fetchJokeArray()
let jokeNumber = 1

// WE WANT JSON
// JavaScript Object Notation
// Function to fetch a new dad joke from server, and uses addJoke to add it to the joke container
function fetchNewJoke() {
    if (jokeNumber >= arrayLength) {
        jokeNumber = 0
        console.log(jokeNumber)
    }
    console.log(arrayLength)
    console.log(jokeNumber)
    fetch(`http://localhost:3000/jokes/${jokeNumber}`, OPTIONS)
    .then(response => response.json())
    .then(joke => { 
        console.log(joke)
        const newJoke = document.createElement('p')
        newJoke.className = 'dad-joke'
        newJoke.textContent = joke.content
        dadJokesContainer.append(newJoke)
    })
    jokeNumber++ 
}

// Adds first dad joke upon loading new page
fetchNewJoke()

// Adds a new dad joke when button is clicked
const newJokeButton = document.getElementById('new-joke-button').addEventListener('click', (event) => {
    console.log(event)
    fetchNewJoke(fetchJokeArray())
})

// Removes a dad joke upon click using the class of dad-joke
dadJokesContainer.addEventListener('click', (event) => {
    const cla = event.target.className
    if (cla === 'dad-joke') {
        event.target.remove()
    }
})