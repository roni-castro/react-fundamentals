// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const BoxSizes = {
  small: 'box--small',
  medium: 'box--medium',
  large: 'box--large',
}

const Box = ({style, size = '', className, ...otherProps}) => {
  return (
    <div
      className={className || `box ${BoxSizes[size]}`}
      style={{...style, fontStyle: 'italic'}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
