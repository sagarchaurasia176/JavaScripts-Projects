let rangeAudio = document.getElementById("rangeAudio");
let textNumber = document.getElementById("textValue");
let passwordBox = document.getElementById("passBoxes");
let genPassword = document.getElementById("generatePassword");
let uppercase = document.getElementById("uppercase");
let LowerCase = document.getElementById("LowerCase");
let Numbers = document.getElementById("number");
let Symbol = document.getElementById("Symbol");
let copy = document.getElementById("copied");

// --------------------------------------------------------------------------------------------
// change the audio range;
textNumber.textContent = rangeAudio.value;
rangeAudio.addEventListener("input", () => {
  textNumber.textContent = rangeAudio.value;
});
//generate btn
genPassword.addEventListener("click", () => {
  passwordBox.value = gen();
}); //input symbol
let lowerChar = "abcdefghjiklmnopqrstvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";
let symbols = "~@#$%^&*";

function gen() {
  let password = "";
  let allChars = " ";
  allChars += LowerCase? lowerChar : " ";
  allChars += uppercase? upperChar : " ";
  allChars += Numbers.checked ? num : " ";
  allChars += Symbol.checked ? symbols : " ";
  // checked if
  if (allChars == " " || allChars.length==0) {
    return password;
  }

  let i = 1;
  while (i <= rangeAudio.value) {
    genPassword+= allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}
