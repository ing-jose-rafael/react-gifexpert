import { useState } from "react"

export const useCounter = ( initialValue = 10,valueMin = 0 ) => {
  const [counter, setCounter] = useState( initialValue )
  
  const increment = (value = 1) => {
    setCounter(counter + value);
  }

  const decrement = (value = 1) => {
    if(counter === valueMin ) return; 
    setCounter( (c) => c - value );}

  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
