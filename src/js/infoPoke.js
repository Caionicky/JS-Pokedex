const detailsList = document.getElementById('detailsList')

const urlParams = new URLSearchParams(window.location.search);
const pokemonJson = urlParams.get('pokemonJson');

const pokemon = JSON.parse(decodeURIComponent(pokemonJson));
console.log(pokemon.name)

convertPokemonToLi(pokemon)


function convertPokemonToLi(pokemon) {
    
    return `
        <div class="pokeInfo">
            <h1 class="name">${pokemon.name}</h1>
            <span class="number">#${pokemon.number}</span>
            <div class="image-area">
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>

            <span class="types">
                <ol>
                    ${pokemon.types.map((type) => `<li class="type"><img src="https://veekun.com/dex/media/types/en/${type}.png"></li>`).join('')}
                </ol>
                
            </span>
            <div class="detail"> 
                <p>HP:</p>
                <p>${pokemon.hp}</p>
                <p></p>
                <p>Attack: </p>
                <p>${pokemon.attack}</p>
                <p></p>
                <p>Defense: </p>
                <p>${pokemon.defense}</p>
                <p></p>
                <p>SP Attack: </p>
                <p>${pokemon.SPattack}</p>
                <p></p>
                <p>Sp Defense: </p>
                <p>${pokemon.SPdefense}</p>
                <p></p>
                <p>Speed: </p>
                <p>${pokemon.speed}</p>
                <p></p>
            </div>
        </div>
    `
}

const newHtml = convertPokemonToLi(pokemon)
detailsList.innerHTML += newHtml