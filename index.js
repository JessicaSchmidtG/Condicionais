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
/*
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
*/
//Switch case

//Uma pessoa pode estudar em uma faculdade se:
//Tiver concluído o ensino médio
//Tiver 18 anos ou mais
//Não estiver cursando outra faculdade
//Escreva uma função que receba estes parâmetros e devolva se a pessoa pode ou não
//estudar nesta faculdade. Receba os dados do usuário pelo prompt e execute a função
/*
let ensinoMedio = prompt("você concluiu o ensino medio? 1-S 2-N");
let idade = Number(prompt("Qual a sua idade?"));
let faculdade = prompt("Você está cursando ensino superior?");

function podeEstudar(ensinoMedio,idade,faculdade){
    let mensagem
    if(ensinoMedio.toUpperCase() === "SIM" && idade >= 18 && faculdade.toUpperCase() === "NAO"){
        mensagem = "seja bem vindo";
    } else {
        mensagem = "Você não está apto para entrar em nossa instituição!"
    }
    return mensagem;

}  
let resultado = podeEstudar(ensinoMedio,idade,faculdade);
console.log(resultado);         
*/

/*
let pais = "Argentina";

switch (pais){
    case 'Brasil':
        console.log('Brasileiro');
        break;
    case 'Alemanha':
        console.log('Alemão');
        break;
    case "Croacia":
        console.log('Croata');
        break;
    default:
        console.log('Sua nacionalidade não foi encontrada');
}
*/

let num1 = Number(prompt('Informe um número'));
let num2 = Number(prompt('Informe outro número'));
let opcao = Number(prompt('Digite uma opção: \n1-Soma \n2-Subtração\n3-Multiplicação\n4-Divisão'));
switch (opcao){
    case 1:
        console.log(num1 + num2);
        break;
    case 2:
        console.log(num1 - num2);
        break;
    case 3:
        console.log(num1*num2);
        break;
    case 4:
        console.log(num1/num2);
        break;
    default:
        console.log('Opção não encontrada');
}