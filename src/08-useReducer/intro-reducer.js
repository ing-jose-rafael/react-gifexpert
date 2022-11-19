const initialState = [{
  id:1,
  todo: 'Recolectar la piedra del Alma',
  done:false,
}];
/**
 * consideraciones de los reducer 
 * 1 todo lo debe resolver internamente si llamar en su cuerpo otras funciones
 * 2 no debe realizar tareas asíncronas 
 * 3 debe realizar siempre un estado nuevo 
 * 4 no debe llamar el localStore o sessionStorage
 * @param {*} state estado inicial
 * @param {*} action 
 * @returns 
 */
const todoReducer = ( state = initialState, action = {}) => {
  
  if (action.type === '[TODO] add todo') {
    return [ ...state, action.payload];
  }

  // siempre tiene que regresar el estado (el objeto)
  return state; // como se encuantra la aplicación
}

let todos = todoReducer();
/**
 * Si quiero agregar una nueva tarea, esto no lo 
 * debería hacer por que las mutaciones no redibuja nada
 */
// todos.push({
  //   id:2,
  //   todo: 'Recolectar la piedra del poder',
  //   done:false,
  // });
  
const newTodo = {
  id:2,
  todo: 'Recolectar la piedra del poder',
  done:false,
};
const addTodoAction = {
  type:'[TODO] add todo',
  payload: newTodo, // no siempre va 
};
  
todos = todoReducer(todos,addTodoAction);
console.log(todos);