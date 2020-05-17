class FormulaController {
  constructor() {
    this.getConta();
    this.getTip();
    this.getPessoas();
  }

  getConta() {
    this.inputConta = document.getElementById('idConta').value;
    return this.inputConta;
  }

  getTip() {
    this.inputTip = document.getElementById('idTip').value;
    return this.inputTip;
  }

  getPessoas() {
    this.inputPessoas = document.getElementById('idPessoas').value;
    return this.inputPessoas;
  }

  setModel() {
    this.formulaModel = new FormulaModel(
      this.getConta(),
      this.getTip(),
      this.getPessoas()
    );
    return this.formulaModel.resultado();
  }

  update() {
    this.formulaView = new FormulaView(document.getElementById('idCalcResult'));
    return this.formulaView.update(this.setModel());
  }
}
