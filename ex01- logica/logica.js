// console.log("Olá Pessoas");
// console.log("vamos aprender fazer soma da média de alunos");
// console.log("2+3=5");

//soma
// var a = parseInt(prompt("digite o primeiro numero"));
// var b= parseInt(prompt("digite o segundo numero"));
// var soma = a+b;
// console.log(soma);

//Nota  de Aluno
// var a = parseInt(prompt("digite a primeira nota"));
// var b = parseInt(prompt("digite a segunda nota"));
// var c = parseInt(prompt("digite a terceira nota"));
// var media= (a+b+c) /3
// console.log(media)

// Valor de Area
//var v1 = parseInt(prompt("base"));
//var v2 = parseInt(prompt("altura"));
//var area= (v1*v2) /2
//console.log(area)

//baskara

// var a=parseInt(prompt("valor da Letra A"));
// var b=parseInt(prompt("valor da Letra B"));
// var c=parseInt(prompt("valor da Letra c"));
// var delta = math.sqrt(b*b)

//horas
//  var segundos=parseInt(prompt("digite os segundos"));
// var minutos=segundos/60;
// var segundos= segundos%60;
// console.log(minutos,segundos)


// valores 
// var valor=parseInt(prompt("digite o valor"));
// var notas100=parseInt(valor/100);
// valor=valor%100;
// var notas50=parseInt(valor/50);
// valor=valor%50;
// var notas40=parseInt(valor/40);
// valor=valor%40;
// var notas20=parseInt(valor/20);
// valor=valor%20;
// var notas10=parseInt(valor/10);
// valor=valor%10;

// var notas5=parseInt(valor/5);
// valor=valor%5;
// var notas1=parseInt(valor/1)
// valor=valor%1;

// console.log(notas100,notas50,notas40,notas20,notas10,notas5,notas1);


// valores maiores ou menores
// var A=parseInt(prompt("digite o valor de A"))
// var B=parseInt(prompt("digite o valor De B"))
 
// if (A>B)
//   {"A é positivo"}
// else
//   {"B está positivo"}



// console.log( A,B)

// acerteeeeeei


// escrever os numeros de um a vinte
 // var a=1;
 // while(a<20)
 // {console.log(a);
 //  a=a+1;}
  
//teste________________
// var a=2
// var b=2
// { console.log(a+b)}

// var a=1
// var b=2
// while(a<200){
//   a=a+b;
//   b=a+b;
//   console.log(a,b);
// }

// var a=100
// while(a>0){
//   console.log(a%2);
//   a =parseInt(a/2);
// }


//NUMEROS PARES
 // var a=2;
 //  while(a<12)
 //  {console.log(a);
 //   a=a+2}

// MULTIPLOS DE 11
 // var a=11;
 // while(a<200)
 //   {console.log(a);
 //   a=a+11}

// Não entendi
// var a =10
// while(a>020){
//   console.log(a%2);
//   a =parseInt(a/2);
// }

// 5 cinco numeros pares
// var contador=0;
// while(contador ,5){
//   var n1= parsenInt(prompt("digite um numero:"))
//   if(n1 %2==0){console.log(n1)
//               }
//   contador= contador+1
//   }


/// I de repetição
// for ( i =0; i <10; i ++) {
// a = parseInt(prompt());
// if ( a ==0)
// break ; /* faz com que saia do for se for digitado 0 */
//  }


var v=[1,2,3,4,5,6];
var total=6;
for(var i=0; i<total/2;i++){
  var aux=v[i];
  v[i] = v[total-1-i]
  v[total-1-i]=aux;
}
for (var i=0; i<total;i++){
console.log(v[i]);
  
}