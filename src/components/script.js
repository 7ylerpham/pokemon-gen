const url = 'https://pokeapi.co/api/v2/pokemon/'
const card = document.getElementsByClassName('card')
const btn = document.getElementsByClassName('btn')

let getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalURL = url + id;
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => generateCard(data));
}
