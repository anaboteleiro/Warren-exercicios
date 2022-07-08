/**
 * Escreva um script que compare dois números usando estrutura condicional (IF...ELSE) e exiba uma mensagem se:
 * - primeiroNumero for maior que o segundoNumero;
 * - segundoNumero for maior que primeiroNumero;
 * - primeiroNumero e segundoNumero são iguais;
 * Exemplo: se primeiroNumero for maior que segundoNumero, exiba a mensagem: "{segundoNumero} é maior que {primeiroNumero}"
 */

 let primeiroNumero = 60;
 let segundoNumero =212;
 
 if(primeiroNumero> segundoNumero) {
  console.log (`O ${primeiroNumero} é maior que o ${segundoNumero}`);
   
 } else if(segundoNumero> primeiroNumero) {
   console.log(`O ${segundoNumero} é maior que o ${primeiroNumero}`)
 
 } else (primeiroNumero>= segundoNumero)
    {
        console.log(`O ${primeiroNumero} e o ${segundoNumero} são iguais`)
   
 }