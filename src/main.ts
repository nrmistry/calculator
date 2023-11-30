import './main.scss'

const displaySum = document.querySelector<HTMLDivElement>(".screen__result--display");
const displayScreen = document.querySelector<HTMLDivElement>(".screen__result--answer");
const numberButtons = document.querySelectorAll<HTMLButtonElement>(".buttons__button--number");
const numberOperators = document.querySelectorAll<HTMLButtonElement>(".buttons__button--operator");

if(!displayScreen || !displaySum){
  throw new Error ("issues with Selector");
}

if( numberButtons.length === 0){
  throw new Error ("issues with selall")
}

if( numberOperators.length === 0){
  throw new Error ("issues with selall1")
}

let initialSum:string = "";

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

