import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
  const {data,hasError,isLoanding} = useFetch('https://www.breakingbadapi.com/api/quotes/1');
  console.log ({data,hasError,isLoanding});
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
    </>
  )
}
