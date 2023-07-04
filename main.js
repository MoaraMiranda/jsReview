// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
 alert(`Hello world!! 😄`)

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = prompt(`Write a number:`)
const numberTwo = prompt(`Write another number:`);

function sum(){
  let resultSum = Number(numberOne) + Number(numberTwo)
  return alert (`${numberOne} + ${numberTwo} = ${resultSum}`)
}
sum()

// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let isNumber = 50

if(typeof isNumber == 'number'){
  alert(`It is a number`)
}else{
  alert(`It isn't a number`)
}

// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = "It is a string"

if(typeof isString == 'string'){
  alert(`It is a string`)
}else{
  alert(`It isn't a string`)
}10
// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBoolean = true

if(typeof isBoolean == 'boolean'){
  alert(`It is a boolean`)
}else{
  alert(`It isn't a boolean`)
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function sub() {
  let resultSub = Number(numberOne) - Number(numberTwo);
  return alert(`${numberOne} - ${numberTwo} = ${resultSub}`);
}
sub();

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

function multi(){
  let resultMulti = Number(numberOne) * Number(numberTwo);
  return alert (`${numberOne} * ${numberTwo} = ${resultMulti}`)
}
multi();

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function div() {
  let resultDiv = (Number(numberOne) / Number(numberTwo)).toFixed(2);
  return alert(`${numberOne} / ${numberTwo} = ${resultDiv}`);
}
div();

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let resultSum = Number(numberOne) + Number(numberTwo);

if(resultSum % 2 == 0){
  alert(`The sum result is an even  number`)
} else{
  alert(`The sum result is not a even number`);
}
// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
  let resultSub = Number(numberOne) - Number(numberTwo);

if (resultSub % 2 != 0) {
  alert(`The subtraction result is an odd  number`);
} else {
  alert(`The subtraction result is not a odd number`);
}