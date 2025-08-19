const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('id');

async function getCharacterDetails() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
  const character = await response.json();

  const detailDiv = document.getElementById('detail');
  detailDiv.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}"/>
    <p><strong>Espécie:</strong> ${character.species}</p>
    <p><strong>Gênero:</strong> ${character.gender}</p>
    <p><strong>Mundo/Dimensão:</strong> ${character.location.name}</p>
    <p><strong>Status:</strong> ${character.status}</p>
  `;
}

getCharacterDetails();