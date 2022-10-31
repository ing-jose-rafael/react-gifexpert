import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [sizeBox, setSizeBox] = useState({ width: 0, height: 0 })
  // se dispara despues que se renderiza el componente
  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect();
    setSizeBox({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={pRef} className="md-1">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(sizeBox)}</code>

    </>
  )
}
