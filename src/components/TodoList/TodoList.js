import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../context/context';
import TodoListItem from '../TodoListItem';

const TodoListWrapper = styled.ul`
  width: 600px;
  height: 400px;
  margin: 30px auto 40px;
  text-align: center;
  list-style: none;
`;

const TodoList = () => {
  const {todos} = useContext(TodoContext)

  const todosItems = todos.map((todo, index) => {
    return (
      <TodoListItem
      key={index + Math.random()}
      title={todo.title}
      done={todo.done}
      id={todo.id}/>
    )
  })

  return (
    <TodoListWrapper>
      {todosItems}
    </TodoListWrapper>
  )
}

export default TodoList;