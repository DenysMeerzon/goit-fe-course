'use strict';
// Объект Date

// Текущая дата
// const date = new Date();
// Расчет месяца начинается с 0

// Метод getTime() - возвращает кол-во милисекунд, которое прошло с указанного в объекте Date даты и времени, если ничего не будет указано - с 01/01/1970

// Если в объект Date передать текущую дату в милисекундах, получим полноценную дату в виде строки

//Библиотеки для работы со временем: date-fns.org, momentjs.com
// console.log(date.getTime());

// Timer
const refs = {
  startBtn: document.querySelector('button[data-action="start-timer"]'),
  stopBtn: document.querySelector('button[data-action="stop-timer"]'),
  clockFace: document.querySelector('.js-clockface'),
};

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.timerId = setInterval(() => {
      this.isActive = true;
      const currentTime = Date.now();
      this.deltaTime = currentTime - startTime;

      updateClockface(this.deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
// Функции .padStart(2,'0') и .padEnd(кол-во символов, каким символом запэдить) - для добавления дополнительных нулей/символов справа или слева
