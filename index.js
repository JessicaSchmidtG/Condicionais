//Exercício 01
//Crie uma função que:
//Recebe 2 números (chamaremos de num1 e num2)
//Compara esses números entre si:
//Se os números forem iguais, retorna uma mensagem de sucesso
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt
/*
let num1 = prompt("Informe outro número");
let num2 = prompt("Informe um número");

function comparar(numero1,numero2){ 
    if (num1===num2){
        console.log("Os números digitados são iguais!");
    }else{
        console.log("Os números informados são diferentes");
    }
    return
}
comparar(num1, num2);
*/
//Opção 2
/*
let n1 = prompt("Informe outro número");
let n2 = prompt("Informe um número");
function comparar(n1,n2){ 
    let resultado = "Números Diferentes";
    if (n1===n2){
        resultado = "Números são iguais";
    }
    return resultado;
}
console.log(comparar(n1,n2));
*/
 //if + else + if
 //Exercicio 3
 //Crie uma função que:
//Recebe 2 números (chamaremos de num1 e num2)
//Compara esses números entre si:
//Retorna mensagens dizendo se o primeiro número é {maior/menor/igual} ao segundo número
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt

/*
let primNum = prompt('Informe um número');
let segNum = prompt('Informe outro número');

function comparacao(a,b){
    let result = '';
    if(a>b){
        result = `O número ${a} é maior que o número ${b}`;
    }else if(a<b){
        result = `O número ${a} é menor que o número ${b}`;
    }else{
        result = `Os números são iguais`;
    }    
    return result;
}
console.log(comparacao(primNum,segNum));
*/

let anoNasc = Number(prompt('Qual seu ano de nascimento?'));

function calcularIdade(anoNasc){
    let anoAtual = 2023;
    let idade = anoAtual - anoNasc;
    votar ='';
    if (idade>=16 && idade<18 || idade>=7 0){
        votar = "Voto facultativo";
    }else if(idade>=18){
        votar = "Você é obrigado a votar";
    }else{
        votar = "Você não pode votar";
    }
    return votar;
}
console.log(calcularIdade(anoNasc));

