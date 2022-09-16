import { useEffect, useState } from 'react'

import { AuthRoutes } from './AuthRoutes'
import { LoginRoutes } from './LoginRoutes'

export function AppRoutes(): JSX.Element {
  const [userLogged, setUserLogged] = useState<boolean>()

  useEffect(() => {
    setUserLogged(false)
  }, [])

  return (userLogged ?? false) ? <AuthRoutes /> : <LoginRoutes />
}
