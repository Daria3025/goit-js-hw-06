function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = numberInput.value;
  const boxSize = 30;
  let html = '';
  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i*10;
    const color = getRandomHexColor();
    html += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
  }
  boxesEl.innerHTML = html;
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  numberInput.value = '';
}
