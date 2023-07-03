const inputElement = document.querySelector("#validation-input");
const correctLength = Number(inputElement.dataset.length);
inputElement.addEventListener("blur", Check);
function Check() {
    if (inputElement.value.length === correctLength) {
        inputElement.classList.add("valid");
        inputElement.classList.remove("invalid");
    } else {
        inputElement.classList.add("invalid");
        inputElement.classList.remove("valid");
    }
}