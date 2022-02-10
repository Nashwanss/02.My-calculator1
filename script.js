
let numbers = document.querySelectorAll ('.numbers');
let operators = document.querySelectorAll ('.operator');


let inputOne = document.querySelector ('.input-one');
let inputOperator = document.querySelector ('.input-operator');
let inputTwo = document.querySelector ('.input-two');
let results = document.querySelector ('.results-btn');
let resultDisplay = document.querySelector ('.input-result'); 
let reset = document.querySelector ('.reset-button');





numbers.forEach((number) => {
  number.addEventListener('click' , (event) => {
     if (inputOne.innerText !='' && inputOperator.innerText != '') {
      inputTwo.innerText = inputTwo.innerText + event.target.innerText;
     }else
    inputOne.innerText = inputOne.innerText + event.target.innerText;
  });
})

operators.forEach((operator) => {  
  operator.addEventListener('click' , (event) => {
    inputOperator.innerText =  event.target.innerText;
  });
})


results.addEventListener('click' , (event) => {
    if (inputOperator.innerText === "+" ) {
      resultDisplay.innerText = parseFloat (inputOne.innerText) / parseFloat (inputTwo.innerText);
      resultDisplay.innerText = parseFloat (inputOne.innerText) + parseFloat (inputTwo.innerText);
    } else if (inputOperator.innerText === "-" ) {
      resultDisplay.innerText = parseFloat (inputOne.innerText) - parseFloat (inputTwo.innerText);
    } else if (inputOperator.innerText === "x" ) {
      resultDisplay.innerText = parseFloat (inputOne.innerText) * parseFloat (inputTwo.innerText);
    } else if (inputOperator.innerText === "÷" ) {
    } else if (inputOperator.innerText === "%" ) {
      resultDisplay.innerText = parseFloat (inputOne.innerText) * parseFloat (inputTwo.innerText) / 100;
    };
  })

reset.addEventListener('click' , (event) => {

inputOne.innerText = ''
inputOperator.innerText = ''
inputTwo.innerText = ''
resultDisplay.innerText = ''

});
