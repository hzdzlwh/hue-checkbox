import React from 'react'
import ReactDom from 'react-dom'
import ColorCheckbox from '../src/index'

console.log(ColorCheckbox)

ReactDom.render(
  <ColorCheckbox color="#000000">checkbox</ColorCheckbox>,
  document.getElementById('app')
)