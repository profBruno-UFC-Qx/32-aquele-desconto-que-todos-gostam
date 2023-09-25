const calcularDesconto = require('./src/main.js');

test('A função calcularDesconto existe', () => {
  expect(calcularDesconto).toBeDefined()
  expect(typeof calcularDesconto).toBe("function");
});

test('Calculando o desconto em compras sem itens', () => {
  expect(calcularDesconto([])).toBe(0);
});

test('Calculando o desconto em compras somente com itens eletronicos', () => {
  const compras = [
    { nome: 'Pendrive', valor: 30, categoria: "eletronicos" },
    { nome: 'Smartphone', valor: 4000, categoria: "eletronicos" },
    { nome: 'SmartTV', valor: 5000, categoria: "eletronicos" }
  ]
  expect(calcularDesconto(compras)).toBe(903);
});

test('Calculando o desconto em compras somente com itens de vestuario', () => {
  const compras = [
    { nome: 'Bolsa feminina', valor: 300, categoria: "vestuario" },
    { nome: 'Meias esportivas', valor: 60, categoria: "vestuario" },
    { nome: 'Tênis casual', valor: 100, categoria: "vestuario" },
    { nome: 'Short Feminino', valor: 200, categoria: "vestuario" }
  ]
  expect(calcularDesconto(compras)).toBe(132);
});

test('Calculando o desconto em compras somente com itens de alimentos', () => {
  const compras = [
    { nome: 'Coco verde', valor: 4, categoria: "alimentos" },
    { nome: '1kg de picanha', valor: 100, categoria: "alimentos" },
    { nome: 'Bolacha de maizena', valor: 10, categoria: "alimentos" },
    { nome: 'Goma de tapioca', valor: 8, categoria: "alimentos" }
  ]
  expect(calcularDesconto(compras)).toBe(18.3);
});


test('Calculando o desconto em compras somente com livros', () => {
  const compras = [
    { nome: 'O guia do mochileiro das galaxias vol. I', valor: 40, categoria: "livros" },
    { nome: 'O misterio do passo das hortencias', valor: 12, categoria: "livros" }
  ]
  expect(calcularDesconto(compras)).toBe(40*0.12 + 12*0.12);
});

test('Aproveitando os descontos', () => {
  const compras = [
    { nome: 'Pendrive', valor: 30, categoria: "eletronicos" },
    { nome: 'Smartphone', valor: 4000, categoria: "eletronicos" },
    { nome: 'O guia do mochileiro das galaxias vol. I', valor: 40, categoria: "livros" },
    { nome: 'Coco verde', valor: 4, categoria: "alimentos" },
    { nome: '1kg de picanha', valor: 100, categoria: "alimentos" },
    { nome: 'Bolacha de maizena', valor: 10, categoria: "alimentos" },
    { nome: 'SmartTV', valor: 5000, categoria: "eletronicos" },
    { nome: 'Goma de tapioca', valor: 8, categoria: "alimentos" },
    { nome: 'O misterio do passo das hortencias', valor: 12, categoria: "livros" },
    { nome: 'Bolsa feminina', valor: 300, categoria: "vestuario" },
    { nome: 'Meias esportivas', valor: 60, categoria: "vestuario" },
    { nome: 'Tênis casual', valor: 100, categoria: "vestuario" },
    { nome: 'Short Feminino', valor: 200, categoria: "vestuario" }
  ]
  expect(calcularDesconto(compras)).toBe(1053.3 + 40*0.12 + 12*0.12);
});
