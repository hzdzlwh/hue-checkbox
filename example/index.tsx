import React, { useState } from 'react'
import ReactDom from 'react-dom'
import ColorCheckbox from '../src/index'

console.log(ColorCheckbox)


function App() {
  const [item, setItem] = useState({ checked: true })
  const [orange, setOrange] = useState(true)
  
  return (
    <div>
      <ColorCheckbox checked={item.checked} color="#000000">Apple</ColorCheckbox>
      <ColorCheckbox disabled color="#0000FF">Banana</ColorCheckbox>
      <ColorCheckbox checked={orange}  color="#22eedd" onChange={(e) => setOrange(e.target.checked)}>Orange</ColorCheckbox>
      <button onClick={() => setItem({ checked: !item.checked})}>toggle</button>
    </div>
  )
}

ReactDom.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
)