import React, { useState } from 'react'

function Task2() {
    const [valueEntered, setValueEntered] = useState(0)
    const handleOnClick = (e)=> setValueEntered(valueEntered - -e.target.innerText) // -- changes to int, ++ doesnt because it tries concatenation 
  return (
    <div> 
        <h1>Task 2:</h1>
        <h3>Enter a number</h3>
        <input type="text" onChange={(e)=> setValueEntered(e.target.value)} value={valueEntered}/> 
        <br />
        <button onClick={handleOnClick}>-5</button>
        <button onClick={handleOnClick}>-1</button>
        <button onClick={()=> setValueEntered(0)}>Reset</button>
        <button onClick={handleOnClick}>+1</button>
        <button onClick={handleOnClick}>+5</button>
    </div>
  )
}


export default Task2


