import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../constants/breakpoint";
import { ReactComponent as CheckedTodo } from "../images/checked.svg";
import { ReactComponent as UncheckedTodo } from "../images/unchecked.svg";

const TodoButtonWrapper = styled.div`
  display: none;
`;

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  padding: 8px 0px;
  height: 40px;
  word-break: break-word;
  width: 100%;
  border-bottom: 0.3px solid #808080;

  &:hover {
    ${TodoButtonWrapper} {
      display: inline-block;
      transition: all 0.5s ease;
    }
  }
`;

const TodoItemLeft = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 8px;
  width: 40px;
  height: 40px;

  svg {
    /* width: 90%;
    height: 90%;
    object-fit: cover; */

    & path {
      fill: grey;
    }
  }
`;

const TodoContent = styled.input`
  color: #000000;
  font-size: 1.3rem;
  word-break: break-word;
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  background-color: rgba(241, 250, 250, 0.8);
  opacity: 0.4;

  ${(props) =>
    props.$isDone &&
    `
    text-decoration: line-through;
    color: red;
  `};

  ${MEDIA_QUERY_MD} {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  margin-right: 6px;
  cursor: pointer;
  font-size: 1.3rem;
  height: 2.4rem;
  border: none;
  border-radius: 5px;
  color: grey;
  background-color: #ffcccc;
  outline: none;
  padding: 0.2rem 0.8rem;

  &:hover {
    filter: brightness(105%);
  }

  &:active {
    transform: translate(0, 0.2rem);
  }

  ${MEDIA_QUERY_MD} {
    font-size: 1rem;
  }
`;

const DeleteTodoButton = styled(Button)`
  background-color: #ff8c99;
  color: #f5f5f5;

  ${MEDIA_QUERY_MD} {
    font-size: 1rem;
  }
`;

export default function TodoItem({
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
  handleEditTodo,
}) {
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id);
  };

  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id);
  };

  return (
    <TodoItemWrapper data-todo-id={todo.id}>
      <TodoItemLeft>
        <ImageWrapper onClick={handleToggleClick}>
          {todo.isDone ? <CheckedTodo /> : <UncheckedTodo />}
        </ImageWrapper>
        <TodoContent
          type="text"
          id={todo.id}
          value={todo.content}
          readOnly={todo.isDone}
          onChange={handleEditTodo}
        />
      </TodoItemLeft>
      <TodoButtonWrapper>
        <DeleteTodoButton onClick={handleDeleteClick}>刪除</DeleteTodoButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}
