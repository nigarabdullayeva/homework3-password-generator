

//Create password parameters var

var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ['!','"','#','$','%','&','()','*','+',',','-','.','/',':',';','<','=','>','?','@','[','^', '_', '`','{','|','}','~']


// Assignment Code

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create variables 

function writePassword() {
   var putNumbers = confirm("Do you want to use numbers in the password?");
   var putLowerCase = confirm("Do you want to use lower case characters in the password?");
   var putUpperCase = confirm("Do you want to use upper case characters in the password?");
   var putSpecChar = confirm("Do you want to use special characters in the password?");
   var passLength = prompt("How many charachers whould you like to use in your password? Enter number from 8 to 128.");
   var password = []

    
   //creating criterias for user choice and writing conditions 

   while((password.length) < passLength) {

    if ( putNumbers === true) {
    password.push(Math.floor(Math.random() * 10));
    }
    if (putLowerCase === true) {
    password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    }
    if (putUpperCase === true) {
    password.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    }
    if (putSpecChar === true) {
    password.push(specChar[Math.floor(Math.random() * specChar.length)]);
    }
    if (putNumbers === false && putLowerCase == false && putUpperCase == false && putSpecChar == false) {
       return alert ("You have to select at least one criteria");
    }
    if ((passLength < 8) || (passLength > 128)) {
        return alert("Password must contain from 8 to 128 characters!!! Please select correct number!");
     }
     
     // making randomly order of criterias 

     password.sort(compareRandom);
     function compareRandom(a,b) {
       return (Math.random() -0.5);
    }
   }
     
   // display password in textarea 

    document.getElementById ("password").innerHTML = password
}


  
