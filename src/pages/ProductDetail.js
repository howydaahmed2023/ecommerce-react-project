import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useAddToCartMutation, useGetSingleProductQuery } from '../Redux/productApi'
import {Link} from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams()
    const {data}=useGetSingleProductQuery(id)
    const [addToCart]=useAddToCartMutation()
    
    const [product,setProduct]=useState([])
    const addProductToCart = (product)=>{
       addToCart(product)
       setProduct({...product})
    }
    useEffect(()=>{
        if(data){
            setProduct(data)
        }
    },[data])
    
    console.log(data)
  return (
    <div className='container py-5'>
    <div className='row py-5'>
    <div className='col-6'>
        <img src={product?.image} alt={product?.name} height="400px" width="400px"/>
    </div>
    <div className='col-6'>
        <h4 className='text-uppercase text-black-50'>{product?.category}</h4>
        <h1 className='display-5'>{product?.title}</h1>
        <p className='lead fw-bold'>Rating {product?.rating && product?.rating.rate}
            <i className='fa fa-star'/> </p>
            <h3 className='display-6 fw-bold my-4'>Price:${product.price} </h3>
            <p className='lead'>{product.description} </p>
            <button className='btn btn-outline-primary px-2 py-2' onClick={()=>addProductToCart(product)}>Add To Cart</button>
            <Link to="/cart" className='btn btn-primary mx-2 px-3 py-2'>Go To Cart</Link>

    </div>


    </div>

    </div>
  )
}

export default ProductDetail