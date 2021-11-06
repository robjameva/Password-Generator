// Assignment code here

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
  var result = [];
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (var i = 0; i < qty; i++) {
    const randoLower = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
    result.push(randoLower);
  }
  return result;
}

var getRandoUpper = function (qty) {
  var result = [];
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (var i = 0; i < qty; i++) {
    const randoUpper = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    result.push(randoUpper);
  }
  return result;
}

var getRandoNum = function (qty) {
  var result = [];
  var Nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  for (var i = 0; i < qty; i++) {
    const randoNum = Nums[Math.floor(Math.random() * Nums.length)];
    result.push(randoNum);
  }
  return result;
}

var getRandoSpecial = function (qty) {
  var result = [];
  var specialChar = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}"];
  for (var i = 0; i < qty; i++) {
    const randoSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
    result.push(randoSpecial);
  }
  return result;
}

var generatePassword = function () {
  var password = "";
  var charPool = [];
  var choosenCharTypes = [];
  var savedData = {
    length: sessionStorage.getItem("length"),
    isLower: sessionStorage.getItem("lowercase"),
    isUpper: sessionStorage.getItem("uppercase"),
    isNum: sessionStorage.getItem("numeric"),
    isSpecial: sessionStorage.getItem("special")
  };


  getUserInput();



  for (const [key, value] of Object.entries(savedData)) {
    if (key === isLower || key === isUpper || key === isNum || key === isSpecial && value === "true") {

    }
  }


  var quotient = Math.floor(savedData.length / choosenCharTypes.length);
  var remainder = savedData.length % choosenCharTypes.length;

  // Check if there will be a remainder or not
  var isRemainder = false;
  if (remainder > 0) {
    isRemainder = true;
  };

  var input1 = 0;
  var input2 = 0;
  var input3 = 0;
  var input4 = 0;

  switch (choosenCharTypes.length) {
    case 1:
      input1 = savedData.length;
      break;
    case 2:
      input1 = quotient;
      input2 = quotient + remainder;
      break;
    case 3:
      input1 = quotient;
      input2 = quotient;
      input3 = quotient + remainder;
      break;
    case 4:
      if (isRemainder) {
        input1 = quotient;
        input2 = quotient;
        input3 = quotient;
        input4 = quotient + remainder;
      }
      else {
        input1 = quotient;
        input2 = quotient;
        input3 = quotient;
        input4 = quotient;
      }
  }




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







