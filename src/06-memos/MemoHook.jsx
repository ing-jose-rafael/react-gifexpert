import { useMemo, useState } from 'react';
import { useCounter } from '../hooks'

const heavyStuff =(interationNumber = 300)=>{
  for (let index = 0; index < interationNumber; index++) {
    console.log('Ahí vamos...');
  }
  return `${interationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
  const {counter,increment} = useCounter(4000);
  const [ show, setShow ] = useState(true);
  /**
   * Para tareas pesadas 
   * Memoriza un valor y solo será redibujado si el valor del
   * counter cambia 
   */
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />
      
      <h4>{ memorizedValue }</h4>

      <button className="btn btn-primary" onClick={()=>increment()}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={()=>setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
