import React, { forwardRef } from 'react'
import propTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { Window } from 'react95'

const StyledWindow = styled(Window)`
  resize: ${props => props.resizable ? 'both' : 'none'};
  overflow: auto;
  width: ${props => props.width};
  height: ${props => props.height};
`

const CustomWindow = forwardRef(function CustomWindow(props, ref) {
  const {
    resizable,
    children,
    ...otherProps
  } = props

  return (
    <StyledWindow className='window' ref={ref} resizable={resizable} {...otherProps}>
      {children}
    </StyledWindow>
  )
})

CustomWindow.defaultProps = {
  resizable: false,
  shadow: true,
  children: null,
  width: '500px',
  height: '500px',
}

CustomWindow.propTypes = {
  shadow: propTypes.bool,
  resizable: propTypes.bool,
  children: propTypes.node,
  width: propTypes.number,
  height: propTypes.number,
}

export default CustomWindow
