
import { useState } from 'react'

const produtos = [
  { id: 1, nome: 'Fone Bluetooth', preco: 89.90, emoji: '🎧' },
  { id: 2, nome: 'Teclado Gamer', preco: 149.90, emoji: '⌨️' },
  { id: 3, nome: 'Mouse Gamer', preco: 79.90, emoji: '🖱️' },
  { id: 4, nome: 'Monitor', preco: 599.90, emoji: '🖥️' },
]

function App() {
  const [carrinho, setCarrinho] = useState([])
  const [adicionado, setAdicionado] = useState(null)

  const [nome, setNome] = useState('')
  const [erroNome, setErroNome] = useState(false)
  const [finalizado, setFinalizado] = useState(false)

  function adicionarProduto(produto) {
    setCarrinho([...carrinho, produto])
    setAdicionado(produto.id)

    setTimeout(() => {
      setAdicionado(null)
    }, 1000)
  }

  function removerProduto(indice) {
    setCarrinho(carrinho.filter((_, index) => index !== indice))
  }

  const total = carrinho.reduce(
    (soma, produto) => soma + produto.preco,
    0
  )
  function finalizarCompra(e) {
  e.preventDefault()

  if (!nome.trim()) {
    setErroNome(true)
    setFinalizado(false)
    return
  }

  setErroNome(false)
  setFinalizado(true)
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Minha Loja 🛍️
      </h1>

      <h2 className="text-2xl font-bold mb-4">Produtos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {produtos.map((produto) => (
          <div key={produto.id} className="bg-white p-6 rounded-xl shadow">
            <div className="text-5xl mb-3">{produto.emoji}</div>

            <h3 className="text-xl font-bold">{produto.nome}</h3>

            <p className="text-blue-600 font-bold my-3">
              R$ {produto.preco.toFixed(2)}
            </p>

            <button
              onClick={() => adicionarProduto(produto)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              {adicionado === produto.id ? 'Adicionado! ✓' : 'Adicionar ao carrinho'}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-10">
        <h2 className="text-2xl font-bold mb-4">
          🛒 Meu Carrinho ({carrinho.length})
        </h2>

        {carrinho.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((produto, index) => (
            <div key={index} className="flex justify-between items-center border-b py-3">
              <span>{produto.emoji} {produto.nome}</span>

              <div className="flex items-center gap-3">
                <span>R$ {produto.preco.toFixed(2)}</span>

                <button
                  onClick={() => removerProduto(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}

        <h3 className="text-xl font-bold text-green-600 mt-5">
          Total: R$ {total.toFixed(2)}
        </h3>
      </div>

<div className="bg-white p-6 rounded-xl shadow mt-8">
  <h2 className="text-2xl font-bold mb-5">
    Finalizar Compra
  </h2>

  <form onSubmit={finalizarCompra}>
    <label className="block font-semibold mb-2">
      Nome completo
    </label>

    <input
      type="text"
      value={nome}
      onChange={(e) => {
        setNome(e.target.value)
        setErroNome(false)
        setFinalizado(false)
      }}
      placeholder="Digite seu nome"
      className={`w-full p-3 border rounded-lg outline-none ${
        erroNome
          ? 'border-red-500'
          : 'border-gray-300'
      }`}
    />

    {erroNome && (
      <p className="text-red-500 text-sm mt-2">
        Por favor, informe seu nome.
      </p>
    )}

    <button
      type="submit"
      className="bg-green-600 text-white px-6 py-3 rounded-lg mt-5 hover:bg-green-700"
    >
      Finalizar compra
    </button>

    {finalizado && (
      <p className="text-green-600 font-bold mt-4">
        Compra finalizada com sucesso!
      </p>
    )}
  </form>
</div>

    </div>
  )
}

export default App
