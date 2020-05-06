class FormulaView {
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
            <span>
                ${model}
            </span>
        `;
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}
