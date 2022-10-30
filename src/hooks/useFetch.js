import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
  const [state, setState] = useState({
    data:null,
    isLoanding: true,
    hasError:null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoanding:true,
    });

    const resp = await fetch(url);
    const data = await resp.json();
    
    setState({
      data,
      isLoanding:false,
      hasError:null,
    })
  }
  
  // se dispara si el url cambia
  useEffect(() => {
  
    getFetch();
  }, [url])
  // se puede tambien return state, pero la siguiente opc permite retorna otros metodos en el futuro
  return { 
    data:       state.data,
    isLoanding: state.isLoanding,
    hasError:   state.hasError,
  }
}
