'use strict';
// За основу возьми домашнее задание из модуля №5, но теперь необходимо написать ES6 класс.
class Notepad {
  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };
  constructor(notes = []) {
    this._notes = notes;
  }
  set notes(value) {
    this._notes = value;
  }
  get notes() {
    return this._notes;
  }
  saveNote(note) {
    this._notes.push(note);
  }
  findNoteById(id) {
    for (const theObj of this._notes) {
      if (theObj.id === id) {
        return theObj;
      }
    }
  }
  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
  }
  filterNotesByQuery(query) {
    const newArray = [];
    for (const theObj of this._notes) {
      const title = theObj.title.toLowerCase();
      const body = theObj.body.toLowerCase();
      if (title.includes(query) || body.includes(query)) {
        newArray.push(theObj);
      }
    }
    return newArray;
  }
  filterNotesByPriority(priority) {
    const newArray = [];

    for (const theObj of this._notes) {
      if (theObj.priority === priority) {
        newArray.push(theObj);
      }
    }
    return newArray;
  }
  updateNoteContent(id, updatedContent) {
    const updateObj = Object.assign(notepad.findNoteById(id), updatedContent);
    return updateObj;
  }
  deleteNote(id) {
    for (let i = 0; i < notepad.notes.length; i += 1) {
      if (notepad.notes[i].id === id) {
        notepad.notes.splice(i, 1);
      }
    }
  }
  /*
   * Перенеси свойства и методы конструктора в класс
   *
   * Замени метод getNotes геттером, чтобы можно было обратиться как notepad.notes,
   * для этого создай свойство _notes, в котором храни массив заметок,
   * а геттер notes возвращает значение этого поля
   *
   * Добавь статическое свойство Priority используя ключевое слово static
   */
}
// Далее идет код для проверки работоспособности класса и созданного экземпляра, вставь его в конец скрипта. Твоя реализация класса Notepad должна проходить этот тест.
const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.Priority.NORMAL,
  },
];

const notepad = new Notepad(initialNotes);

/*
    Смотрю что у меня в заметках после инициализации
  */
console.log('Все текущие заметки: ', notepad.notes);

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки после добавления новых: ', notepad.notes);

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);
/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.notes,
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.notes);
