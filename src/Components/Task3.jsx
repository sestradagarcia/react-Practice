import {React, useState} from 'react'
import "./Task.css"

function Task3() {
    const [search, setsearch] = useState("")

    const data= [{name:"shoe", price: "£2", category: "clothing"}, {name:"pen", price:"£2", category:"stationery"}, {name:"pencil", price:"£2", category:"stationery"}]
    
  return (
    <div>
        <h1>Task 3:</h1>
        <input type="text" placeholder='search...' onChange={(e)=> setsearch(e.target.value)} value={search}/>
        <br />
        {(search === "" ? data : data.filter(product=> product.name.includes(search))).map(filteredProduct=>( 
        <table>
            <thead>
                <tr>
                    <th>{filteredProduct.category}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{filteredProduct.name}</td>
                    <td>{filteredProduct.price}</td>
                </tr>
            </tbody>
        </table>))}
    </div>
  )
}

export default Task3