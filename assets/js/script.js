// Assignment Code
var generateBtn = document.querySelector("#generate");


var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '#', '$', '&', '(', ')', '@', '*', '?', '%'];

function generatePassword() {
  var addUppers;
  var addLowers;
  var addNumbers;
  var addSpecials;
  var addCharacterLength = "";

  var addCharacterLength = (prompt("Please select you're password's length. (8 - 128 characters)"));

  if (addCharacterLength <= 7 || addCharacterLength >= 129) {
    alert("Password must be between 8 128- characters.  Please try again.")
    addCharacterLength = (prompt("Please select you're password's length. (8 - 128 characters)"));

  }
  addLowers = confirm("Do you want to want to include lowercase characters? Press 'OK' to add or 'Cancel' for no.");
  addUppers = confirm("Do you want to want to include uppercase characters? Press 'OK' to add or 'Cancel' for no.");
  addNumbers = confirm("Do you want to want to include numbers? Press 'OK' to add or 'Cancel' for no.");
  addSpecials = confirm("Do you want to want to include special characters? Press 'OK' to add or 'Cancel' for no.");



  if (
    addLowers === false &&
    addUppers === false &&
    addNumbers === false &&
    addSpecials === false) {
    alert("You must select at least one character types to create a password.");

    addLowers = confirm("Do you want to want to include lowercase characters? Press 'OK' to add or 'Cancel' for no.");
    addUppers = confirm("Do you want to want to include uppercase characters? Press 'OK' to add or 'Cancel' for no.");
    addNumbers = confirm("Do you want to want to include numbers? Press 'OK' to add or 'Cancel' for no.");
    addSpecials = confirm("Do you want to want to include special characters? Press 'OK' to add or 'Cancel' for no.");
  }

  var getPassword = []
  if (addLowers) { getPassword = getPassword.concat(lowerCase) }
  if (addUppers) { getPassword = getPassword.concat(upperCase) }
  if (addNumbers) { getPassword = getPassword.concat(number) }
  if (addSpecials) { getPassword = getPassword.concat(specialCharacters) }

  var retrievePassword = ""

  for (var i = 0; i < addCharacterLength; i++) {
    retrievePassword = retrievePassword + getPassword[Math.floor(Math.random() * getPassword.length)];
  }
  return retrievePassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
