import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { Window } from 'react95';

const StyledWindow = styled(Window)`
  ${({ theme }) => css`
    resize: both;
    overflow: auto;
  `}
`;

const CustomWindow = React.forwardRef(function CustomWindow(props, ref) {
  const { resizable, children, handleResize, ...otherProps } = props;

  return (
    <StyledWindow ref={ref} {...otherProps}>
      {children}
    </StyledWindow>
  );
});

CustomWindow.defaultProps = {
  resizable: false,
  shadow: true,
  children: null
};

CustomWindow.propTypes = {
  shadow: propTypes.bool,
  resizable: propTypes.bool,
  children: propTypes.node
};

export default CustomWindow;
