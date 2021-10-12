// storing data in Local Storage.also used for updating

localStorage.setItem('name', 'Akin');
localStorage.setItem('age', 30);

//fetching data from the localstorage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(`My name is ${name}, and I am ${age} years old`);

const todos = [
    { text: 'Play mario', author: 'Akin' },
    { text: 'Play Shogun', author: 'Dele' },
    { text: 'Play nothing', author: 'Ola' }
]

localStorage.setItem('todos', JSON.stringify(todos));

stored = localStorage.getItem('todos');

