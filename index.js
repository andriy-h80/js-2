// 1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
// через prompt и вызывает callback функцию
// greet(name) - коллбек принимающий имя и логирующий в консоль
// строку "Привет <name>"
// Реализуй проверку, что prompt не пустой
// ++++++++++++++++++++++++++++++++++++++++++

// function letMeSeeYourName(callback) {
//     const name = prompt('What is your name?');
//     callback(name);
// }
// function greet(name) {
//     console.log(`Привет ${name}`);
// }

// letMeSeeYourName(greet);

//====================================================
//====================================================

// 2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль
//++++++++++++++++++++++++++++++++++++++++++

// function makeProduct(name, price, callback) {
//     const product = {
//         name,
//         price,
//         id: Math.random()
//     }

//     callback(product);

// }

// function showProduct(product) {
//     console.log(product);
// }

// makeProduct('apple', 100, showProduct);

//====================================================
//====================================================

// 3. Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове
//Функция makeDish должна логировать "<shef> is cooking <dish>"
//++++++++++++++++++++++++++++++++++++++++++

// const makeShef = function (shefName) {
//     const makeDish = dish => {
//         console.log(`${shefName} is cooking ${dish}`);
//     }
//     return makeDish;
// };

// const shef1 = makeShef('Andrii');
// const shef2 = makeShef('Natalia');

// shef2('Pasta');
// shef1('Rizotto');

//====================================================
//====================================================

// 4. Исправьте ошибки, чтобы код работал

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//====================================================
//====================================================

// 5. Исправьте чтобы код работал

// function callAction(action) {
//     action()
// }

// const item = {
//     getQuantity() {
//         console.log(this.quantity);
//     },
//     quantity: 5,
// }

// callAction(item.getQuantity.bind(item));

//====================================================
//====================================================

// 6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функция должна умножать элементы на 2
//++++++++++++++++++++++++++++++++++++++++++

// function each(array, callback) {
//     return array.map(element => callback(element))

// }

// function multiple(element) {
//     return element * 2;
// }

// const array = [3, 5, 6, 34, 8, 83, 12, 34];
// console.log(each(array, multiple));

//====================================================
//====================================================

// 7. Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов
//++++++++++++++++++++++++++++++++++++++++++

// function makeCounter() {
//     let total = 0;
//     const calc = () => {
//         total += 1;
//         console.log(total);
//     };
//     return calc;
// };

// const counter = makeCounter()
// counter();
// counter();
// counter();

//====================================================
//====================================================

// 8. Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает
//++++++++++++++++++++++++++++++++++++++++++

// const savePassword = (password) => {
//     const checkPassword = (newPassword) => console.log(newPassword === password);
//     return checkPassword;
// };

// const password1 = savePassword('qwe123');

// password1('qwerty');
// password1('qwe123');

// console.log(savePassword('qwe123')('qwerty'));
// console.log(savePassword('qwe123')('qwe123'));

//====================================================
//====================================================

// 9. Напишите функцию для хранения скидки. Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.
//++++++++++++++++++++++++++++++++++++++++++

// function makeDiscount(discount) {
//     const sum = (price) => console.log(price - price * discount);
//     return sum;
// };

// const discount10 = makeDiscount(0.1);
// discount10(1000);

//====================================================
//====================================================

// 10. Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами

//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у неe ${} публикаций.`

// const User = function (obj) {
//     const { userName, age, numbersOfPost } = obj;
//     this.userName = userName;
//     this.age = age;
//     this.numbersOfPost = numbersOfPost;
// }

// User.prototype.getInfo = function () {
//     console.log(
//         `Пользователю ${this.userName} ${this.age} лет и у неe ${this.numbersOfPost} публикаций.`
//     );
// }

// const mango = new User({ userName: 'Natalia', age: 18, numbersOfPost: 987 });
// mango.getInfo();

//====================================================
//====================================================

