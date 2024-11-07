import { useState, useRef, ChangeEvent, createElement} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './InOut.css'

function App() {

  const [elementos, setelementos] = useState(["","","","","",""]);
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
      if(newer.length!=6){
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
    let numb = inp == ""? 0 : parseInt(inp);
    if (numb >1) {
      document.getElementById("validation")!.classList.remove("validation");
      let lastsize:number =elementos.length/3;
      if (numb>lastsize) {
        addsingle(numb-lastsize);
      }
      else{
        removesingle(lastsize-numb);
      }
    }
    else{
      document.getElementById("validation")!.classList.add("validation");
    }
  };

  const draw = (e:ChangeEvent<HTMLInputElement>,index: number)=>{
    setelementos(last => {
      let newer = [...last];
      newer[index]=e.target.value;
      return newer;
    });
  }

  const convertelem = ()=>{
    let newer: any[] = [];
    for (let i = 2; i < elementos.length; i=i+3) {
        newer.push(elementos[i]);
    }
    return newer;
  }

  const doublex = ()=>{
    let li:any[] = [];
    const longitud_recta = (elementos.length/3-1)*2;
    for (let i = 0; i < longitud_recta; i++) {
      li.push({});
      if (i >= longitud_recta/2) {
        
      }
      if (true) {
        
      }
    }
    console.log(li);
    return li;
  }

  return (
    <>
      <h1>diagrama de flujo:</h1>
      <form action="" className='wholeinput'>
        <div className='element_periodo'>
          <label htmlFor="n_periodos">Periodos:</label>
          <input ref={periodos} type="number" name="periodos" id="n_periodos" min={1} defaultValue={2} onChange={instantinput}/>
          <p id='validation'></p>
        </div>
        <div className='matrix' id='matrix'>
          <div className='valores layers'> Valores </div>
          <div className='valores layers'> Ingreso </div>
          <div className='valores layers'> Egreso </div>
          {elementos.map((item,index)=>
            <div key={`div${index}`}><input type="text" className='valores' key={index} value={item} onChange={(e)=>{draw(e,index)}}/></div>
          )}
        </div>
        <div className='addcontainer'>
          <button type="button" id='addbutton' onClick={()=>{addsingle(1)}}>Add</button>
          <button type="button" id='deltbutton' onClick={()=>{removesingle(1)}}>Delete</button>
        </div>
        
      </form>
      <div className='grafica1'>
          {convertelem().map((item,index)=>
            <div key={index}><input type="text" value={item} readOnly/></div>
            
          )}
          
      </div>
      <div className='grafica1 flechav'>
      
        {convertelem().map((item,index)=>
            <div key={index}>
              {item !=""?createElement('i',{className: "fa-solid fa-arrow-up"}):""}
              <div>

              </div>
            </div>
            
          )}
      </div>
      <div className='recta-container'>
          <div className='recta'>
            {doublex().map((item, index)=>
              <div className='recta-item' key={index}></div>
            )}
          </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </>
  )
}

export default App