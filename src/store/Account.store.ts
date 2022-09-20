import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string,
  name: string,
  email: string,
  token: string,
  avatar: string,
  isLogged: boolean
}

export interface AccountState {
  user: User
}

const initialState: AccountState = {
  user: {
    avatar: '',
    email: '',
    id: '',
    name: '',
    isLogged: false,
    token: '',
  }
}

export const account = createSlice({
  name: 'account',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AccountState>) {
      state.user = action.payload.user
    },
    logout(state) {
      state = initialState
    }
  }
})

export const { login, logout } = account.actions