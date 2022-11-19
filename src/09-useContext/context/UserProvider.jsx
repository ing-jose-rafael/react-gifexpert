import { useState } from "react";
import { UserContext } from "./UserContext"

const user = {
  id:1234,
  name:'Jose Carreño',
  email: 'ing.jcarreno@gmail.com'
}

export const UserProvider = ({ children }) => {
  // para establecer un usuarios desde la pagina login
  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{hola:'Mundo',user}}>
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}
