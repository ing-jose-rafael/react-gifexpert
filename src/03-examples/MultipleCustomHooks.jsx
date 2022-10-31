import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"

export const MultipleCustomHooks = () => {
  const {counter,increment,decrement } = useCounter(1)

  const { data, hasError, isLoanding } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  // si la data tiene valor, y como llega como un arreglo toma la posicion 1
  // si se tiene !null la repuesta es true, !!null es false, hacemos eso por que
  // no se puede desectructurar un objeto vacio
  const { quote, author } = !!data && data[0];

  // if (isLoanding) {
  //   return (
  //     <div className="spinner-border text-primary" role="status">
  //       <span className="visually-hidden">Cargando...</span>
  //     </div>
  //   )
  // }
  // aca no puede ir un Hooks, no pueden ser creado de manera condicional
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {
        isLoanding
          ? (
            <div className="alert alert-info text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

          )
          : (
            <blockquote className="blockquote text-end">
              <p className="md-1">{quote}</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
          )
      }

      <button className="btn btn-primary" onClick={()=>decrement()} disabled = {isLoanding || counter<=1}>
        Previous qoute
      </button>
      <button className="btn btn-primary" onClick={()=>increment()} disabled = {isLoanding}>
        Next qoute
      </button>
    </>
  )
}
