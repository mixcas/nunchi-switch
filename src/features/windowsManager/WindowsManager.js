import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWindow } from './windowsManagerSlice'
import styled from 'styled-components';
import Window  from 'components/CustomWindow'
import {
    WindowContent,
    WindowHeader,
    Button,
    Toolbar,
    Panel
} from 'react95';
import { openWindow } from './windowsManagerSlice'

const WindowsManager  = () => {
  const icons = useSelector(state => Object.keys(state.windowsManager).map(appWindow => ({
    name: state.windowsManager[appWindow].name,
  })))

  const openWindows= useSelector(state => Object.keys(state.windowsManager)
    .filter(appWindow => state.windowsManager[appWindow].isOpen)
    .map(appWindow => {
      const {
        name,
        width,
        height,
        x,
        y,
        isActive
      } = state.windowsManager[appWindow]

      return {
        name,
        width,
        height,
        x,
        y,
        isActive
      }
    })
  )

  console.log(icons)
  console.log(openWindows)

  const dispatch = useDispatch()

  return (
    <>
      <ul>
        {icons.map((icon)  => {
          const { name } = icon
          return (
            <li key={name}>
              <button
                onClick={() => dispatch(openWindow({
                  name,
                  width: 500,
                  height: 200,
                  x: 10,
                  y: 10,
                }))}
              >
                {name}
              </button>
            </li>
          )
        })}
      </ul>
      {openWindows.map(appWindow => {
        const {
          width,
          height,
          x,
          y,
          name,
        } = appWindow

        const handleResize = event => {
          const {
            offsetX,
            offsetY,
            clientX,
            clientY,
          } = event;

          // console.log({
            // offsetX,
            // offsetY,
            // clientX,
            // clientY,
          // });

          // console.log(event);

          const newWidth = width + (clientX - width - x + 35)
          const newHeight = height + (clientY - height - y - 20)

          dispatch(updateWindow({
            name,
            width: newWidth,
            height: newHeight,
          }));
        }

        return (
          <Window
            key={appWindow.name}
            handleResize={handleResize}
            resizable
            shadow
            style={{ width, height }}
          >
            <WindowHeader className='window-header'>
              <span>{appWindow.name}</span>
              <Button>
                <span className='close-icon' />
              </Button>
           </WindowHeader>
          </Window>
        )
      })}
    </>
  )
}

export default WindowsManager
