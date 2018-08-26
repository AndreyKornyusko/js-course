'use strict';

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const clockface = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const stopBtn = document.querySelector('.js-reset');
const lapList = document.querySelector('.js-laps');

const timer = {
  startTime: null,
  deltaTime: 0,
  id: null,
  isActive: false,
  lapArray: [],
  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.startTime = Date.now() - this.deltaTime;
    this.id = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;
      updateClockface(clockface, this.deltaTime);
    }, 100);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.id);
  },
  reset() {
    this.stop();
    this.deltaTime = 0;
    updateClockface(clockface, this.deltaTime);
    startBtn.textContent = 'Start';
    lapList.innerHTML = '';
    this.lapArray = [];
  },
  lap() {
    lapList.insertAdjacentHTML('afterbegin', '<li class="js-laps-item"></li>');
    const lapsItem = document.querySelector('.js-laps-item');
    updateClockface(lapsItem, this.deltaTime);
    this.lapArray.push(this.deltaTime);
    console.log(this.lapArray);
  },
};

function getFormattedTime(ms) {
  const date = new Date(ms);
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  let milliseconds = String(date.getMilliseconds()).slice(0, 1);
  return `${minutes}:${seconds}.${milliseconds}`;
}

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/

function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}

function startBtnOnClick(event) {
  event.preventDefault();
  setActiveBtn(event.target);
  if (!timer.isActive) {
    timer.start();
    startBtn.textContent = 'Pause';
  } else {
    timer.stop();
    startBtn.textContent = 'Continue';
  }
}

function stopBtnOnClick(event) {
  setActiveBtn(event.target);
  timer.reset();
}

function lapBtnOnClick(event) {
  setActiveBtn(event.target);
  timer.lap();
}

startBtn.addEventListener('click', startBtnOnClick);
lapBtn.addEventListener('click', lapBtnOnClick);
stopBtn.addEventListener('click', stopBtnOnClick);

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if (target.classList.contains('active')) {
    return;
  }

  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  lapBtn.classList.remove('active');

  target.classList.add('active');
}
