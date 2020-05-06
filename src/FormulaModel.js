class FormulaModel {
  constructor(conta, tip, pessoas) {
    this._conta = `${conta}`;
    this._tip = tip;
    this._pessoas = pessoas;
  }

  commaToDot() {
    this._conta = this._conta.replace(",", ".");

    return parseFloat(this._conta);
  }

  pessoasNotBlank() {
    this._pessoas = parseInt(this._pessoas);

    if (this._pessoas == 0) {
      return (this._pessoas = 1);
    } else {
      return this._pessoas;
    }
  }

  operacao() {
    this._resultado = (this.commaToDot() * this._tip) / this.pessoasNotBlank();

    if (this._resultado) {
      return `R$ ${this._resultado.toFixed(2).replace(".", ",")}`;
    } else {
      return "&nbsp";
    }
  }

  resultado() {
    return this.operacao();
  }
}
