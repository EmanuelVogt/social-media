import { useDispatch } from 'react-redux'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { account } from './Account.store'
export const store = configureStore({
  reducer: {
    account: account.reducer
  },
})

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch<AppDispatch>
