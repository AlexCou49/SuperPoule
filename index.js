
/*Get characters and map only name and picture*/
let characters = [];
fetch("http://easteregg.wildcodeschool.fr/api/characters")
  .then(response => response.json())
  .then(response => {
    characters = response.map((character, i) => {      
      return character = {image: character.image, name: character.name}
      })
      })
  .then(() => {
    img()
  })

/*Display characters in characters div*/
const img = () =>{
console.log(characters)
const listOfCharacters = document.getElementById("showCharacters")
for (let i = 0; i < 6; i++) {
  listOfCharacters.innerHTML += 
  `<div class="${i} h-5">
        <a hover="cursor:pointer"><img class="img-fluid col-2"
        style="max-height:100px; max-width:100px"src="${characters[i].image}">
        </a>
        <p>${characters[i].name}</p>
  </div>`;
  };
}





