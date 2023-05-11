const somaHorasExtras = (salario, horasExtras) => salario + horasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${titulo} passou`);
  } else {
    console.error(`${titulo} nao passou`);
  }
};

teste('somaHorasExtras', 2500, somaHorasExtras(2000, 500));

teste('calculaDescontos', 1000, calculaDescontos(1500, 500));
