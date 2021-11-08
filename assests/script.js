// Assignment code here
// Global Data
var charPool = [];
var userData = {
  pwLength: 0,
  isLowercase: null,
  isUppercase: null,
  isNumeric: null,
  isSpecial: null
};

var getLength = function () {
  var length = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.");
  length = parseInt(length);
  userData.pwLength = length;

  if (userData.pwLength < 8 || userData.pwLength > 128) {
    window.alert("Your password can only be between 8 and 128 characters, please submit again");
    getLength();
  }
}

var getUserInput = function () {
  getLength();
  userData.isLowercase = window.confirm("Click OK if you would like your password to include: Lowercase characters?");
  userData.isUppercase = window.confirm("Click OK if you would like your password to include: Uppercase characters?");
  userData.isNumeric = window.confirm("Click OK if you would like your password to include: Numeric characters?");
  userData.isSpecial = window.confirm("Click OK if you would like your password to include: Special characters?");

  if (userData.isLowercase === false && userData.isUppercase === false && userData.isNumeric === false && userData.isSpecial === false) {
    window.alert("You need to pick at least one condition, please try again.");
    getUserInput();
  }

}

// Get Random Characters and push to the character pool
var getRandoLower = function () {
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randoLower = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
  charPool.push(randoLower);
}

var getRandoUpper = function () {
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randoUpper = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
  charPool.push(randoUpper);
}

var getRandoNum = function () {
  var Nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  var randoNum = Nums[Math.floor(Math.random() * Nums.length)];
  charPool.push(randoNum);
}

var getRandoSpecial = function () {
  var specialChar = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}"];
  var randoSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
  charPool.push(randoSpecial);
}

// Generate global character pool with enough characters of each type to satisfy user request
var getAllChar = function () {
  while (charPool.length < userData.pwLength) {
    if (userData.isLowercase === true) {
      getRandoLower();
    }
    if (userData.isUppercase === true) {
      getRandoUpper();
    }
    if (userData.isNumeric === true) {
      getRandoNum();
    }
    if (userData.isSpecial === true) {
      getRandoSpecial();
    }
  }
}

// Turn character pool array into password string to be sent to the user
var concatPassword = function () {
  var password = [];
  while (password.length < userData.pwLength) {
    var character = charPool[Math.floor(Math.random() * charPool.length)];
    var index = charPool.indexOf(character);
    if (index > -1) {
      var singleChar = charPool.splice(index, 1);
      password.push(singleChar[0]);
    }
  }
  password = password.join('');
  return password;
}

// Main funtion, fired on button click 
var generatePassword = function () {
  getUserInput();
  getAllChar();
  var finalPassword = concatPassword();

  // Reset character pool for subsequent passwords
  charPool = [];

  return finalPassword;
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







