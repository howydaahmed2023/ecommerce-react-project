import React,{useState,useEffect} from 'react'
import { useGetProductByCategoryQuery, useGetProductsQuery } from '../Redux/productApi';
import Title from '../components/Title';
import Product from '../components/Product';
const AllProducts = () => {
   const { data, isError, isLoading } = useGetProductsQuery();
   
   const [filter,setFilter]=useState(data)
   
   const filterProducts = (cat)=>{
    const updatedList  = data.filter((x)=>x.category === cat)
    setFilter(updatedList)
  }
 
  
 

  return (
    <>
    <div className='container py-5 '>
      <div className='row mb-5'>
        <div className='col-12'>
          <Title text={'All Collection'}/>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-3'>
          <p className='prata-regular fw-bold fs-4 mt-5'>Categories</p>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" onChange={()=>setFilter(data)} id="flexCheckChecked" checked />
  <label className="form-check-label" htmlFor="flexCheckChecked">
    All Products
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="jewelery" onClick={()=>filterProducts("jewelery")} id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  jewelery
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="electronics"  onClick={()=>filterProducts("electronics")} id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  electronics
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="women's clothing" onClick={()=>filterProducts("women's clothing")} id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  women's clothing
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="men's clothing" onClick={()=>filterProducts("men's clothing")} id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
  men's clothing
  </label>
</div>
<div className='mt-5'>
<select class="form-select w-50 h-50" aria-label="Default select example">
  
  <option value="asc" >lowToHigh</option>
  <option value="desc">hightoLow</option>
  
</select>
</div>

        </div>
        <div className='col-9'>
          <div className='row justify-content-center'>
            {isError ? (<div>Error loading</div>)
            : isLoading? (<div>Loading...</div>)
          :filter? (
            filter.map((product,index)=>(
            <Product product={product} key={index}/>
            ))
          )
          :null
          }
          </div>
        </div>

      </div>
      </div></>
  )
}

export default AllProducts