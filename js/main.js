import TodoContainer from './components/todo/TodoContainer.js';

document.addEventListener('DOMContentLoaded', () => {
    const todoContainer = TodoContainer();
    console.log(todoContainer);
    todoContainer.render(document.querySelector('#app'));
});