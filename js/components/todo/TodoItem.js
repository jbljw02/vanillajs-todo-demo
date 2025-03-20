export default function TodoItem({ item, onToggle, onDelete }) {
    const render = (container) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.dataset.id = item.id;

        li.innerHTML = `
            <div class="todo-content">
                <input 
                    type="checkbox" 
                    class="todo-checkbox"
                    ${item.completed ? 'checked' : ''}>
                <span class="todo-text">${item.label}</span>
            </div>
            <button class="delete-btn">삭제</button>
        `;

        const checkbox = li.querySelector('.todo-checkbox');
        const deleteBtn = li.querySelector('.delete-btn');

        // 이벤트 리스너 추가
        checkbox.addEventListener('change', () => onToggle(item.id));
        deleteBtn.addEventListener('click', () => onDelete(item.id));

        container.appendChild(li);
        return li;
    }

    return { render };
}