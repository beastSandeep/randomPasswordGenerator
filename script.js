const passwordOutput = document.querySelector("#password-output");

const lengthInput = document.querySelector("#length-input");
const uppercaseInput = document.querySelector("#uppercase-input");
const lowercaseInput = document.querySelector("#lowercase-input");
const numbersInput = document.querySelector("#numbers-input");
const symbolsInput = document.querySelector("#symbols-input");

const generateButton = document.querySelector("#generate-btn");

const getRandomLower = () => {
  // 97+ all are Lower
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  // 65+ all are Lower
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
  // 48+ all are Lower
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
  // converting length string into a number
  const length = parseInt(lengthInput.value);

  // if somthing is wrong first alert and stop the function
  if (isNaN(length) || length < 8 || length > 32) {
    alert("Please enter a valid password length between 8 and 32.");
    return;
  }

  // our password
  let password = "";

  // functions body will save here for future fuction call
  const characterFuncs = [];

  // cheching paramas for uppercase, if yes then pushing getRandomUpper
  if (uppercaseInput.checked) {
    characterFuncs.push(getRandomUpper);
  }
  if (lowercaseInput.checked) {
    characterFuncs.push(getRandomLower);
  }
  if (numbersInput.checked) {
    characterFuncs.push(getRandomNumber);
  }
  if (symbolsInput.checked) {
    characterFuncs.push(getRandomSymbol);
  }

  // checking if user didn't select anything
  if (characterFuncs.length === 0) {
    alert("Please select at least one type of character.");
    return;
  }

  // now we are randomly calling function and their output going to be part of passwords
  for (let i = 0; i < length; i++) {
    const randomFunc =
      characterFuncs[Math.floor(Math.random() * characterFuncs.length)];
    password += randomFunc();
  }

  // now we are setting our password in html
  passwordOutput.textContent = password;
};

generateButton.addEventListener("click", generatePassword);
