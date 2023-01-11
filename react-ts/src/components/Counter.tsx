import React from 'react'
import { useState } from 'react'
const Counter = () => {
    
    const [count, setCount] = useState(0)

    const increment = (num: number) => {
        setCount(count + num)
    }
    const decrement = (num: number) => {
        setCount(count - num)
    }

  return (
    <div className='mt-5'>
        <h1>Counter</h1>
        <hr />
        <h3>Count: {count}</h3>
        <button className='btn btn-outline-primary' onClick={() => increment(1)}>+1</button>
        &nbsp;
        <button className='btn btn-outline-primary' onClick={() => decrement(1)}>-1</button>
    </div>
  )
}

export default Counter