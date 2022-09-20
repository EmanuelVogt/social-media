import React, { createContext, useCallback, useContext, useState } from 'react'

type User = {
  name: string
  email: string
  id: string
  token: string
}

type AuthContextData = {
  user: User
  silentLogin: () => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const AuthContext = createContext({} as AuthContextData)

type Props = {
  children: React.ReactNode
}

export function AuthProvider({ children }: Props): JSX.Element {
  const [user, setUser] = useState<User>({
    email: '',
    id: '',
    name: '',
    token: '',
  })

  const silentLogin = useCallback(() => {
    setUser({ email: 'any_email@mail.com', id: 'any_id', name: 'any_name', token: 'any_token' })
  }, [user])

  return <AuthContext.Provider value={{ user, silentLogin }}>{children}</AuthContext.Provider>
}

export const useAppThemeContext = (): AuthContextData => {
  return useContext(AuthContext)
}
