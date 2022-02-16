const d = document;

const output = d.querySelector(".output input");
const generatorBtn = d.querySelector(".buttons .generator");
const copyBtn = d.querySelector(".buttons .copy");
const lengthInput = d.querySelector(".inputs .length");

const rangeInput = d.querySelector(".input-option .range");
const uppercaseCheckBox = d.querySelector(".checkbox input[id=uppercase]");
const lowercaseCheckBox = d.querySelector(".checkbox input[id=lowercase]");
const numbersCheckBox = d.querySelector(".checkbox input[id=numbers]");
const symbolsCheckBox = d.querySelector(".checkbox input[id=symbols]");

generatorBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
rangeInput.addEventListener("input", showRangeInputValue);

function generatePassword() {
      // let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lowercase = "abcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let symbols = "!@#$%^&*()";
      let password = "";

      let characters = "";
      uppercaseCheckBox.checked ? (characters += uppercase) : "";
      lowercaseCheckBox.checked ? (characters += lowercase) : "";
      numbersCheckBox.checked ? (characters += numbers) : "";
      symbolsCheckBox.checked ? (characters += symbols) : "";

      if (characters.length <= 0) {
            console.log("characters variable is Empty");
            output.value = "Select checkbox";
            focus(output, "red");
      } else {
            focus(output, "#227ccb");

            // check the length input have more than 1 length
            if (lengthInput.value.length > 0) {
                  for (let i = 0; i < lengthInput.value; i++) {
                        // lengthInput.value = rangeInput.value;
                        const randomPassword = randomPasswordGenerator(characters);

                        password += characters.substring(randomPassword, randomPassword + 1);
                        output.value = password;
                        focus(lengthInput, "green");
                  }
            } else {
                  focus(lengthInput, "red");
            }
      }
      if (
            uppercaseCheckBox.checked &&
            lowercaseCheckBox.checked &&
            numbersCheckBox.checked &&
            symbolsCheckBox.checked
      ) {
            focus(output, "green");
      }
}

// Generate random password
function randomPasswordGenerator(arr) {
      return Math.floor(Math.random() * arr.length);
}

// Copy the password in clipboard
function copyPassword() {
      if (output.value.length > 0) {
            output.select();
            output.setSelectionRange(0, 9999);
            navigator.clipboard.writeText(output.value);
      }
}

// element is the selected input
function focus(element, color) {
      element.style.borderColor = color;
      element.style.color = color;

      // setTimeout(() => {
      //       element.style.borderColor = "#227ccb";
      //       element.style.color = "#227ccb";
      // }, 2000);
}

//show the range of the range input
function showRangeInputValue() {
      lengthInput.value = rangeInput.value;
}
