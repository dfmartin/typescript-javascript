import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  username: string
  isActive: boolean
  roles: string[]
}

const initialState: User = {
  username: '',
  isActive: false,
  roles: [],
}

export const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    activate: state => {
      state.isActive = true
    },
    deactivate: state => {
      state.isActive = false
    },
    toggleActive: state => {
      state.isActive = !state.isActive
    },
    setName: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setRoles: (state, action: PayloadAction<string[]>) => {
      state.roles = action.payload
    },
    addRole: (state, action: PayloadAction<string>) => {
      if (
        action.payload.trim().length > 0 &&
        !state.roles.includes(action.payload)
      ) {
        state.roles.push(action.payload)
      }
    },
  },
})

export const actions = userSlice.actions
