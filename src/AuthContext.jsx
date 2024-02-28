
import React, { createContext, useState } from 'react'

export const AuthContextStatus = createContext()

function AuthContext({children}) {
    const [authorizsed, setAuthorised]= useState(true)
  return (
    <AuthContextStatus.Provider value={{authorizsed, setAuthorised}}>
        {children}
    </AuthContextStatus.Provider>
  )
}

export default AuthContext