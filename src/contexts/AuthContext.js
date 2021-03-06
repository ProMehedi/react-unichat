import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      setUser(data)
      setLoading(false)
      if (data) {
        history.push('/chats')
      }
    })
  }, [user, history])

  const value = { user }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
