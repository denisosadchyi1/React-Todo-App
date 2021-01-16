import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../context/context';

const AddFormWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
`;

const AddInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #ffc107;
  outline: none;
  font-size: 25px;
  background: transparent;
  color: #fff;
`;

const AddButton = styled.button`
  width: 150px;
  color: black;
  font-weight: 700;
  color: darkblue;
`;  

const AddForm = () => {
  const {text, setText, addHandler, onKeyAdd} = useContext(TodoContext)

  return (
    <AddFormWrapper>
      <AddInput 
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => onKeyAdd(e.key)}/>
      <AddButton 
        className="btn btn-warning"
        onClick={() => addHandler()}>Add Todo</AddButton>
  </AddFormWrapper>
  )
}

export default AddForm;