import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
  // sacando la informacion del context 
  const {setUser, user} = useContext(UserContext);
  // console.log(hola, user);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {JSON.stringify(user,null,3)}
      </pre>

      <button className="btn btn-dark" onClick={() => setUser({id:123,name:'Jose'})}>
        Establecer usuario
      </button>
    </>
  )
}
