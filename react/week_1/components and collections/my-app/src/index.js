// Дефолтный экспорт - стандарт для работы с React-приложением
import React from 'react';
// Дефолтный экспорт - для рендера элемента в DOM-дерево
import ReactDOM from 'react-dom';
// Дефолтный экспорт пакет prop-types (для проверки типов получаемых пропов)
import PropTypes from 'prop-types';
// Дефолтный экспорт компонента
import App from './components/App';

// Функция для создания React-элементов
// React.createElement(type, props, child, child, ...)
// type - имя встроенного React-компонента, который соответствует HTML тегу в Virtual DOM
// props - объект содержащий HTML-атрибуты и кастомные свойства. Может быть null или пустой объект, если пропов нет.
// child - принимает произвольное кол-во аргументов после второго, все они описывают детей создаваемого элемента.
// const image = React.createElement("img", {
//   src:
//     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640",
//   alt: "Tacos With Lime",
//   width: 640
// });
// const title = React.createElement("h2", null, "Tacos With Lime");
// const price = React.createElement("p", null, "Price: 10$");
// const button = React.createElement("button", { type: "button" }, "Add to cart");
// Вложение детей в родителя
// const product = React.createElement("div", null, image, title, price, button);

// Вложение детей в родителя с помощью свойства 'children'
// const productWithChildrenInProps = React.createElement("div", {
//   children: [image, title, price, button]
// });

// JSX формат описания разметки, более удобный (наглядный) для разработки
// const product = (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     ></img>
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// Для рендера элемента в DOM-дерево
// ReactDOM.render(product, document.getElementById("root"));

// Если необходимо задать класс, либо атрибут составной, используем кемелКейс. Например: className = "image"

// Правило общего родителя, в JSX (если мы что-то возвращаем, обязательно должен быть "родитель")
// const post = (
//   <div>
//     <h2>Post Header</h2>
//     <p>Post text</p>
//   </div>
// );
// Правило общего родителя, с помощью фрагмента, в месте дефолтного импорта изменяется синтаксис - import React, { Fragment } from 'react';
// const post = (
//   <Fragment>
//     <h2>Post Header</h2>
//     <p>Post text</p>
//   </Fragment>
// );
// Правило общего родителя, с помощью фрагмента (современный синтаксис)
// const post = (
//   <>
//     <h2>Post Header</h2>
//     <p>Post text</p>
//   </>
// );
// Функциональные компоненты - это JavaScript функции
// const MyFunctionalComponent = props => <div>Functional Component</div>;
// const Product = props => (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     ></img>
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// const App = () => (
//   <div>
//     <h1>Top Products</h1>
//     <Product name="Tacos With Lime" />
//   </div>
// );
// const Product = ({ imgUrl, alt, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={alt} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// const App = () => (
//   <div>
//     <h1>Top Products</h1>
//     <Product
//       imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       name="Tacos With Lime"
//       price={10}
//     />
//     <Product
//       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
//       alt="Fries and Burger"
//       name="Fries and Burger"
//       price={20}
//     />
//   </div>
// );
// Композиция компонентов
// const Profile = ({ name, email }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Email: {email}</p>
//   </div>
// );
// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );
// const App = () => (
//   <div>
//     <Panel title="User Profile">
//       <Profile name="Mango" email="mango@gmail.com" />
//     </Panel>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("root"));

// const Product = ({ imgUrl, alt, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={alt} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// Для указания свойства по умолчанию, используем статическое свойство
// Product.defaultProps = {
//   alt: "product image"
// };
// ReactDOM.render(
//   <Product
//     imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
//     name="Tacos With Lime"
//     price={10}
//   />,
//   document.getElementById("root")
// );
// Проверка типов получаемых пропов
// const Product = ({ imgUrl, alt, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={alt} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// Product.defaultProps = {
//   alt: "product image"
// };
// Product.propTypes = {
//   imgUrl: PropTypes.string.isRequired,
//   alt: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired
// };
ReactDOM.render(<App />, document.getElementById('root'));
