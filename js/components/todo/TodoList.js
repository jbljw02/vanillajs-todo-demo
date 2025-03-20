import TodoItem from "./TodoItem.js";

export default function TodoList({ todoList, toggleTodo, deleteTodo }) {
    const createTodoList = () => `
        <ul class="todo-list"></ul>
    `

    const render = (container) => {
        // 컨테이너가 비어있을 때만 ul 생성
        if (!container.querySelector('.todo-list')) {
            container.innerHTML = createTodoList();
        }

        const list = container.querySelector('.todo-list');
        list.innerHTML = '';

        todoList.forEach(item => {
            TodoItem({
                item: item,
                onToggle: toggleTodo,
                onDelete: deleteTodo,
            }).render(list);
        })
    }

    return { render };
}