const alunos = [{nome:'Joao',nota:5,turma:"16"},{nome:'Sofia',nota:9,turma:"16"},{nome:'Paulo',nota:6,turma:"16"},{nome:'Gabriel',nota:4,turma:"16"}]

function alunosAprovados(array,media = 5){
    let aprovados = [];

    for(let i = 0; i < array.length;i++){

        const {nota,nome} = array[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}  

console.log(alunosAprovados(alunos,6))