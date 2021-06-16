import React, { useState } from 'react'
import ReactDom from 'react-dom'
import ColorCheckbox from '../src/index'


function App() {
  const [item, setItem] = useState({ checked: true })
  const [orange, setOrange] = useState(true)
  const [color, setColor] = useState('#FFFF00')
  
  return (
    <div>
      <ColorCheckbox checked={orange}  color="#22eedd" onChange={(e) => setOrange(e.target.checked)}>Normal</ColorCheckbox><br />
      <ColorCheckbox checked={item.checked} color="#000000">受外部checked控制</ColorCheckbox><button onClick={() => setItem({ checked: !item.checked})}>toggle</button><br />
      <ColorCheckbox disabled color="#0000FF">disabled</ColorCheckbox><br />
      <ColorCheckbox defaultChecked={true} color={color}>改变背景色</ColorCheckbox><button onClick={() => setColor('#40E0D0')}>change</button><br />
    </div>
  )
}

ReactDom.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
)