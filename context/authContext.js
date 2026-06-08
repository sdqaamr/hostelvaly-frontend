import React, { createContext, useEffect, useState } from 'react'
import { getUser, getToken, logout } from '../services/authStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAuth = async () => {
      const storedUser = await getUser()
      const storedToken = await getToken()

      setUser(storedUser)
      setToken(storedToken)
      setLoading(false)
    }

    loadAuth()
  }, [])

  const signOut = async () => {
    await logout()
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, setUser, setToken, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}