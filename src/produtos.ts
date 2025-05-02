// Criei um enum para a categoria de Produto.
enum Categoria {
  VESTUARIO = 'Vestuário',
  ELETRONICO = 'Eletrônico',
}

// Criei uma interface para Produto.
interface Produto {
  nome: string
  preco: number
  quantidade: number 
  categoria: Categoria
}

// Tipei a variável produtos como um array de Produto.
const produtos: Produto[] = []

// Tipei o parametro das funções adcionarProduto e filtrarPorCategoria.
function adicionarProduto(produto : Produto) {
  produtos.push(produto)
}

function listarProdutos() {
  return produtos
}

function calcularTotal() {
  return produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0)
}

function filtrarPorCategoria(categoria : Categoria) {
  return produtos.filter(p => p.categoria === categoria)
}

// Exportei a interface Produto e o enum Categoria.
export {
  produtos,
  adicionarProduto,
  listarProdutos,
  calcularTotal,
  filtrarPorCategoria,
  Categoria,
  Produto,
}
