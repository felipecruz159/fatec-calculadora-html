const somarInput = document.querySelector('#somar');
const subInput   = document.querySelector('#subtrair');
const multInput  = document.querySelector('#multiplicar');
const divInput   = document.querySelector('#dividir');

const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const resultInput = document.querySelector('#result');

const limpar = document.querySelector('#limpar');

somarInput.addEventListener("click", function(){
    let result = parseFloat(n1.value) + parseFloat(n2.value);
    resultInput.value = result;
})

subInput.addEventListener("click", function(){
    let result = parseFloat(n1.value) - parseFloat(n2.value);
    resultInput.value = result;
})

multInput.addEventListener("click", function(){
    let result = parseFloat(n1.value) * parseFloat(n2.value);
    resultInput.value = result;
})

divInput.addEventListener("click", function(){
    let result = parseFloat(n1.value) / parseFloat(n2.value);
    resultInput.value = result;
})

limpar.addEventListener("click", function(){
    n1.value = '';
    n2.value = '';
    resultInput.value = '';
})