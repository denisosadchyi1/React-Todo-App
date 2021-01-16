import React, {useContext} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { TodoContext } from '../../context/context';

const GlobalStyles = createGlobalStyle`
  .done{
    text-decoration: line-through;
  }
`;

const TodoListItemWrapper = styled.li`
  width: 500px;
  margin: 20px auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const DeleteButton = styled.button`
  width: 35px;
  height: 35px;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-weight: 700;
`;

const CheckInput = styled.input`
  width: 20px;
  height: 20px;
`;

const TodoListItem = ({title, done, id}) => {

  const {onDone, onRemove} = useContext(TodoContext)

  const cls = done ? 'done' : ''

  return (
    <>
      <GlobalStyles />
      <TodoListItemWrapper>
        <CheckInput 
          className="CheckInput" 
          checked={done}
          type="checkbox"
          onChange={() => onDone(id)}/>
        <h3 className={cls}>{title}</h3>
        <DeleteButton 
          className="btn btn-danger"
          onClick={() => onRemove(id)}>X</DeleteButton>
      </TodoListItemWrapper>
  </>
  )
}

export default TodoListItem;