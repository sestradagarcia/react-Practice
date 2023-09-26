import {React, useState, useEffect} from 'react'
import axios from "axios";
import "./Task.css"

function SearchBar({value, onChange }){
    return(
        <input type="text" placeholder='search...' onChange={onChange} value={value}/>
    )
}

function ProductTable({category, products}){
    return(
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
            {products.map(product=>(
            <tr key = {product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>))}
        </tbody>
    </table>

    )
}

function Task3() {
    const [search, setsearch] = useState("")
    const [data, setData] = useState([])

        useEffect(function () {
        axios.get("http://localhost:4494/products")
            .then(function (response) {
                // access the response body with .data
                console.log("RESPONSE RECEIVED");
                setData(response.data);
            })
            .catch(err => console.error(err));
    }, []); // use effect -> runs ONLY when component first loads

    

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
        <br />
        <SearchBar value = {search} onChange = {(e) => setsearch(e.target.value)} />
        {categories.map(category=>( <ProductTable key={category} category= {category} products={groupByCategory[category]}/>
       ))}
    </div>
  )
}

export default Task3