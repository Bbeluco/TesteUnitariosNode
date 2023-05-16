import Item from '../item.js';

describe('Testes da classe itens', () => {
  it('Deve conter 3 campos: nome, valor e quantidade', () => {
    const item = new Item('Beterraba', 2, 10);

    expect(item.nome).toBe('Beterraba');
    expect(item.valor).toBe(2);
    expect(item.quantidade).toBe(10);
  });

  it('Deve ter o preco calculado de acordo com a quantidade', () => {
    const item = new Item('Beterraba', 0.3, 3);

    expect(item.pegaValorTotalItem()).toBeCloseTo(0.9);
  })
});
