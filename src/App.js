import TodoList from "./TodoList";
import React, {useState, useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    useEffect(() => {
      //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]))
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function handleClearTodos () {
      const notComplete = todos.filter(todo => !todo.complete)
      setTodos(notComplete);
    }

    function toggleTodo(id) {
      const newTodos = [...todos]
      const todo = newTodos.find( todo => todo.id === id )
      todo.complete = !todo.complete
      setTodos(newTodos)
    }

    function handleClick(e) {
      const name = todoNameRef.current.value;
      if (name === '') return
      setTodos(prevTodos => {
        return [...prevTodos, { id: uuidv4(), name: name , complete: false }]
      })
      todoNameRef.current.value = null
    }

  return (
    <>
    <div className={styles.todoContainer} >
      <TodoList todos={ todos } toggleTodo={toggleTodo} />
      <input className={styles.textInput} ref={ todoNameRef } type="text" />
      <button onClick={ handleClick }>Add Todo</button>
      <button onClick={ handleClearTodos }>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} Left</div>
    </div>
    </>
  );
}

export default App;
