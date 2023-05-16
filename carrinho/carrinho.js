class Carrinho {
  constructor() {
    this.itens = [];
    this.subtotal = null;
    this.frete = null;
    this.total = null;
  }

  adiciona(novoItem) {
    this.itens.push(novoItem);
  }

  adicionaFrete(frete) {
    this.frete = frete;
  }

  calculaTotal() {
    this.subtotal = this.itens.reduce((acum, item) => acum + item.pegaValorTotalItem(), 0);
    return this.subtotal + this.frete;
  }

  finalizarCompra() {
    if (this.itens.length === 0) {
      throw new Error('O carrinho está vazio');
    }

    this.total = this.calculaTotal();

    return {
      subtotal: this.subtotal,
      frete: this.frete,
      total: this.total,
    };
  }
}

export default Carrinho;
