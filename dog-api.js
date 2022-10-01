// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming are stuffs you have to wait for, the rest like rps are regular script

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// stuff you have to wait for
const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
  dogImageDiv.innerHTML = `<img src='${json.message}' width=300 height=300/>`
})


}

dogButton.onclick = () => getNewDog()