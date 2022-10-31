import React, { useRef } from 'react'

export const FocusScreen = () => {
  /**
   * Ayuda a mantener una referencia y cuando cambia no dispara
   * la renderizacion del componente
   */
  const inputRef = useRef(); 

  const onClick = () => {
    //document.querySelector('input').select(); // seleccion de forma tradicional
    
    inputRef.current.select();
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder='Ingrese su nombre'
        className="form-control"
      />
      <button
        className="btn btn-primary mt-2"
        onClick={ onClick }
      >
        Set focus
      </button>
    </>
  )
}
