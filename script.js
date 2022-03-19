// The variables

let numbers = document.querySelectorAll ('.numbers');
let operators = document.querySelectorAll ('.operator');
let inputOne = document.querySelector ('.input-one');
let inputOperator = document.querySelector ('.input-operator');
let inputTwo = document.querySelector ('.input-two');
let results = document.querySelector ('.results-btn');
let resultDisplay = document.querySelector ('.input-result'); 
let reset = document.querySelector ('.reset-button');
let numbersChart = /[0-9]/g;
let operatorsChart = /[+\-*\/]/g;



// The functions

let calculation = () => {
  if (inputOperator.innerText === "+" ) {
    resultDisplay.innerText = parseFloat (inputOne.innerText) + parseFloat (inputTwo.innerText);
  } else if (inputOperator.innerText === "-" ) {
    resultDisplay.innerText = parseFloat (inputOne.innerText) - parseFloat (inputTwo.innerText);
  } else if (inputOperator.innerText === "x" ) {
    resultDisplay.innerText = parseFloat (inputOne.innerText) * parseFloat (inputTwo.innerText);
  } else if (inputOperator.innerText === "÷" ) {
    resultDisplay.innerText = parseFloat (inputOne.innerText) / parseFloat (inputTwo.innerText);
  } else if (inputOperator.innerText === "%" ) {
    resultDisplay.innerText = parseFloat (inputOne.innerText) * parseFloat (inputTwo.innerText) / 100;
  };
}

let allClear = () => {
  inputOne.innerText = ''
inputOperator.innerText = ''
inputTwo.innerText = ''
resultDisplay.innerText = ''
}

// Code excution:

document.addEventListener('keydown',  (event) => {
  if (event.key.match(numbersChart)) {
    if (inputOne.innerText !='' && inputOperator.innerText != '') {
      inputTwo.innerText = inputTwo.innerText + event.target.innerText;
//     calculator.appendNumber(event.key)
//     calculator.updateDisplay()
    }
  }}
  )



numbers.forEach((number) => {
  number.addEventListener('click' , (event) => {
     if (inputOne.innerText !='' && inputOperator.innerText != '') {
      inputTwo.innerText = inputTwo.innerText + event.target.innerText;
     }else
    inputOne.innerText = inputOne.innerText + event.target.innerText;
  });
})

operators.forEach((operator) => {  
  operator.addEventListener('click' , (event2) => {
    inputOperator.innerText =  event2.target.innerText;
  });
})

results.addEventListener('click' , (event) => {
  calculation();
  })

reset.addEventListener('click' , (event) => {
  allClear();
});
