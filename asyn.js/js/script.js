const BASE_URL = "https://pokeapi.co/api/v2/pokemon-form/";
const CAT_BTN =document.getElementById('change-pokemon');


const getPokemon = async()=>{
    try{
        const data = await fetch(BASE_URL+Math.floor(Math.random()*200));
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
        const CAT_IMG = document.getElementById("pokemon");
        CAT_IMG.src = await getPokemon();
    }catch(e){
        console.log("Error on loadImg");
        console.log(e.message)
    }
   
}
loadImg();
CAT_BTN.addEventListener('click',loadImg);

