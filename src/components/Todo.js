import React from 'react';
import styles from '../App.module.css'

function Todo({ todo, toggleTodo }) {

    function handleTodoCheck() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label className={styles.todoList}>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoCheck} />
                {todo.name}
            </label>
        </div>
    )
}

export default Todo;