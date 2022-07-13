// //exercicio.01//

// const meses = ['janeiro', ' fevereiro', 'Março', 'Abril', 'Maio','Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro'];
// console.log( 'Temos ' + meses.length + ' meses por ano');

// const familia = ['Erick', 'Ana',' Alex'];
// console.log(familia [0] + meses [4],familia [1] + meses [5], familia[2] + meses[6] )


// //ex02
// const campeonatos = [1958, 1962, 1970, 1994, 2002]
// console.log(campeonatos);
// console.log( ' O Brasil ganhou '+ campeonatos.length + " campeonatos")

//ex03
const frutas= ['laranja', 'amora']
console.log(frutas)
frutas.push('morango',"abacaxi", 'bergamota');
console.log(frutas );

//remover frutas
frutas.pop();
console.log(frutas);
const frutaremovida = frutas.pop();
console.log(frutaremovida);
console.log(frutas);
frutas.shift()
console.log(frutas)


// splice
const cores = ['vermelho', 'verde','azul'];
console.log(cores)
const removida = cores.splice(0,1)
console.log(cores)
console.log(removida)
removed = cores.splice(1,0, 'rosa', 'amarelo');
console.log(cores)