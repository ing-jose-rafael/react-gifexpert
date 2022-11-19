// import { useEffect, useReducer } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
// import { todoReducer } from "./todoReducer";

// const initialState = [
//   // {
//   //   id: new Date().getTime(),
//   //   description: 'Recolectar la piedra del Alma',
//   //   done: false,
//   // },
// ];
// const init = () => {
//   return JSON.parse(localStorage.getItem('todos')) || [];
// }


export const TodoApp = () => {
  const { todos, todosCounts,pendingTodosCount,handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()
  // const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  // cuando los todos cambias tengo que ejecutar algo
  // useEffect(() => {
  //   localStorage.setItem('todos',JSON.stringify( todos ) || []);
  // }, [todos])
  
  // const handleNewTodo = (todo) => {
  //   const action = {
  //     type: '[Todo] Add Todo',
  //     payload: todo
  //   }
  //   dispatch(action);
  // }
  // const handleDeleteTodo = (id) => {
  //   dispatch({
  //     type:'[Todo] Remove Todo',
  //     payload: id
  //   });
  // }

  // const handleToggleTodo = (id) => {
  //   dispatch({
  //     type:'[Todo] Toggle Todo',
  //     payload: id
  //   });
  // }
  
  return (
    <>
      <h1>TodoApp: {todosCounts} <small>pendientes: {pendingTodosCount}</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
         <TodoList todos={todos} onDeleteTodo = { handleDeleteTodo } onToggleTodo = { handleToggleTodo }/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo = { handleNewTodo }/>
        </div>
      </div>
    </>
  )
}
