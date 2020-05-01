class FormulaModel {

    constructor(conta, tip, pessoas) {

        this._conta = conta
        this._tip = tip
        this._pessoas = pessoas
    }

    

    operacao() {

        this._resultado = (this._conta * this._tip) / this._pessoas
        return this._resultado.toFixed(2)
    }

    resultado() {

        return `R$ ${this.operacao()}`
    }
}