// Assignment Code
var numChars;
var useLowercase;
var useUppercase;
var useNumbers;
var useSpecialChars;
var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacters = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ['!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/','\:','\;','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var selectedCharTypes;
var assemblePassword = new Array;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Choose the criteria for password creation
function generatePassword() {
  // Ask for number of characters
  numChars = parseInt(prompt("Please choose a password length between 8 and 128 characters"));

  if (!numChars || (numChars < 8 || numChars > 128)) {
    alert("You must enter a number between 8 and 128!");
    generatePassword();
  } else {
    useLowercase = confirm("Should the password contain lowercase letters?");
    useUppercase = confirm("Should the password contain UPPSERCASE letters?");
    useNumbers = confirm("Should the password contain numbers?");
    useSpecialChars = confirm("Should the password contain special characaters?");
  }

  if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialChars === false) {
    alert("You must select at least one character type!");
    generatePassword();
  } else if (useLowercase === true && useUppercase === true && useNumbers === true && useSpecialChars === true) {
    selectedCharTypes = lowerCharacters.concat(upperCharacters, numberCharacters, specialCharacters);
  } else if (useLowercase === true && useUppercase === true && useNumbers === true) {
    selectedCharTypes = lowerCharacters.concat(upperCharacters, numberCharacters);
  } else if (useLowercase === true && useUppercase === true && useSpecialChars === true) {
    selectedCharTypes = lowerCharacters.concat(upperCharacters, specialCharacters);
  } else if (useLowercase === true && useNumbers === true && useSpecialChars === true) {
    selectedCharTypes = lowerCharacters.concat(numberCharacters, specialCharacters);
  } else if (useUppercase === true && useNumbers === true && useSpecialChars === true) {
    selectedCharTypes = upperCharacters.concat(numberCharacters, specialCharacters);
  } else if (useLowercase === true && useUppercase === true) {
    selectedCharTypes = lowerCharacters.concat(upperCharacters);
  } else if (useLowercase === true && useNumbers === true) {
    selectedCharTypes = lowerCharacters.concat(numberCharacters);
  } else if (useLowercase === true && useSpecialChars === true) {
    selectedCharTypes = lowerCharacters.concat(specialCharacters);
  } else if (useUppercase === true && useNumbers === true) {
    selectedCharTypes = upperCharacters.concat(numberCharacters);
  } else if (useUppercase === true && useSpecialChars === true) {
    selectedCharTypes = upperCharacters.concat(specialCharacters);
  } else if (useNumbers === true && useSpecialChars === true) {
    selectedCharTypes = numberCharacters.concat(specialCharacters);
  } else if (useLowercase === true) {
    selectedCharTypes = lowerCharacters;
  } else if (useUppercase === true) {
    selectedCharTypes = upperCharacters;
  } else if (useNumbers === true) {
    selectedCharTypes = numberCharacters;
  } else {
    selectedCharTypes = specialCharacters;
  }

  for (var i = 0; i < numChars; i++) {
    var randomChars = selectedCharTypes[Math.floor(Math.random() * selectedCharTypes.length)];
    assemblePassword.push(randomChars);
    finalPassword = assemblePassword.join("");
  }

  return finalPassword;

}