import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './InOut.css'

function App() {
  
  const altermatrix = ()=>{

  }

  return (
    <>
      <h1>diagrama de flujo:</h1>
      <form action="" className='wholeinput'>
        <div className='element_periodo'>
          <label htmlFor="n_periodos">Periodos:</label>
          <input type="number" name="periodos" id="n_periodos" onChange={altermatrix} />
        </div>
        <div className='matrix'>
          <div></div>
          <div>up</div>
          <div>down</div>
          <div>1</div>
          <div>x</div>
          <div>0.2x</div>
          <div>2</div>
          <div>1000</div>
          <div></div>
          <div>3</div>
          <div></div>
          <div>400</div>
        </div>

      </form>
    </>
  )
}

export default App