class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (this._saldo < valor) {
            return "Operação Negada";
        } else {
            this._saldo = this._saldo - valor;
            return "Seu saldo é: R$" + this._saldo;
        }
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return "Seu saldo é: R$" + this._saldo;
    }
}

class contaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "poupança";
    }
}
class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "universitaria";
    }


    sacar(valor) {
        if (this._saldo < valor || valor > 500) {
            return "Operação Negada";
        } else {
            this._saldo = this._saldo - valor;
            return "Seu saldo é: R$" + this._saldo;
        }
    }

    deopsitar(valor) {
        this._saldo = this._saldo + valor;
        return "Seu saldo é: R$" + this._saldo;
    }
}