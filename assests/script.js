// Assignment code here
var generatePassword = function () {
  var length = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.");
  var isLowercase = window.confirm("Would you like your password to include: Lowercase characters?");
  var isUppercase = window.confirm("Would you like your password to include: Uppercase characters?");
  var isNumeric = window.confirm("Would you like your password to include: Numeric characters?");
  var isSpecial = window.confirm("Would you like your password to include: Special characters?");
  return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

