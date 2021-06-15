import React from 'react'
import ReactDom from 'react-dom'
import ColorCheckbox from '../src/index'

console.log(ColorCheckbox)

ReactDom.render(
  <div>
    <ColorCheckbox checked color="#000000">checkbox</ColorCheckbox>
    <ColorCheckbox disabled color="#0000FF">checkbox</ColorCheckbox>
  </div>,
  document.getElementById('app')
)