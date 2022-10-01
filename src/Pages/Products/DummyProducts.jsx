import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const DummyProducts = () => {
    const [productData, setProductData] = useState([])

    useEffect(()=>{
        axios
        .get("http://localhost:8080/products")
        .then((res)=> setProductData(res.data))
    },[])

   
  return (
    <>
        <div>DummyProducts</div>
        {productData.map((prod)=>{
            const {_id,name,storename,img1} = prod
            return <Link to = {`/products/${_id}`}>
            <div className = "card" key = {_id}>
                <h1>{_id}</h1>
                <h1>{name}</h1>
                <h3>{storename}</h3>
                <img src = {img1} />
            </div>
            </Link> 
        })}
    </>
    

  )
}

export default DummyProducts