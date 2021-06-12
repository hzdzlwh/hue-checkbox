import React from 'react'
import ReactDom from 'react-dom'
import ColorCheckbox from '../src/index'

console.log(ColorCheckbox)

ReactDom.render(
  <ColorCheckbox >checkbox</ColorCheckbox>,
  document.getElementById('app')
)