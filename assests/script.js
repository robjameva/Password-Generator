// Assignment code here

var getLength = function () {
  //debugger;
  var length = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.");
  length = parseInt(length);
  if (length < 8 || length > 128) {
    window.alert("Your password can only be between 8 and 128 characters, please submit again");
    getLength();
  }
  return length;
}

var getUserInput = function () {
  var pwLength = getLength();
  var isLowercase = window.confirm("Would you like your password to include: LowerCase characters?");
  var isUppercase = window.confirm("Would you like your password to include: Uppercase characters?");
  var isNumeric = window.confirm("Would you like your password to include: Numeric characters?");
  var isSpecial = window.confirm("Would you like your password to include: Special characters?");
  if (isLowercase === false && isUppercase === false && isNumeric === false && isSpecial === false) {
    window.alert("You need to pick at least one condition, please try again.");
    getUserInput();
  }

}


// Get Random Characters
var getRandoLower = function () {
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const randoLower = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
  return randoLower;
}

var getRandoUpper = function () {
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const randoUpper = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
  return randoUpper;
}

var getRandoNum = function () {
  const randonum = Math.floor(Math.random() * 10);
  return randonum;
}

var getRandoSpecial = function () {
  var specialChar = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}"];
  const randoSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
  return randoSpecial;
}



var generatePassword = function () {
  getUserInput();


  // for (i = 0; i < pwLength; i++) {
  //   var password = "";

  //   password.concat();
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







