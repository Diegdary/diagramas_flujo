import { useState, useRef, ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './InOut.css'

function App() {

  const [elementos, setelementos] = useState(["","",""]);
  const periodos = useRef<HTMLInputElement>(null);
  
  const addsingle = (n: number)=>{
    setelementos(last=>{
      let newer = [...last];
      for (let i = 0; i < n; i++) {
        newer.splice(newer.length,0,"","","");
      }
      periodos.current!.value= (newer.length/3).toString();
      return newer;
    });
  };

  const removesingle = (n: number)=>{

    setelementos(last=>{
      let newer = [...last];
      if(newer.length!=3){
        for (let i = 0; i < n; i++) {
          newer.splice(newer.length-3,3);
        }
      }
      periodos.current!.value= (newer.length/3).toString();
      return newer;
    });
  };


  const instantinput = (event: ChangeEvent<HTMLInputElement>)=>{
    let inp :string  = event.target.value;
    let numb = inp == ""? 1 : parseInt(inp);
    if (numb >0) {
      document.getElementById("validation")!.innerHTML="";
      let lastsize:number =elementos.length/3;
      if (numb>lastsize) {
        console.log(lastsize + "<" + numb);
        addsingle(numb-lastsize);
      }
      else{
        console.log(lastsize + ">" + numb);
        removesingle(lastsize-numb);
      }
    }
    else{
      document.getElementById("validation")!.innerHTML="No válido";
    }
  };

  return (
    <>
      <h1>diagrama de flujo:</h1>
      <form action="" className='wholeinput'>
        <div className='element_periodo'>
          <label htmlFor="n_periodos">Periodos:</label>
          <input ref={periodos} type="number" name="periodos" id="n_periodos" min={1} defaultValue={1} onChange={instantinput}/>
          <p id='validation'></p>
        </div>
        <div className='matrix' id='matrix'>
          <div className='valores layers'> Valores </div>
          <div className='valores layers'> Ingreso </div>
          <div className='valores layers'> Egreso </div>
          {elementos.map((item,index)=>
            <div key={index}><input type="text" className='valores' defaultValue={item} /></div>
          )}
        </div>
        <div className='addcontainer'>
          <button type="button" id='addbutton' onClick={()=>{addsingle(1)}}>Add</button>
          <button type="button" id='deltbutton' onClick={()=>{removesingle(1)}}>Delete</button>
        </div>
        
      </form>
    </>
  )
}

export default App