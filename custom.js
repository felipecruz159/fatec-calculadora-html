function somar(){
    var n1 = document.querySelector('#n1').value;
    var n2 = document.querySelector('#n2').value;

    var result = parseFloat(n1) + parseFloat(n2);
    var input = document.querySelector('#result');

    if (result){
        input.value = result;
    }
    
}