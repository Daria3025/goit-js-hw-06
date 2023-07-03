const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector("#text");
inputEl.addEventListener('input', FontSizeChange);
function FontSizeChange() {
    textEl.style.fontSize = `${inputEl.value}px`;
}