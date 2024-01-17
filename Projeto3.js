/* Este é um programa que calcula a média de um aluno e classifica-o entre;
 abaixo da Média, na Média e acima da Média.
*/
const entradaNota1= require('prompt-sync') ({sigint: true});
let nota1;
nota1 = entradaNota1 ("Digite a Nota do Primeiro Semestre: ");

const entradaNota2= require('prompt-sync') ({sigint: true});
let nota2;
nota2 = entradaNota2 ("Digite a Nota do Segundo Semestre: ");

const entradaNota3= require('prompt-sync') ({sigint: true});
let nota3;
nota3 = entradaNota3 ("Digite a Nota do Terceiro Semestre: ");

const entradaNota4= require('prompt-sync') ({sigint: true});
let nota4;
nota4 = entradaNota4 ("Digite a Nota do Quarto Semestre: ");
console.log('');
console.log('');

console.log (`Suas Notas dos Semestres foram, Respectivamente: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);


const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;
console.log(media)
if (media < 7) {
    console.log('Aluno Abaixo da Media');
} else if (media === 7) {
    console.log('ALuno na Media');
} else if(media > 7) {
    console.log('Aluno Acima da Media');
}