// 10. Напиши функцию конструктор Storage который создаёт объекты
//для управления складом товаров.
//При вызове будет получать один агрумент - начальный массив товаров,
//и записывать его в свойство items.
//Добавь методы класса:
//getItems() - возвращайте массив товаров
//addItems(item) - получает новый товар и добавляет его к текущим
//removeItem(item) - плучает товар и, если он есть, удаляет его из текущих
//++++++++++++++++++++++++++++++++++++++++++

//====================================================
//====================================================

// 11. Напиши класс Client который создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email
//++++++++++++++++++++++++++++++++++++++++++

class Client {}

//====================================================
//====================================================

// 12. Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами text priority
//Добавь классу статическое свойство Priopity,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(text)
//updatePriority(text, newPriority)
//+++++++++++++++++++++++++++++++++++++++++++

class Notes {}

//====================================================
//====================================================

// 13.
// Создай класс для калькулятора, который имеет следующие методы:
// метод number, который принимает начальное значение для последующих операций
// геттер, который возвращает финальный результат всех операций, проведенных с числом
// методы add, substruct, divide, multiply
// объект класса может проводить последовательные операции в виде цепочки
// +++++++++++++++++++++++++++++++++++++++++++++++++++

class Calculator {}

// const calculator = new Calculator();
// const res = calculator
// .number(10)
// .add(10)
// .divide(2)
// .multiply(4)
// .substruct(5)
// .result;

// console.log(res); // 35

// const res2 = calculator
// .number(20)
// .substruct(40)
// .multiply(-8)
// .divide(160)
// .add(20)
// .result;

// console.log(res2) // 21

//====================================================
//====================================================

// 14. Создать класс Worker у которого есть свойства name, age, salary.
//У класса Worker есть метод getSalary.
//Создать класс TopLevelWorker у которого есть свойство hierarchyLevel
//и который наследует класс Worker, добавляя метод getHierarchyLevel
//Реализовать задачу с помощью ES5 прототипов и ES6 классов

// const HIERARCHY_LEVEL = {
//     TOP: 'top',
//     REGULAR: 'regular',
// }

// const workerObj = {
//     name: 'Mango',
//     surname: 'Worker',
//     age: 30,
//     position: 'FE developer',
//     salary: 5000,
// }

//ES5

// const Worker = function (obj = {}) {}

//++++++++++++++++++++++++++++++++++++++

/*
Задача 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (подивіться на елементи розмітки в html файлі)
*/

// const alertButtonEl = document.querySelector('#alertButton');
// const alertInputEl = document.querySelector('#alertInput')

// alertButtonEl.addEventListener('click', onButtonClick)

// function onButtonClick() {
//     alert(alertInputEl.value);
// }

// Задача 2
// При натисканні на кнопку "SWAP ME" виконується обмін змісту між двома інпутами.
// Можна нажимати на неї декілька разів або вручну змінити вміст інпутів. * /

// const swapButton = document.querySelector(`#swapButton`);

// const inputElOne = document.querySelector("[data-type = 'left']");
// const inputElTwo = document.querySelector("[data-type = 'right']");

// swapButton.addEventListener('click', onButtonClick)

// function onButtonClick() {
//     const value = inputElOne.value;
//     inputElOne.value = inputElTwo.value;
//     inputElTwo.value = value;

// }

// console.log(inputElOne.dataset.type)

/*
Задача 3
Кнопка "Hide" ховає текст (замість літер - зірочки) і заміняє назву кнопки на
"Show", при повторному натисканні текст знову стає доступний (замість зірочок - літери) і кнопка приймає початковий вигляд.
*/

// const inputRef = document.querySelector('[data-target="passwordInput"]')
// const buttonRef = document.querySelector('#passwordButton')

// buttonRef.addEventListener('click', onButtonClick)

// function onButtonClick(event) {
//     if (inputRef.type === 'password') {
//         inputRef.type = 'text'
//         buttonRef.textContent = 'hide'
//     } else {
//         inputRef.type = 'password'
//         buttonRef.textContent = 'show'
//     }
// }

