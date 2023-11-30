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
    handleButtonPress(numberValue.innerHTML);
  });
});

numberOperators.forEach (operator => {
  operator.addEventListener("click", () => {
    handleButtonPress(operator.innerHTML);
  });
});

//MAKING AC BUTTON WORK 

allClear.addEventListener("click", () => {
  clearCalculator();
})

//MKAING CLEAR BUTTON WORK - issue
clear.addEventListener("click", () => {
  clearLastEntry();
})

//MAKING EQUALS BUTTON WORK
if (equalsButton){
  equalsButton.addEventListener("click", () => {
    performCalculation();
  });
}

// FUNCTION TO HANDLE BUTTON PRESSES

const handleButtonPress = (value:string)=> {
  initialSum += value;
  displayScreen.innerHTML = initialSum;
}

//FUNCTION TO HANDLE ALL CLEAR

const clearCalculator = () => {
  initialSum="";
  displayScreen.innerHTML = "0";
  displaySum.innerHTML = initialSum;
}

//FUNCTION TO HANDLE CLEAR

const clearLastEntry = () => {
  initialSum = initialSum.slice(0,-1);
  displayScreen.innerHTML = initialSum;
  displaySum.innerHTML = initialSum;
}

//FUNCTION TO PERFORM CALCULATIONS 

const performCalculation = () => {
  try{
    let result = 0;
    let currentOperator = "+";
    const parts = initialSum.split(/(\+|\-|\*|\/)/).filter(part => part.trim() !== '');

    for (let i=0; i<parts.length; i++){
      const part = parts[i];

      if (["+", "-", "*", "/"].includes(part[1])) {
        currentOperator = part;
      }
      else {
        const number = parseFloat(part);

        switch (currentOperator) {
          case "+":
            result += number;
            break;
          case "-": 
            result -= number; 
            break;
          case "*":
            result *= number;
            break;
          case "/":
            if (number !== 0) {
              result /= number;
            } else { 
              throw new Error ("cannot divide by zero");
            } 
            break;
          default:
            throw new Error ("invalid operator")
        }
      }
    }

    displayScreen.innerHTML = result.toString();
    displaySum.innerHTML =initialSum + result;

    initialSum = result.toString();
  }

  catch(error) {
    console.error("Error performing calculation", error);
    clearCalculator();
  }
};




