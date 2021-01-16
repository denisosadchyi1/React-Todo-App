import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddForm from "./components/AddForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/context";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('')

  useEffect(() => {
    const tmp = localStorage.getItem('todos')
    setTodos(JSON.parse(tmp))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = () => {
    const newTodo = {
      title: text,
      done: false,
      id: Math.random()
    }
    setTodos([
      ...todos,
      newTodo
    ])
    setText('')
  }

  const onKeyAdd = (key) => {
    if(key === 'Enter') {
      const newTodo = {
        title: text,
        done: false,
        id: Math.random()
      }
      setTodos([
        ...todos,
        newTodo
      ])
      setText('')
    }
  }

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onDone = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
          todo.done = !todo.done
      }
      return todo
    }))
  }

  console.log(todos)

  return (
    <TodoContext.Provider value={{
      todos, setTodos, text, 
      setText, addHandler, onKeyAdd,
      onDone, onRemove
    }}>
      <AppWrapper>
        <div>
          <TodoHeader />
          <AddForm />
          <TodoList />
        </div>
      </AppWrapper>
    </TodoContext.Provider>
  );
};

export default App;
