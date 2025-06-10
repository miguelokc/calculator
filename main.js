let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

function callOne(num){
    const screen = document.getElementsByClassName("screen")[0];
    if(!isSecond){
        firstNumber += num;
        screen.textContent = firstNumber;
    } else{
        secondNumber += num;
        screen.textContent = firstNumber + operator + secondNumber;
    }
    
}
function setOperator(op){
    const screen = document.getElementsByClassName("screen")[0];
   if (firstNumber == "") return;
   if (secondNumber !== ""){
    equals();
   }
    operator = op;
    isSecond = true;
    screen.textContent = firstNumber + operator;
}

function equals(){
    const screen = document.getElementsByClassName("screen")[0];

    const num1 = parseFloat (firstNumber);
    const num2 = parseFloat (secondNumber);

    const result = operate(operator, num1 , num2);

    screen.textContent = result;

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isSecond = false;

}

function erase(){

     firstNumber = "";
     secondNumber = "";
     operator = "";
     isSecond = false;

    const screen = document.getElementsByClassName("screen")[0];
    screen.textContent = "";

}

function addition(a,b){
    return a + b;
}
function subtraction(a,b){
   return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate(operator, a , b){
    switch(operator){
        case "+": return addition(a,b);
        case "-": return subtraction(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
        default: return "invalid";
    }
}