// Referências
// console https://www.freecodecamp.org/portuguese/news/exemplo-de-console-log-em-javascript-como-imprimir-no-console-em-js/
// typeof https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof

// 1. Declare 5 variáveis diferentes sem atribuir valor.
let maça;
let banana;
let acaju;
// 2. Declare uma constante com seu nome.
const meuNome = 'Ana Boteleiro'
console.log (meuNome);

// 3. Declare uma variável com a sua idade.
let idade = 39;
console.log(idade);


// 4. Use um operador de incremento para adicionar em 1 número a variável da sua idade
idade++;
console.log(idade++);
// 5. Use um operador de decremento para remover em 1 número a variável da sua idade
console.log(idade--);

// 6. Usando console.log, exiba seu nome e a sua idade no console.
console.log(meuNome, idade);

// 7. Declare uma variável da sua comida favorita, e não atribua valor.
let comidafavorita;
// 8. Atribua valor à variável de comida favorita.
comidafavorita = ('Nhoque');
console.log(comidafavorita)
// 9. Altere o valor da variável idade.
idade = 45;
console.log(idade)

// 10. Declare uma constante com o nome do seu cantor, cantora ou banda favorita.
const banda = 'Imagine Dragons';
console.log(banda)
// 11. Altere o valor da da constante da banda favorita. Qual o resultado?

// 12. Declare uma variável com uma lista (array) de compras de frutas com 5 itens.
let listadecompras=['maça','banana', 'caju'];
// 13. Usando console.log, exiba o valor do primeiro item da lista (array) de frutas.
console.log(listadecompras[0]);
// 14. Usando console.log, exiba o valor do terceiro item da lista (array) de frutas.
console.log(listadecompras[2]);
// 15. Usando console.log e e o operador typeof, exiba qual o tipo da variável que contém seu nome.
console.log(typeof meuNome);
// 16. Usando console.log e e o operador typeof, exiba qual o tipo da variável que contém sua idade.
console.log(typeof idade);

// 17. Usando console.log e e o operador typeof, exiba qual o tipo da variável da lista de compras.
console.log(typeof listadecompras);

// 18. Crie duas constantes, atribuia um valor numérico a elas, some essas duas constantes e exiba o resultado usando console.log.
const A = (22);
const B = (25);
console.log(A + B);
// 19. Crie uma constante com a string "Eu gosto muito de " e uma segunda constante com a string "JavaScript". Utilize o operador de concatenação para unir estas duas strings;
const frase1 = ('Eu gosto muito de ')
const frase2 = ('Javscript')
console.log(frase1, frase2);
// 20. Com a variável que conté a sua idade criada anteriormente, crie uma condicional (IF) para verificar se sua idade é maior ou igual a 18. Caso esta condição seja verdadeira, mostre
if(idade>=18){
    console.log('sou maior de idade');
} else{
    console.log( 'sou jovenzinha');
}