/*
Задача 4
Кнопка "Decrease" робить квадрат меньше на 10 пікселів, кпопка "Increase" - більше на 10 пикселів.
*/

// const boxRef = document.querySelector('#box');

// const buttonDecRef = document.querySelector('[data-type="decrease"]');
// const buttonIncRef = document.querySelector('[data-type="increase"]');

// buttonDecRef.addEventListener('click', onButtonDecClick);
// buttonIncRef.addEventListener('click', onButtonIncClick);

// function onButtonDecClick(event) {
//     // console.log(boxRef.offsetWidth);
//     boxRef.style.width =`${boxRef.offsetWidth - 10}px`;
//     boxRef.style.height =`${boxRef.offsetHeight - 10}px`;
// };

// function onButtonIncClick(event) {
//     boxRef.style.width =`${boxRef.offsetWidth + 10}px`;
//     boxRef.style.height =`${boxRef.offsetHeight + 10}px`;
// };

// Задача 5
// Додайте слухача по кліку та визначте, коли клік відбувається
// в середині елемента з id "place" і коли клік відбувається поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

// const placeEl = document.querySelector('#place');

// document.addEventListener('click', event => {
//     if (placeEl.contains(event.target)) {
//         console.log('Бінго!!!!!!!!!')
//     } else {
//         console.log('Мимо :(')
//     }
// });

/*
Задача 6
По кліку на кнопку "Double" збільшіть значення
в кожному елементі списку у 2 рази
*/

// const doubleButton = document.querySelector('#double');
// const listEl = document.querySelectorAll('.listItem')

// doubleButton.addEventListener('click', onDoubleButtonClick)

// function onDoubleButtonClick() {

//     listEl.forEach(element => element.textContent *= 2)
// }

/**
 * ЗАДАЧА 8
 * Створи перелік справ.
 * Є  інпут, в який вноситься зміст задачі.
 * При натисканні на кнопку "Додати" задача додається в список #list.
 * Поруч з кожною задачею знаходится кнопка "Видалити", щоб можна було
 * видалити цю задачу із списку.
 * Список з задачами має бути доступним післе перезавантаження сторінки.
 */

const taskForm = document.querySelector('#task-form')
const taskList = document.querySelector('#task-list')
const addButton = taskForm.querySelector('[type="submit"]')

taskForm.addEventListener('submit', onButtonClick)
taskList.addEventListener('click', onDeleteClick)
taskForm.addEventListener('input', onFormInput)

const arrayTask = []

function onFormInput(e) {
    if (!e.target.value.trim()) {
        addButton.disabled = true
    } else {
        addButton.disabled = false
    }
}

function onButtonClick(event) {
    event.preventDefault()

    const taskText = event.target.elements.taskName.value
    // console.log(taskText);

    const id = Date.now()

    taskList.insertAdjacentHTML(
        'beforeend',
        `<li data-id='${id}' class='list__item'><p>${taskText}</p><button type='button'>DELETE</button></li>`
    )

    arrayTask.push({ id, taskText })

    localStorage.setItem('listName', JSON.stringify(arrayTask))

    event.target.reset()
}

function onDeleteClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return
    }

    const id = event.target.closest('li').dataset.id

    event.target.closest('li').remove()

    const parsedDataFromLS = JSON.parse(localStorage.getItem('listName'))

    const filteredData = parsedDataFromLS.filter(
        (element) => element.id !== Number(id)
    )

    localStorage.setItem('listName', JSON.stringify(filteredData))

    console.log(parsedDataFromLS)
}

function initListTasks() {
    addButton.disabled = true

    console.log(addButton.disabled);
    try {
        const parsedDataFromLS = JSON.parse(localStorage.getItem('listName'))
        parsedDataFromLS.forEach((element) =>
            taskList.insertAdjacentHTML(
                'beforeend',
                `<li data-id='${element.id}' class='list__item'><p>${element.taskText}</p><button type='button'>DELETE</button></li>`
            )
        )
    } catch (error) {
        console.log(error.message)
    }
}

initListTasks()
