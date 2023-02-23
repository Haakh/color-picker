import { useState } from 'react'
import { HexColorInput, HexColorPicker } from 'react-colorful'
import './App.css'


function App() {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div className="App">
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput color={color} onChange={setColor} />
    </div>
  )
}

export default App
