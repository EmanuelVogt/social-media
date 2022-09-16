import { Route, Routes } from 'react-router-dom'

import { Login } from '../pages/Login/intex'

export function LoginRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Login />} />
    </Routes>
  )
}
