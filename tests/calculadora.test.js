const calculadora = require("../models/calculadora.js");

test("Somar 2+2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 100 + 5 deve retornar 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("Somar banana + 100", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Error");
});

test("Dividir banana por zero dá erro", () => {
  const resultado = calculadora.dividir("banana", 0);
  expect(resultado).toBe("Error");
});

test("Dividir algum número por zero dá infinito", () => {
  const resultado = calculadora.dividir(4, 0);
  expect(resultado).toBe(Infinity);
});
