'use strict';
const user = {
  name: 'Deonte Fail',
  phone: '994-982-5660',
  email: 'Deonte.Feil@hotmail.com',
  adress: {
    country: 'USA',
    city: 'South Maximoville',
  },
};
// Все, что мы делаем через createElement хранится в памяти! Создает элемент и хранит в памяти!
const profile = createUserProfile(user);
// console.log(profile);
function createUserProfile({ name, phone, email, adress }) {
  const container = document.createElement('div');
  container.classList.add('user-profile');

  const infoList = document.createElement('ul');
  infoList.classList.add('info');

  const nameField = creatInfoListItem('Name', name);
  const phoneField = creatInfoListItem('Phone', phone);
  const emailField = creatInfoListItem('Email', email);
  const adressField = creatInfoListItem(
    'Adress',
    `${adress.country}, ${adress.city}`,
  );
  infoList.append(nameField, phoneField, emailField, adressField);

  //   nameField.appendChild(label);
  //   nameField.appendChild(nameFieldTextContent);

  container.appendChild(infoList);
  //   container.append(infoList, phoneNumber); - современный метод для передачи нескольких элементов
  return container;
}

function creatInfoListItem(label, text) {
  const item = document.createElement('li');
  const itemLabel = document.createElement('b');
  itemLabel.textContent = `${label}: `;
  const itemText = document.createTextNode(text);
  item.append(itemLabel, itemText);
  return item;
}
const profileContainer = document.querySelector('.profile-container');
profileContainer.appendChild(profile);
