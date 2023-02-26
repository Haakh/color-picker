import { useState } from 'react'
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful'
import './App.css'


function App() {
  const [color, setColor] = useState("#aabbcccc");

  return (
    <div className="box">
      <div className='custom-pointers custom-layout'>
        <HexAlphaColorPicker color={color} onChange={setColor} />
      </div>

      <div className='hex'>
        <p>Hex</p>

        <div className='text'>
          <span style={{ backgroundColor: color }}/>
          <HexColorInput color={color} onChange={setColor} alpha />
        </div>
      </div>
    </div>
  )
}

export default App
