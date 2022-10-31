import {memo} from 'react'
// memo evita que se redibuje el componente sino cambió sus props
export const Small = memo(({value}) => {
  console.log('Me volví a redibujar :(');
  return (
    <small>{value}</small>
  )
})
