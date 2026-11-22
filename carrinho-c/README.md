
# 🛒 Meu Carrinho de Compras

## Sobre o projeto

Aplicação interativa de uma loja virtual desenvolvida com React e Tailwind CSS.

O projeto permite visualizar produtos, adicionar e remover itens do carrinho, calcular o valor total e finalizar uma compra através de um formulário com validação.

## Tecnologias utilizadas

- React
- JavaScript
- Tailwind CSS
- Vite

## Funcionalidades

- Contador utilizando useState.
- Listagem de produtos.
- Adicionar produtos ao carrinho.
- Remover produtos do carrinho.
- Cálculo automático do total.
- Feedback visual ao adicionar produtos.
- Formulário de checkout.
- Validação do campo nome.

## Reflexão

**Por que não devemos mutar o estado diretamente e qual a importância do spread operator no React?**

Não devemos modificar o estado diretamente porque o React precisa identificar as alterações para atualizar a interface corretamente.

Quando utilizamos o spread operator (`...`), criamos um novo array contendo os elementos anteriores e o novo item.

Por exemplo:

`setCarrinho([...carrinho, produto])`

Assim, preservamos o array original e criamos uma nova referência, permitindo que o React identifique a mudança e atualize a tela.

## Como executar o projeto

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute com `npm run dev`.
4. Abra o endereço indicado no terminal.
