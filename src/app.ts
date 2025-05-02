// adição de Produto e Categoria ao import
import {
  adicionarProduto,
  listarProdutos,
  calcularTotal,
  filtrarPorCategoria,
  Categoria,
  Produto,
} from './produtos'

// Subistituindo as String de categoria pelo Enum Categoria
adicionarProduto({ nome: 'Notebook', preco: 3000, quantidade: 2, categoria: Categoria.ELETRONICO })
adicionarProduto({ nome: 'Camiseta', preco: 50, quantidade: 5, categoria: Categoria.VESTUARIO })
adicionarProduto({ nome: 'Fone de Ouvido', preco: 200, quantidade: 3, categoria: Categoria.ELETRONICO })

console.log('Todos os produtos:')
console.log(listarProdutos())

console.log('\nTotal em estoque:')
console.log(calcularTotal())

console.log('\nFiltrar por Eletrônicos:')
console.log(filtrarPorCategoria(Categoria.ELETRONICO))
