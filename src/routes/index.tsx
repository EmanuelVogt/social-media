import { Route, Routes } from 'react-router-dom'

import { Account } from '../pages/Account'
import { Home } from '../pages/Home'
export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<h1> Contatos </h1>} />
      <Route path='/inbox' element={<h1> Inbox </h1>} />
      <Route path='/account' element={<Account />} />
    </Routes>
  )
}
