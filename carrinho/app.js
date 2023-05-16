// eslint-disable-next-line import/extensions
import Carrinho from './carrinho.js';
// eslint-disable-next-line import/extensions
import Item from './item.js';

const carrinho = new Carrinho();

carrinho.adiciona(new Item('Beterraba', 2, 5));
carrinho.adiciona(new Item('Banana', 1.4, 5));
carrinho.adiciona(new Item('Melancia', 2, 1));
carrinho.adiciona(new Item('Uva', 4.3, 2));
carrinho.adiciona(new Item('Açaí', 3, 5));

console.log(carrinho.finalizarCompra());
