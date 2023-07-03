const inputText = document.querySelector('#name-input');
const greetName = document.querySelector('#name-output');
inputText.addEventListener('input', Greeting);
function Greeting() {
    if (inputText.value) {
        greetName.textContent = inputText.value;
    } else {
        return greetName;
    }
}
