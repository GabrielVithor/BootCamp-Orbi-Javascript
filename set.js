const meuarray = [30,30,40,50,233,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; //argumento rest -> um array vazio e acrescenta todos os valores do Set no Array
}

console.log(valoresUnicos(meuarray));