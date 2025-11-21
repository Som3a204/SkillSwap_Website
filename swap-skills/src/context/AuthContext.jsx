import React, { createContext, useState } from 'react'


export const AuthContext = createContext()


export function AuthProvider({ children }) {
const [user, setUser] = useState(null) // mock "logged in" user


const login = (fakeUser) => setUser(fakeUser)
const logout = () => setUser(null)


return (
<AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
)
}