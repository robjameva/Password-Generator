// Assignment code here
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
}


var getUserInput = function () {
  getLength();
  if (userData.pwLength < 8 || userData.pwLength > 128) {
    window.alert("Your password can only be between 8 and 128 characters, please submit again");
    getLength();
  }

  userData.isLowercase = window.confirm("Would you like your password to include: LowerCase characters?");
  userData.isUppercase = window.confirm("Would you like your password to include: Uppercase characters?");
  userData.isNumeric = window.confirm("Would you like your password to include: Numeric characters?");
  userData.isSpecial = window.confirm("Would you like your password to include: Special characters?");

  if (userData.isLowercase === false && userData.isUppercase === false && userData.isNumeric === false && userData.isSpecial === false) {
    window.alert("You need to pick at least one condition, please try again.");
    getUserInput();
  }

}



// Get Random Characters
var getRandoLower = function (qty) {
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (var i = 0; i < qty; i++) {
    const randoLower = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    charPool.push(randoLower);
  }
}

var getRandoUpper = function (qty) {
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (var i = 0; i < qty; i++) {
    const randoUpper = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    charPool.push(randoUpper);
  }
}

var getRandoNum = function (qty) {
  var Nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  for (var i = 0; i < qty; i++) {
    const randoNum = Nums[Math.floor(Math.random() * Nums.length)];
    charPool.push(randoNum);
  }
}

var getRandoSpecial = function (qty) {
  var specialChar = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}"];
  for (var i = 0; i < qty; i++) {
    const randoSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
    charPool.push(randoSpecial);
  }
}

var generatePassword = function () {
  var password = "";

  getUserInput();


  while (charPool.length < userData.pwLength) {
    //debugger;
    if (userData.isLowercase === true) {
      getRandoLower(1);
    }
    if (userData.isUppercase === true) {
      getRandoUpper(1);
    }
    if (userData.isNumeric === true) {
      getRandoNum(1);
    }
    if (userData.isSpecial === true) {
      getRandoSpecial(1);
    }
  }








  console.log(charPool);






  password.concat();

  return password;
}

//resetSessionStorage();

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







