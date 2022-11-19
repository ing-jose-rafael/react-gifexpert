import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {
  const { formState, onInputChange, description, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }
    // verifica que un parametro opcional exista
    onNewTodo && onNewTodo(newTodo); 
    onResetForm()
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="¿Que hay que hacer?"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      {/* <button
        className="btn btn-outline-primary mt-2"
        onClick={onResetForm}>
        Borrar
      </button> */}
      <button
        className="btn btn-primary mt-2"
        type="submit">
        Agregar
      </button>
    </form>
  )
}
