import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  isActive: false,
  roles: [],
  info: {
    foo: 0,
  },
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
    setName: (state, action) => {
      state.userName = action.payload
    },
    setRoles: (state, action) => {
      state.roles = action.payload
    },
    addRole: (state, action) => {
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
