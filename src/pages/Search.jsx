import React, { useEffect } from 'react'
import {  useSearchProductMutation } from '../Redux/dummyApi'
import { useLocation } from 'react-router-dom';


const Search = () => {
  const { search } = useLocation();

 const [searchProduct,{isLoading,data}] = useSearchProductMutation()
  const query = new URLSearchParams(search).get("query");
  

    
    useEffect(()=>{
      getAllProducts()
    
    }
    ,[query])
    
   const getAllProducts = async ()=>{
await searchProduct({query})
   }
  return (
    <div className='container'>
      
      <div className="row justify-content-evenly">
  {isLoading ? (<div>loading ...........</div>)
  :data? (data.products.map((product,index)=>(
    <div key={index} className='col-4 mb-4 border border-success rounded bg-success-subtle' style={{width:"16rem"}}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className='img-fluid'/>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  )))
  :null}
      </div>
    </div>
  )
}

export default Search
