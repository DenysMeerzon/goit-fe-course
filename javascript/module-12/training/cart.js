const cart = {
  items: [
    { id: 1231232313, name: 'Монорельса' },
    { id: 5464564565, name: 'Аптечка' },
  ],
  add(itemName) {
    const item = {
      id: Date.now(),
      name: itemName,
    };
    this.items.push(item);
  },
  remove(id) {
    this.items = this.items.filter(item => item.id !== id);
  },
};
