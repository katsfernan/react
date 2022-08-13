import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   id:123,
//   username: 'kathsfernan',
//   email:'fmartinezr195@gmail.com'
// }

export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState();

  const LoginUser = () => 'TODO'

  return (
    <UserContext.Provider value={ { user, setUser }}>
        { children }
    </UserContext.Provider>
    )
}
