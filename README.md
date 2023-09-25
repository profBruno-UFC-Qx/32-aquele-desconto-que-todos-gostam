# Descrição

Neste exercício, considere que você foi contratado para criar um sistema que calcula o total de desconto com base na categoria de itens comprados.

Objetivo desse exercício é praticar a manipulação de objetos em JavaScript. 

**Todas as alterações devem ser feitas nos arquivos já existentes**

* src/main.js -> quando for necessário alterar JavaScript

## Instruções:

1. Crie uma função chamada `calcularDesconto` que aceita um vetor chamado `compra` como argumento onde cada item no vetor é representado por um objeto com as seguintes propriedades:
   - nome: Nome do item (string).
   - valor: Valor do item (number).
   - categoria: Categoria do item (string).
2. Considere os seguintes descontos por categoria:
    - eletronicos  => 10% de desconto
    - vestuario => 20% de desconto
    - alimentos => 15% de desconto
    - livros" => 12% de desconto
3. Com base nesses valores, a função deve retornar o valor total dos descontos da compra.
4. Teste a função chamando-a com diferentes vetores de itens comprados e exiba o total de desconto.

Exemplo de uso da função:

```javascript
const compras = [
  { nome: "Smartphone", valor: 1000, categoria: "eletronicos" },
  { nome: "Camiseta", valor: 50, categoria: "vestuario" },
  { nome: "Fones de Ouvido", valor: 150, categoria: "eletronicos" },
  { nome: "Chocolate", valor: 5, categoria: "alimentos" },
  { nome: "Livro", valor: 30, categoria: "livros" }
];
const totalDesconto = calcularDesconto(compras);
console.log(`Total de desconto: R$${totalDesconto.toFixed(2)}`);
```

Dica: Use o objeto `categoriasDesconto` para acessar a porcentagem de desconto com base na categoria de cada item.
