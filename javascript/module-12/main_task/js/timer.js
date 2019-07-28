'use strict';
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }
  start() {
    this.timerId = setInterval(() => {
      this.currentTime = Date.now();
      this.deltaTime = this.targetDate - this.currentTime;
      this.updateClockface(this.deltaTime);
    }, 1000);
  }
  updateClockface(time) {
    this.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = this.days;
    refs.hours.textContent = this.hours;
    refs.mins.textContent = this.mins;
    refs.secs.textContent = this.secs;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 17, 2019'),
});
