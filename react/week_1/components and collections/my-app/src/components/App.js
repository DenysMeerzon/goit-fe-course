import React from 'react';
import Product from './Product';
import Panel from './Panel';
import List from './List';

const App = () => (
  <div>
    <h1>Tacos title</h1>
    <List
      items={[
        { id: 'fdfd', text: 'html' },
        { id: 'dwqsq', text: 'css' },
        { id: 'bnjf', text: 'js' },
        { id: 'dfdf', text: 'react' },
      ]}
    />
    <Panel title="Panel 1">
      <Product
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
        name="Tacos With Lime"
        title="Tacos With Lime"
        price={20}
        alt="hello props"
        quantity={10}
      />
    </Panel>
    <Panel title="Panel 2">
      <h1>Bacon title</h1>
      <Product
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
        name="Bacon"
        title="Bacon"
        price={30}
        quantity={100}
      />
    </Panel>
  </div>
);

export default App;
