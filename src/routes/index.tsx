import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Backdrop, CircularProgress } from '@mui/material'
import axios from 'axios'

import { RootState } from '../store'
import { login } from '../store/Account.store'

import { AuthRoutes } from './AuthRoutes'
import { LoginRoutes } from './LoginRoutes'

export function AppRoutes(): JSX.Element {
  const [load, setLoad] = useState(true)
  const account = useSelector((state: RootState) => state.account)
  const dispatch = useDispatch()

  const BackDrop = (): JSX.Element => {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={load}>
        <CircularProgress color='inherit' />
      </Backdrop>
    )
  }
  useEffect(() => {
    const token = localStorage.getItem('@API_TOKEN')
    if (token != null) {
      axios
        .post('http://localhost:3030/api/token-login', { token })
        .then((data) => {
          dispatch(
            login({
              user: {
                avatar: '',
                email: data.data.account.email,
                id: data.data.account.id,
                isLogged: true,
                name: data.data.account.name,
                token: data.data.account.accessToken,
              },
            }),
          )
          setLoad(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    setLoad(false)
  }, [])

  if (load) {
    return <BackDrop />
  }

  return account.user.isLogged ?? false ? <AuthRoutes /> : <LoginRoutes />
}
