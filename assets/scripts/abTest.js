// Generate a random number between 0 and 1
const randomNumber = Math.random()
// Determine if the class should be applied
const shouldApplyClass = randomNumber < 0.5
// Get the body element
let body = document.querySelector('body')
// Apply or remove the "blue" class based on the random number
if (shouldApplyClass) {
    body.classList.add('blue')
}
