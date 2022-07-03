function calculeIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade : 30
}

const pessoa2 = {
    nome :"Gabriel",
    idade: 12,
}

const animal = {
    nome : "Bart",
    idade: 5
}

//console.log(calculeIdade.call(pessoa2,10));
console.log(calculeIdade.apply(pessoa2,[10]));