function somarArray(arr) {
    return arr.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    })
}

const lista = [{
        name: "arroz",
        value: 15
    },
    {
        name: "feijao",
        value: 10
    }, {
        name: "macarrao",
        value:3
    }, {
        name: "açucar",
        value: 4
    }
]

const saldo = 50;

function calculaSaldo(saldoDisp,lista){
        return lista.reduce(function(prev,cur){
            return prev - cur.value;
        },saldoDisp)
    }
    


const nums = [1, 2, 3, 4, 5];

console.log("Ex1 ->"+somarArray(nums));
console.log("Ex2 ->"+calculaSaldo(saldo,lista));
