'use strict';
const country = prompt('Введите название страны');
if (country === null || country === '') {
  console.log('Вы не ввели название страны');
} else {
  const theOurCountry = country.toLowerCase().trim();
  let theCountry;
  let theCost;
  switch (theOurCountry) {
    case 'китай':
      theCountry = 'Китай';
      theCost = 100;
      console.log(`Доставка в ${theCountry} будет стоить ${theCost}`);
      break;
    case 'южная америка':
      theCountry = 'Южная Америка';
      theCost = 250;
      console.log(`Доставка в ${theCountry} будет стоить ${theCost}`);
      break;
    case 'австралия':
      theCountry = 'Австралия';
      theCost = 170;
      console.log(`Доставка в ${theCountry} будет стоить ${theCost}`);
      break;
    case 'индия':
      theCountry = 'Индия';
      theCost = 80;
      console.log(`Доставка в ${theCountry} будет стоить ${theCost}`);
      break;
    case 'ямайка':
      theCountry = 'Ямайка';
      theCost = 120;
      console.log(`Доставка в ${theCountry} будет стоить ${theCost}`);
      break;
    default:
      console.log('В вашей стране доставка не доступна');
  }
}

// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной country, но доставка есть не везде.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.

// Формат сообщения - Доставка в [страна] будет стоить [цена]

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Южная Америка - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
// Если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'. Протестируй работоспособность кода подставив разные значения в переменную country.

// PS: используй switch

// const country = 'Индия';
