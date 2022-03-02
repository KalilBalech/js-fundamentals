/*
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
*/

function cumprimentar(nome){
    let cumprimento = "Olá, "+nome+"!"
    return cumprimento
}

/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
*/

function converterIdadeEmAnosParaDias(idade){
    conversao = idade*365
    return conversao
}

/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês
*/

function calcularSalario(qtdHorasMensais, recebePorHora){
    let salario = qtdHorasMensais*recebePorHora
    let frase = "Salário igual a R$ "+salario
    return frase
}

/*
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/

function nomeDoMes(numero){
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let mesEscolhido = meses[numero-1]
    return mesEscolhido
}

/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/

function maiorOuIgual(a, b){

    if(a>=b){
        return true
    }
    else{
        return false
    }

}

/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
*/

function inverso(a){
    if(typeof(a)=="boolean"){
        return !a
    }
    else if(typeof(a)=="number"){
        return -a
    }
    else{
        let tipo = typeof(a)
        let frase = "booleano ou número esperado, mas o parâmetro é do tipo "+ tipo
        return frase
    }
}