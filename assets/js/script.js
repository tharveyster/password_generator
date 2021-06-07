// Assignment Code
var characterCount;
var useLowercase;
var useUppercase;
var useNumbers;
var useSpecialChars;
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var selectedCharTypes = [];
var assemblePassword = [];
var password;
var passwordText;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Clear all variables so the generator can be used again with refreshing the page
  characterCount = 0;
  selectedCharTypes = [];
  assemblePassword = [];
  password = "";
  passwordText = "";

  // Start the generatePassword function and assign result to password variable
  password = generatePassword();

  // Select the textarea with id of password and then assign the password as its value
  passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Choose the criteria for password creation
function generatePassword() {
  // Ask for number of characters
  characterCount = prompt("Please choose a password length between 8 and 128 characters");

  // Return an empty string on cancel
  if (characterCount === null) {
    return "";
  } else {

    // Prevent user from continuing if they don't enter a number between 8 and 128
    while (!characterCount || (characterCount < 8 || characterCount > 128)) {
      alert("You must enter a number between 8 and 128!");
      characterCount = prompt("Please choose a password length between 8 and 128 characters");

      // Return an empty string on cancel
      if (characterCount === null) {
        return "";
      }
    }
  }

  // Prompt for character types to include
  useLowercase = confirm("Should the password contain lowercase letters?");
  useUppercase = confirm("Should the password contain UPPERCASE letters?");
  useNumbers = confirm("Should the password contain numbers?");
  useSpecialChars = confirm("Should the password contain special characaters?");

  // Prevent user from continuing if they don't select at least one character type
  while (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialChars === false) {
    alert("You must select at least one character type!");
    useLowercase = confirm("Should the password contain lowercase letters?");
    useUppercase = confirm("Should the password contain UPPERCASE letters?");
    useNumbers = confirm("Should the password contain numbers?");
    useSpecialChars = confirm("Should the password contain special characaters?");
  }

  // Check for lower case character selection and add lower case characters to the array if true
  if (useLowercase === true) {
    selectedCharTypes = selectedCharTypes.concat(lowerCharacters);
  }

  // Check for upper case character selection and add upper case characters to the array if true
  if (useUppercase === true) {
    selectedCharTypes = selectedCharTypes.concat(upperCharacters);
  }

  // Check for number character selection and add number characters to the array if true
  if (useNumbers === true) {
    selectedCharTypes = selectedCharTypes.concat(numberCharacters);
  }

  // Check for special character selection and add special characters to the array if true
  if (useSpecialChars === true) {
    selectedCharTypes = selectedCharTypes.concat(specialCharacters);
  }

  // Randomly determine each character of the password based upon what's in the array and the number of characters specified
  for (var i = 0; i < characterCount; i++) {
    var randomChars = selectedCharTypes[Math.floor(Math.random() * selectedCharTypes.length)];
    assemblePassword.push(randomChars);
    finalPassword = assemblePassword.join("");
  }

  // Return the final password to the writePassword function
  return finalPassword;
}