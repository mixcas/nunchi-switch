import { configureStore } from '@reduxjs/toolkit'
import windowsManagerReducer from '../features/windowsManager/windowsManagerSlice'

export default configureStore({
  reducer: {
    windowsManager: windowsManagerReducer,
  },
})
