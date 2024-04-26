import React, { useState } from 'react'

const YourPost=() =>{
  const [value, setValue] = useState(0);

  const increment = () =>{
    setValue(value => value+1)
  }

  const decrement = () =>{
    if(value === 0){
      setTimeout(() => {
        console.log('sldkfj')
      }, 1000).then(
        console,
      )
      return
    }
    setValue(value-1)
  }

const reset = () =>{
  setValue(0)
}
  return (
    <>
    <div>
      {console.log(value)}
    <button onClick={increment}>Increment: {value}</button>
    <button onClick={decrement}>Decrement: {value}</button>
    <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default YourPost;