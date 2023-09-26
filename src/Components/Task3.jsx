import {React, useState} from 'react'
import "./Task.css"

function Task3() {
    const [search, setsearch] = useState("")

    const data= [{name:"shoe", price: "£2", category: "Clothing"}, {name:"purse", price: "£2", category: "Clothing"}, {name:"pen", price:"£2", category:"Stationery"}, {name:"pencil", price:"£2", category:"Stationery"}]

    const filteredData = search === "" ? data : data.filter(product=> product.name.includes(search));

    const groupByCategory = {};

    for(let p of filteredData){
        if (!groupByCategory[p.category]){
            groupByCategory[p.category]= []
        }
        groupByCategory[p.category].push(p)
    }

    const categories = Object.keys(groupByCategory)

  return (
    <div>
        <h1>Task 3:</h1>
        <input type="text" placeholder='search...' onChange={(e)=> setsearch(e.target.value)} value={search}/>
        <br />
        {categories.map(category=>( 
        <table key={category}>
            <thead>
                <tr>
                    <th>{category}</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {groupByCategory[category].map(product=>(
                <tr key = {product.name}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>))}
            </tbody>
        </table>))}
    </div>
  )
}

export default Task3