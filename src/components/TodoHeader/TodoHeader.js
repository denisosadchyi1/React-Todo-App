import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../context/context';

const HeaderWrapper = styled.div`
  padding-top: 20px;
  width: 600px;
  margin: 30px auto 40px;
  text-align: center;
  color: #fff;
`;

const TodoHeader = () => {
  const {todos} = useContext(TodoContext)
  return (
    <HeaderWrapper>
      <h1>You have {todos.length} todo</h1>
  </HeaderWrapper>
  )
}

export default TodoHeader;