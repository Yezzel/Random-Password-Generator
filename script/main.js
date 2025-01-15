const passwordBox = document.getElementById("Password");
      
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";
const symbols = "@#$%^&*()_+=-~|}{[]></-";

const allCharacters = upperCase + lowerCase + number + symbols

function generatePassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)]
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  password += number[Math.floor(Math.random() * number.length)]
  password += symbols[Math.floor(Math.random() * symbols.length)]

  while(length > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
  }
  passwordBox.value = password;
  
  
}
function copyPassword() {
  passwordBox.select();
  document.exeCommand("copy");
}
