import { UserContext } from "./UserContext"

const user = {
  id:1234,
  name:'Jose Carreño',
  email: 'ing.jcarreno@gmail.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{hola:'Mundo',user}}>
      {children}
    </UserContext.Provider>
  )
}
