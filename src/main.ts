import './main.scss'

const displaySum = document.querySelector<HTMLDivElement>(".screen__result--display");
const displayScreen = document.querySelector<HTMLDivElement>(".screen__result--answer");
const numberButtons = document.querySelectorAll<HTMLButtonElement>(".buttons__button--number");
const numberOperators = document.querySelectorAll<HTMLButtonElement>(".buttons__button--operator");
const allClear = document.querySelector<HTMLButtonElement>("#ac");
const clear = document.querySelector<HTMLButtonElement>("#clearButton");
const plusButton = document.querySelector<HTMLButtonElement>("#plus");
const equalsButton = document.querySelector<HTMLElement>("#equals");
const percentageButton = document.querySelector<HTMLButtonElement>("#percentage");

// ERROR MESSAGES - SPLIT SO I CAN SEE WHAT IS HAVING THE ISSUE
if (!displayScreen || !displaySum || !allClear || !clear || !plusButton || !equalsButton ||!percentageButton) {
  throw new Error("Issues with Selector");
}

if (numberButtons.length === 0) {
  throw new Error("Issues with numberButtons");
}

if (numberOperators.length === 0) {
  throw new Error("Issues with numberOperators");
}

// SET VARIABLES TO EMPTY STRINGS
let initialSum = "";
let secondSum = "";
let operatorSum = "";
let result = " ";

// ADD EVENT LISTENERS TO NUMBER AND OPERATOR BUTTONS
// TO SHOW AS A SUM AND DISPLAY EQUATION
const handleNumberPress = (event: Event) => {
  const numberButton = event.target as HTMLButtonElement;
  if (!operatorSum) {
    
    initialSum += numberButton.innerText;
    
  } else {
    
    secondSum += numberButton.innerText;
  }
  displayScreen.innerText = initialSum + (operatorSum ? " " + operatorSum + " " + secondSum : "");
}

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", handleNumberPress);
});

const handleOperatorPress = (event: Event) => {
  const operatorButton = event.target as HTMLButtonElement;
  operatorSum = operatorButton.innerText;
  displayScreen.innerText += operatorButton.innerText;
}

numberOperators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", handleOperatorPress);
});

// EVENT LISTENER AND FUNCTION FOR AC AND C BUTTON
const handleAllClear = () => {
  console.log("AC button clicked");
  initialSum = "";
  secondSum = "";
  operatorSum = "";
  result = "";
  displayScreen.innerText = "0";
}

allClear.addEventListener("click", handleAllClear);

//having a slight issue 

const handleClear = () => {
  if (secondSum !== ""){
    secondSum=secondSum.slice(0,-1);
  }else if (operatorSum !== "") {
    operatorSum= "";
  } else if (initialSum !== "") {
    initialSum=initialSum.slice(0,-1)
  }
  displayScreen.innerText = initialSum + (operatorSum ? " " + operatorSum + " " + secondSum : "");
}

clear.addEventListener("click", handleClear);

//FUNCTION FOR PERCENTAGE

const handlePercentage = () => {
  if (secondSum === "") {
   initialSum = (parseFloat(initialSum) / 100).toString();
 } else {
    secondSum
  }
}

percentageButton.addEventListener("click", handlePercentage);


// FUNCTIONS TO HANDLE EQUATIONS 
const performOperation = (initialSum: number, secondSum: number, operator: string): number => {
  switch (operator) {
    case "+":
      return initialSum + secondSum;
    case "-":
      return initialSum - secondSum;
    case "×": 
      return initialSum * secondSum;
    case "÷": 
      if (secondSum !== 0) {
        return initialSum / secondSum;
      } else {
        throw new Error("Cannot divide by zero");
      }
    default:
      throw new Error("Invalid operator");
  }
}

// TO HANDLE EQUALS FUNCTION
const handleEqualsPress = () => {
  try {
    let result: number;
    
    if (operatorSum === "%") {
      result = handlePercentageOperation(Number(initialSum));
    } else {
      result = performOperation(Number(initialSum), Number(secondSum), operatorSum);
    }
    const formattedResult = Number.isInteger(result) ? result.toString() : result.toFixed(5);

    displayScreen.innerText = formattedResult;
    initialSum = formattedResult;
    secondSum = "";
    operatorSum = "";
  } catch (error) {
    console.error("Error in calculation:", error);
    displayScreen.innerText = "Error";
  }
  
}

// FUNCTION TO HANDLE PERCENTAGE SEPARATLEY
const handlePercentageOperation = (value: number): number => {
  return value ;
}

equalsButton.addEventListener("click", handleEqualsPress)