// function add(){
function add(step) {
    //console.log("add function");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    //number = number + 1;
    number = parseInt(number) + step;
    numberElement.innerText = number;
    console.log(number);
}

function subtract(step) {
    //console.log("add function");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    //number = number + 1;
    number = parseInt(number) - step;
    numberElement.innerText = number;
    console.log(number);
}

const stepCalc = (mathsFunction) => {
    let step = parseInt(document.getElementById("step").value);
    return mathsFunction(step);
}