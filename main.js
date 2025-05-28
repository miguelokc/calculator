function callOne(num){
    const screen = document.getElementsByClassName("screen")[0];
    screen.textContent += num;
}
function addition(){
    const screen = document.getElementsByClassName("screen")[0];
    screen.textContent += "+";
}
function subtraction(){
    const screen = document.getElementsByClassName("screen")[0];
    screen.textContent += "-";
}
function multiply(){
    const screen = document.getElementsByClassName("screen")[0];
    screen.textContent += "*";
}
function divide(){
    const screen = document.getElementsByClassName("screen")[0];
    screen.textContent += "/";
}
function erase(){
    const screen = document.getElementsByClassName("screen")[0];
    screen.textContent = "";
}
