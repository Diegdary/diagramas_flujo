import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './InOut.css'

function App() {

  
  
  const addsingle = ()=>{
    document.getElementById("matrix")!.innerHTML += `
    <div class='inputcontainer'>
              <input type="text" class='valores'/>
          </div>
          <div class='inputcontainer'>
              <input type="text" class='valores'/>
          </div>
          <div class='inputcontainer'>
              <input type="text" class='valores'/>
          </div>
    ` ;
  }

  return (
    <>
      <h1>diagrama de flujo:</h1>
      <form action="" className='wholeinput'>
        <div className='element_periodo'>
          <label htmlFor="n_periodos">Periodos:</label>
          <input type="number" name="periodos" id="n_periodos" />
        </div>
        <div className='matrix' id='matrix'>
          <div>valor</div>
          <div>Ingreso</div>
          <div>Egreso</div>
          <div className='inputcontainer'>
              <input type="text" className='valores'/>
          </div>
          <div className='inputcontainer'>
              <input type="text" className='valores'/>
          </div>
          <div className='inputcontainer'>
              <input type="text" className='valores'/>
          </div>
        </div>
        <div className='addcontainer'>
          <button type="button" id='addbutton' onClick={addsingle}>Add</button>
        </div>
        
      </form>
    </>
  )
}

export default App