'use strict';
// const guest = 'Petro';
// const fantasy = 'film';
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// console.log(hotel);
// console.log(hotel['name']);
// console.log(hotel.name);
// console.log(hotel['stars']);
// hotel.name = 'Coastline Resort';
// console.log(hotel.name);
// console.log(hotel['name']);
// hotel['name'] = 'Stardust Hotel';
// console.log(hotel.name);
// console.log(hotel['name']);
// hotel.adress = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';
// console.log(hotel.manager);
// console.log(hotel['adress']);
// console.log(hotel);
// delete hotel.name;
// console.log(hotel);
// delete hotel['stars'];
// console.log(hotel);
// console.log(hotel.capacity);
// console.log(hotel['stars']);
// const shop = {
//   guest,
//   fantasy,
// };
// console.log(shop);
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  greetInES5: function() {
    console.log('Welcome!');
  },
  greetInES6() {
    console.log('Welcome!');
  },
};
hotel.greetInES5();
hotel.greetInES6();
