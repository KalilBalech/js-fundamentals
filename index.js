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

/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/

function estaEntre (numero, a, b, inclusivo=false){
    
    if(a>=b){
        let maior = a
        let menor = b
    }
    else{
        let maior = b
        let menor = a
    }
    
    if((inclusivo && numero>=menor && numero<=maior) || (!inclusivo && numero>menor && numero<maior)){
        return true
    }
    else {
        return false
    }
}

/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação
*/

function multiplicar(a, b){
    let resultado = 0
    let i

    for(i=0; i<b; i++){
        resultado +=a
    }

    return resultado
}

/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado
*/

function repetir(elemento, numeroDeRepeticoes){

    let lista=[]

    let i

    for(i=0; i<numeroDeRepeticoes; i++){
        lista.push(elemento)
    }

    return lista
}

/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro
*/

function simboloMais(numero){
    let simbolos = ""
    let i

    for(i=0; i<numero; i++){
        simbolos+="+"
    }

    return simbolos
}

/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array
*/

function receberPrimeiroEUltimoElemento(array){
    let novoarray = []
    novoarray.push(array[0])
    novoarray.push(array[-1])
    return novoarray
}

/*

Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.

*/

function removerPropriedade(objeto, caracteristica){
    let copia = objeto
    delete copia[caracteristica] // DEVE-SE UTILIZAR A SEGUNDA FORMA DE ACESSAR ATRIBUTOS DE UM OBJETO
    return copia
}
    /*
    
    Existem 3 formas de remover uma propriedade de um objeto. A primeira é através do delete, como foi feito. É uma execução 
    que realmente deleta o atributo, mas tem tempo de execução alto. A segunda forma é definindo o atributo como undefined ou
    como string nula. As ultimas duas formas não deletam o atributo, mas tem tempo de execução maior.
    
    */

/*

Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.

*/

function filtrarNumero(array){
    let arrayNumerico = []

    array.forEach(elemento =>{
        if(typeof(elemento)==="number"){
            arrayNumerico.push(elemento)
        }
    })

    return arrayNumerico
}

/*

Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:

*/

function objetoParaArray(objeto){
    let array = Object.entries(objeto)
    return array
}

/*

Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares

*/

function receberSomenteOsParesDeIndicePar(array){
    
    let outroArray=[]

    array.forEach((e, index) =>{
        if(e%2===0 && index%2===0){
            outroArray.push(e)
        }
    })
}

/*

A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não

*/

function checarAnoBissexto(ano){

    if(ano%4===0){

        if(ano%100 ===0){

            if(ano%400 === 0){
                return true
            }
            else{
                return false
            }
            
        }
        else{
            return true
        }
    }
    else{
        return false
    }
}