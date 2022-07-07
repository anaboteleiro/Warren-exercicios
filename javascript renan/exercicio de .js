/**
 * Escreva uma função que retorna o maior número entre dois números recebidos
 * SE (IF) o numero1 for maior que o numero2, mostra a mensagem `${numero1} é maior número`
 * SE (ELSE-IF) o numero2 seja maior que o numero1, mostra a mensagem `${numero1} é maior número`
 * CASO CONTRÁRIO (ELSE) se nenhum for maior que o outro, significa que os dois são iguais, então
 *   mostra a mensagem `${numero1} e ${numero2} são iguais`
 */

 function encontrarMaiorNumero(numero1, numero2) {
    if (numero1> numero2){
        console.log(`${numero1} é maior número`)

    }
    else if(numero2 > numero1){
        console.log(`${numero2} é maior número`)
    }
   else {
   console.log(`${numero1} e ${numero2} são iguais`)

   }
 }

 encontrarMaiorNumero(10, 45); // 45 é o maior número
 encontrarMaiorNumero(60, 2.5); // 60 é o maior número
 encontrarMaiorNumero(11, 11); // 11 e 11 são iguais
 encontrarMaiorNumero("10", 12); // ??
 encontrarMaiorNumero(1, ""); // ??
 encontrarMaiorNumero("", 0); // ??
 // Acho que era isso