export default function TodoForm({ addTodo }) {
    console.log("A")
    const createTodoForm = () => `
        <form class="todo-form">
            <input class="todo-input" type="text" placeholder="할 일을 입력하세요" required />
            <button class="todo-delete" type="submit">추가</button>
        </form>
    `

    const addEventListeners = (form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const input = form.querySelector('.todo-input');
            const text = input.value.trim();

            // 새로운 할 일 객체
            const newTodo = {
                id: Date.now(),
                label: text,
                completed: false,
            }

            addTodo(newTodo); // 할 일 추가
            input.value = ''; // 입력창 초기화
        })
    }

    const render = (container) => {
        container.innerHTML = createTodoForm();

        // 폼에 이벤트 리스너 추가
        const form = container.querySelector('.todo-form');
        addEventListeners(form);

        return form;
    }

    return { render };
}