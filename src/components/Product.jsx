import React from 'react'

import { Link } from 'react-router-dom'

const Products = ({product}) => {
    
   
  return (
   
   

        
            <div className="card col-3 mb-4"  width="16rem">
  <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
  <div className="card-body">
  <h5 className="card-title mb-0"> {product.title.substring(0,12)}....</h5>
    <p className="card-text lead fw-bold"> price :${product.price}</p>
    <Link href="#" className="btn btn-primary">Buy Me</Link>
  </div>
</div>
        
      
    
      

    
  )
}

export default Products