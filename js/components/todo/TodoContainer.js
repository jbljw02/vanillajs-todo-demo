import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function TodoContainer() {
    const createTodoContainer = () => `
        <div class="todo-container">
            <header class="todo-header">
                <h1>To do List</h1>
            </header>
            <div id="todo-form-container"></div>
            <div id="todo-list-container"></div>
        </div>
    `;

    // { id: number, label: string, completed: boolean }
    let todoList = [];
    let containerElement = null;

    // 할 일 토글
    const toggleTodo = (id) => {
        todoList = todoList.map(item => (
            item.id === id ?
                { ...item, completed: !item.completed }
                : item
        ));
        render(containerElement);
    };

    // 할 일 추가
    const addTodo = (todo) => {
        todoList.push(todo);
        console.log(todoList)
        render(containerElement);
    };

    // 할 일 삭제
    const deleteTodo = (id) => {
        todoList = todoList.filter(item => item.id !== id);
        render(containerElement);
    };

    const render = (container) => {
        containerElement = container; // #app 요소

        // 초기 컨테이너 생성
        if (!container.querySelector('.todo-container')) {
            container.innerHTML = createTodoContainer();
        }

        const todoContainer = container.querySelector('.todo-container');

        // TodoForm, TodoList 렌더링
        TodoForm({ addTodo }).render(
            todoContainer.querySelector('#todo-form-container')
        );
        TodoList({ todoList, toggleTodo, deleteTodo }).render(
            todoContainer.querySelector('#todo-list-container')
        );
    };

    return { render };
}