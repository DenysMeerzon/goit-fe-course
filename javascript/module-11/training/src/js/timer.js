// export default class Timer {
//   constructor({ element, initialValue = 0, step = 1 }) {
//     this.value = initialValue;
//     this.step = step;
//     this.refs = {
//       decBtn: element.querySelector('button[data-action="decrement"]'),
//       incBtn: element.querySelector('button[data-action="increment"]'),
//       clockface: element.querySelector('div.value'),
//     };
//     this.bindEvents();
//   }
//   increment() {
//     this.value += this.step;
//     this.updateClockFace();
//   }
//   decrement() {
//     this.value -= this.step;
//     this.updateClockFace();
//   }
//   updateClockFace() {
//     this.refs.clockface.textContent = this.value;
//   }
//   bindEvents() {
//     this.refs.decBtn.addEventListener('click', this.decrement.bind(this));
//     this.refs.incBtn.addEventListener('click', this.increment.bind(this));
//   }
// }
