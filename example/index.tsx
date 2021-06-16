import React, { useState } from 'react'
import ReactDom from 'react-dom'
import ColorCheckbox from '../src/index'

console.log(ColorCheckbox)


function App() {
  const [item, setItem] = useState({ checked: true })
  return (
    <div>
      <ColorCheckbox checked={item.checked} color="#000000">checkbox</ColorCheckbox>
      <ColorCheckbox disabled color="#0000FF">checkbox</ColorCheckbox>
    </div>
  )
}

ReactDom.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
)