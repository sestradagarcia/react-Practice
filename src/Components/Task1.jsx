import React, { useState } from 'react'

function Task1() {
    const [text, setText] = useState();

  return (
    <div>
        <h1>Task1:</h1>
        <input type="text" onChange={(e)=> setText(e.target.value)}/> 
        <p>{text}</p>
    </div>
  )
}

export default Task1