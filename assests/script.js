// Assignment code here
var charPool = [];

var getLength = function () {
  var length = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.");
  length = parseInt(length);
  return length;
}


var getUserInput = function () {
  var pwLength = getLength();
  if (pwLength < 8 || pwLength > 128) {
    window.alert("Your password can only be between 8 and 128 characters, please submit again");
    pwLength = getLength();
  }

  var isLowercase = window.confirm("Would you like your password to include: LowerCase characters?");
  var isUppercase = window.confirm("Would you like your password to include: Uppercase characters?");
  var isNumeric = window.confirm("Would you like your password to include: Numeric characters?");
  var isSpecial = window.confirm("Would you like your password to include: Special characters?");
  if (isLowercase === false && isUppercase === false && isNumeric === false && isSpecial === false) {
    window.alert("You need to pick at least one condition, please try again.");
    getUserInput();
  }
  sessionStorage.setItem("length", pwLength);
  sessionStorage.setItem("lowercase", isLowercase);
  sessionStorage.setItem("uppercase", isUppercase);
  sessionStorage.setItem("numeric", isNumeric);
  sessionStorage.setItem("special", isSpecial);
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
  charPool = [];
  var password = "";
  var choosenCharTypes = [];
  var savedData = {
    isLower: sessionStorage.getItem("lowercase"),
    isUpper: sessionStorage.getItem("uppercase"),
    isNum: sessionStorage.getItem("numeric"),
    isSpecial: sessionStorage.getItem("special"),
    userLength: sessionStorage.getItem("length")
  };


  getUserInput();

  var x = parseInt(savedData.userLength);
  while (charPool.length < x) {
    //debugger;
    while (savedData.isLower === "true") {
      getRandoLower(1);
      break;
    }
    while (savedData.isUpper === "true") {
      getRandoUpper(1);
      break;
    }
    while (savedData.isNum === "true") {
      getRandoNum(1);
      break;
    }
    while (savedData.isSpecial === "true") {
      getRandoSpecial(1);
      break;
    }
  }




  console.log(charPool)








  password.concat();

  return password;
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







