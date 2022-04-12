const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const POKEMON_BTN =document.getElementById('change-pokemon');

const Pokemon = async() =>{
    const data = await fetch(BASE_URL);
    const json = await data.json();
    return json.count
}

const getPokemon = async()=>{
    try{
        const count = parseInt(await Pokemon());
        let value = Math.floor(Math.random()*count);

        //Verificação de id : necessario pois os ids desta api não segue uma ordem crescente perfeita
        while(value > 898 && value < 1000){
            value = Math.floor(Math.random()*count);
        }
        if(value >= 1001){
            value = value +9000;
        }

        const data = await fetch(BASE_URL+value);
        const json = await data.json();
        return json.sprites.front_default;
    }
    catch(e){
        console.log("Error on pokemon");
        console.log(e.message)
    }
}


const loadImg = async()=>{
    try{
        const POKEMON_IMG = document.getElementById("pokemon");
        POKEMON_IMG.src = await getPokemon();
    }catch(e){
        console.log("Error on loadImg");
        console.log(e.message)
    }
   
}
loadImg();
POKEMON_BTN.addEventListener('click',loadImg);

