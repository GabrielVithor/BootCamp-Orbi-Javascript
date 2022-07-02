function comparaNumeros(num1,num2){
    const primeiraFrase = criarPrimeiraFrase(num1,num2);
    const segundaFrase = criarSegundaFrase(num1,num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criarPrimeiraFrase(num1,num2){
    let saoIguais ="";
    if(num1 !== num2){
        saoIguais = "não";
    }
    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais`;
}

function criarSegundaFrase(num1,num2){
   const soma = num1 + num2;
   const compara10 = soma >10;
   const compara20 = soma >20;
    let menor10 = 'menor';
    let menor20 = 'menor';

   if(compara10)
    menor10 = 'maior';

   if(compara20)
   menor20 = 'maior';

   return `Sua soma é ${menor10} que 10 e ${menor20} que 20`
}

console.log(comparaNumeros(2,10));