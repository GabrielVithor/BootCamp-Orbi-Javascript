function testeErro(arr, num) {
    try {
        if (!arr || !num) throw new ReferenceError("Insira os parametros necessarios");
        if (typeof (arr) !== "object") throw new TypeError("O array precisa ser do tipo objeto");
        if (typeof (num) !== "number") throw new TypeError("O num precisa ser do tipo numero");
        if (arr.length !== num) throw new RangeError("O array deve ter tamanho inserido no parametro num");
        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message)
        }else{
            console.log("Ocorreu um erro desconhecido!");
            throw e;
        }
    }
}

console.log(testeErro([1,2],2));