import { somaHorasExtras, calculaDescontos } from '../index.js';

describe('Testes folha de pagamento', () => {
  it('somaHorasExtras', () => {
    const esperado = 2500;
    const resultado = somaHorasExtras(2000, 500);

    expect(esperado).toBe(resultado);
  });

  it('calculaDescontos', () => {
    const esperado = 1000;
    const resultado = calculaDescontos(1500, 500);

    expect(esperado).toBe(resultado);
  });
});
