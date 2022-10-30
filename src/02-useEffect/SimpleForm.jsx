import { useEffect, useState } from "react"

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username:'strider',
    email:'strider@test.com'
  });

  const { username,email } = formState;

  const onInputChange = ({target}) => {
    const{ name, value}= target;
    // propiedades computadas de los objetos
    setFormState({
      ...formState,
      [name]:value
    })
  }
  // se dispara solo una vez
  useEffect(() => {
    console.log('useEffect called!');
  },[])
  // se dispara cuando hay cambios en el formState
  useEffect(() => {
    console.log('formState change!');
  },[formState])
  // se dispara cuando hay cambios en el email
  useEffect(() => {
    console.log('email change!');
  },[email])
  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input 
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ onInputChange }
      />
      <input 
        type="email" 
        className="form-control mt-2"
        placeholder="ing.jcarreno@gmail.com"
        name="email"
        value={email}
        onChange={ onInputChange }
      />
    </>
  )
}
