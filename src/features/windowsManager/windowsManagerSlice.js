import { createSlice } from '@reduxjs/toolkit'

const initialWindowState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  isOpen: false,
  isActive: true,
}

export const windowsManagerSlice = createSlice({
  name: 'windowsManager',
  initialState: [{
    name: 'Window 1',
    ...initialWindowState,
  }, {
    name: 'Window 2',
    ...initialWindowState,
  }],
  reducers: {
    openWindow: (state, action) => {
      const { name, width, height, x, y } = action.payload;
      return state.map(appWindow => {
        if (appWindow.name === name) {
          return {
            ...appWindow,
            width,
            height,
            x,
            y,
            isOpen: true,
            isActive: true,
          }
        }
        return appWindow
      });
    },

    closeWindow: (state, action) => {
      const { name } = action;
      return state.map(appWindow => {
        if (appWindow.name === name) {
          return {
            ...appWindow,
            isOpen: false,
            isActive: false,
          }
        }
        return appWindow
      })
    },

    updateWindow: (state, action) => {
      const { name, width, height, x, y } = action.payload;
      return state.map(appWindow => {
        if (appWindow.name === name) {
          return {
            ...appWindow,
            width,
            height,
            x,
            y,
          }
        }
        return appWindow
      });
    },

    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  openWindow,
  closeWindow,
  updateWindow,
  increment,
  decrement,
  incrementByAmount
} = windowsManagerSlice.actions

export default windowsManagerSlice.reducer
