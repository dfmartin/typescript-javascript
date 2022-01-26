import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from './Users/state'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector
