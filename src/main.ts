import './main.scss'

const displaySum = document.querySelector<HTMLDivElement>(".screen__result--display");
const displayScreen = document.querySelector<HTMLDivElement>(".screen__result--answer");
const numberButtons = document.querySelectorAll<HTMLButtonElement>(".buttons__button--number");
const numberOperators = document.querySelectorAll<HTMLButtonElement>(".buttons__button--operator");
const allClear = document.querySelector<HTMLButtonElement>("#ac");
const clear = document.querySelector<HTMLButtonElement>("#clearButton");
const plusButton = document.querySelector<HTMLButtonElement>("#plus");
const equalsButton = document.querySelector<HTMLButtonElement>("#equals");

//ERROR MESSAGES - SPLIT SO I CAN SEE WHAT IS HAVING THE ISSUE 

if(!displayScreen || !displaySum || !allClear || !clear || !plusButton || !equalsButton){
  throw new Error ("issues with Selector");
}

if( numberButtons.length === 0){
  throw new Error ("issues with selall")
}

if( numberOperators.length === 0){
  throw new Error ("issues with selall1")
}

//SET A VARIABLE TO AN EMPTY STRING

let initialSum:string = "";

//ADD EVENT LISTENERS TO NUMBER AND OPERATOR BUTTONS 
//TO SHOW AS A SUM AND DISPLAY EQUATION

numberButtons.forEach (numberValue => {
  numberValue.addEventListener("click", () => {
    initialSum += numberValue.innerHTML;
    console.log("current initialSum", initialSum)
    displayScreen.innerHTML = initialSum
  });
});


numberButtons.forEach (numberValues => {
  numberValues.addEventListener("click", () => {
    initialSum += numberValues.innerHTML;
    console.log("current initialSum", initialSum)
    displaySum.innerHTML = initialSum
  });
});

numberOperators.forEach (operator => {
  operator.addEventListener("click", () => {
    initialSum += operator.innerHTML;
    console.log("current initialSum", initialSum)
    displayScreen.innerHTML = initialSum
  });
});

numberOperators.forEach (operatorPress => {
  operatorPress.addEventListener("click", () => {
    initialSum += operatorPress.innerHTML;
    console.log("current initialSum", initialSum)
    displaySum.innerHTML = initialSum
  });
});



//MAKING AC BUTTON WORK 

allClear.addEventListener("click", () => {
  initialSum = "";
  displayScreen.innerHTML = "0"
  displayScreen.innerHTML = initialSum
})

allClear.addEventListener("click", () => {
  initialSum = "";
  displaySum.innerHTML = initialSum
})

//MKAING CLEAR BUTTON WORK - issue

clear.addEventListener("click", () => {
  initialSum = initialSum.slice(0,-1);
  displayScreen.innerHTML = initialSum
  console.log("current initialSum", initialSum);
})

//MAKING EQUALS WORK


//MAKING OPERATORS WORK  



