const valueText = document.querySelector("#value");
const buttonIncrement = document.querySelector(
    '[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
    '[data-action="decrement"]'
);
let counterValue = 0;
function Incr() {
    counterValue += 1;
    return changeValue();
}

function Decr() {
    counterValue -= 1;
    return changeValue();
}
function changeValue() {
    return valueText.textContent = counterValue;
}
buttonDecrement.addEventListener("click", Decr);

buttonIncrement.addEventListener("click", Incr);
changeValue();
