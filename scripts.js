// 1. url ✓
// 2. get elements from document
// 3. create function
// 4. eventListener
// 5. fetch()

const baseUrl = 'https://ghibliapi.herokuapp.com'
const filmsButton = document.getElementById('btn-films')
const peopleButton = document.getElementById('btn-people')
const locationsButton = document.getElementById('btn-locations')
const container = document.querySelector('container')

// let displayData = (json) => {
function displayData(json) {
  container.innerHTML = ''
  // do stuff here
  console.log(json)
  
  // films have titles
  // people have names
  // locations have names
  // put information in the elements
  // films.innerText = json[0].title
  json.forEach(entity => {
    const potato = document.createElement('p') 
    // <p></p>
    potato.innerText = entity.title !== undefined ? entity.title : entity.name
    // <p>Title</p>
    // append it
    container.appendChild(potato) 
    // <container>...<p>Title</p></container>
  })

}

// function getInformation(buttonClicked) {
let getInformation = buttonClicked => {
  console.log(buttonClicked)
//     'https://ghibliapi.herokuapp.com' + '/' + 'films'
//     'https://ghibliapi.herokuapp.com/films'
  fetch(`${baseUrl}/${buttonClicked}`)
    .then(res => res.json())
    .then(json => displayData(json))

    // drill into the object
    // create elements on document
    // append them
}



filmsButton.addEventListener(
  'click', 
  () => getInformation('films')
)

peopleButton.addEventListener(
  'click', 
  () => getInformation('people')
)

locationsButton.addEventListener(
  'click', 
  () => getInformation('locations')
)

