import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes da classe Carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens).toHaveLength(0);
    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.frete).toBeNull();
    expect(carrinho.total).toBeNull();
  });

  it('Deve ter a propriedade "total"', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  })

  it('Deve conter itens apos adicionar ao carrinho', () => {
    const item1 = new Item('Abacate', 1.5, 3);
    const item2 = new Item('Banana', 2.3, 6);

    const carrinho = new Carrinho();

    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    expect(carrinho.itens).toContain(item1);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve lancar erro ao tentar finalizar compra com carrinho vazio', () => {
    const carrinho = new Carrinho();
    expect(() => { carrinho.finalizarCompra(); }).toThrowError('O carrinho está vazio');
  });

  it('Deve calcular frete corretamente', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);
    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar a compra com sucesso', () => {
    const carrinho = new Carrinho();
    const item1 = new Item('Maca', 1, 5);
    const item2 = new Item('Uva', 0.5, 10);

    carrinho.adiciona(item1);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizarCompra()).toStrictEqual({
      subtotal: 10,
      frete: 10,
      total: 20,
    });
  });

  it('Deve calcular total compra', () => {
    const carrinho = new Carrinho();
    const item1 = new Item('Maca', 1, 5);
    const item2 = new Item('Uva', 0.5, 10);

    carrinho.adiciona(item1);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.calculaTotal()).toBe(20);
  });
});
