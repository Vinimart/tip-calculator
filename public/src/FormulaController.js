class FormulaController {

    constructor() {

        this.getConta()
        this.getTip()
        this.getPessoas()
    }

    getConta() {
        
        this.inputConta = document.getElementById('idConta').value
        return this.inputConta
    }

    getTip() {

        this.inputTip = document.getElementById('idTip').value
        return this.inputTip
    }

    getPessoas() {

        this.inputPessoas = document.getElementById('idPessoas').value
        return this.inputPessoas
    }

    setProps() {

        let formula = new FormulaModel(
            this.getConta(),
            this.getTip(),
            this.getPessoas()
        )

        return formula.resultado()
    }
}
