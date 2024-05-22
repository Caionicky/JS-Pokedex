const detailsList = document.getElementById('detailsList')

const urlParams = new URLSearchParams(window.location.search);
const pokemonJson = urlParams.get('pokemonJson');

const pokemon = JSON.parse(decodeURIComponent(pokemonJson));
console.log(pokemon.name)

// let statusValue = 4;
// let percentage = (statusValue / 100) * 100;

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
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${(pokemon.hp/255)*100}%"></div>
                    </div>
                <p>Attack: </p>
                <p>${pokemon.attack}</p>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${(pokemon.attack/190)*100}%"></div>
                    </div>
                <p>Defense: </p>
                <p>${pokemon.defense}</p>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${(pokemon.defense/250)*100}%"></div>
                    </div>
                <p>Sp. Atk: </p>
                <p>${pokemon.SPattack}</p>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${(pokemon.SPattack/194)*100}%"></div>
                    </div>
                <p>Sp. Def: </p>
                <p>${pokemon.SPdefense}</p>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${(pokemon.SPdefense/250)*100}%"></div>
                    </div>
                <p>Speed: </p>
                <p>${pokemon.speed}</p>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${(pokemon.speed/200)*100}%"></div>
                    </div>
            </div>
        </div>
    `
}

const newHtml = convertPokemonToLi(pokemon)
detailsList.innerHTML += newHtml

// const bar = document.getElementById('progressBarFill');
// bar.style.width = percentage + '%';