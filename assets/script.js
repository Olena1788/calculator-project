
let num1;
let num2;
let operation = false;

//initialise variables and attch event handlers

function init(){

    num1 = num2 = 0;

    document.getElementById("btn-add").addEventListener('click', add, false);
    document.getElementById("btn-sub").addEventListener('click', substract, false);
    document.getElementById("btn-mul").addEventListener('click', multiply, false);
    document.getElementById("btn-div").addEventListener('click', divide, false);

    document.getElementById("btn-c").addEventListener('click', cancel, false);
    document.getElementById("btn-eq").addEventListener('click', equal, false);

    document.getElementById("btn-0").addEventListener('click', function(){displayDigit(0);}, false);
    document.getElementById("btn-1").addEventListener('click', function(){displayDigit(1);}, false);
    document.getElementById("btn-2").addEventListener('click', function(){displayDigit(2);}, false);
    document.getElementById("btn-3").addEventListener('click', function(){displayDigit(3);}, false);
    document.getElementById("btn-4").addEventListener('click', function(){displayDigit(4);}, false);
    document.getElementById("btn-5").addEventListener('click', function(){displayDigit(5);}, false);
    document.getElementById("btn-6").addEventListener('click', function(){displayDigit(6);}, false);
    document.getElementById("btn-7").addEventListener('click', function(){displayDigit(7);}, false);
    document.getElementById("btn-8").addEventListener('click', function(){displayDigit(8);}, false);
    document.getElementById("btn-9").addEventListener('click', function(){displayDigit(9);}, false);

    display(0);
}


function add(){
    operation = '+';
}


function substract(){
    operation = '-';
}


function multiply(){
    operation = '*';
}


function divide(){
    operation = '/';
}


function cancel(){
    num1 = num2 = 0;
    operation = false;
    display(0);
}