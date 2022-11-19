import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del Alma',
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos]);


  const handleNewTodo = (todo) => {
    const action = {
      type: '[Todo] Add Todo',
      payload: todo
    }
    dispatch(action);
  }
  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[Todo] Remove Todo',
      payload: id
    });
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[Todo] Toggle Todo',
      payload: id
    });
  }

  return {
    todos,
    todosCounts : todos.length,
    pendingTodosCount:todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
}
