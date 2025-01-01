window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// script.js

// Функция для генерации случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Переменные для хранения текущих настроек
let minRange = 1;
let maxRange = 6;
let staticBonus = 0;

// Функция для установки диапазона при выборе D6 или D20
function SelectMath(min, max, checkboxId) {
    const d6Checkbox = document.getElementById('D6');
    const d20Checkbox = document.getElementById('D20');
    if (checkboxId === 'D6') {
        d20Checkbox.checked = false;
    } else if (checkboxId === 'D20') {
        d6Checkbox.checked = false;
    }
    minRange = min;
    maxRange = max;
}

// Обработчик для кнопки изменения опций
const changeOptionsButton = document.getElementById('changeOptions');
changeOptionsButton.addEventListener('click', () => {
    const minInput = document.getElementById('min').value;
    const maxInput = document.getElementById('max').value;

    minRange = parseInt(minInput, 10);
    maxRange = parseInt(maxInput, 10);

    const d6Checkbox = document.getElementById('D6');
    const d20Checkbox = document.getElementById('D20');

    d6Checkbox.checked = false;
    d20Checkbox.checked = false;
});

// Обработчик для кнопки генерации
const generateButton = document.getElementById('Generate');
generateButton.addEventListener('click', () => {
    const staticBonusInput = document.querySelector('.static-bonus input').value;
    staticBonus = parseInt(staticBonusInput, 10) || 0;

    const randomNumber = getRandomInt(minRange, maxRange) + staticBonus;

    document.getElementById('output').textContent = `Результат: ${randomNumber}`;
});

const checkboxDiv = document.querySelector(".checkbox");
const editedDiv = document.querySelector(".edited");
const changeOptions = document.getElementById(".changeOptions");

function Togle() {
    checkboxDiv.classList.toggle("disabled");
    editedDiv.classList.toggle("disabled");
  };
