
import React ,{useEffect}from 'react'
import { useGetProductByCategoryQuery } from '../Redux/productApi'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

  


const RelatedProducts = ({category}) => {
    const {data:categories}=useGetProductByCategoryQuery(category)
    
  //  console.log(categories)
  
   
    
   useEffect(() => {
    
    
   }, [categories]);
    
  return (
    <div>
        <div className="container">
        
            <div className='row my-5'>
                <Title text={"Retated Products"} />
            </div>
            <motion.div className='row my-2 '
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}>
            {categories ? (categories.map((item,index)=>(
              <div key={index} className='col-3' >
                         <div className="card  mb-5 bg-dark p-3"  width="16rem">
  <img src={item.image} className="card-img-top" alt={item.title} height="150px" width="90px"/>
  <div className="card-body">
  <h5 className="card-title mb-0 text-info"> {item.title.substring(0,12)}....</h5>
    <p className="card-text lead fw-bold"> price :${item.price}</p>
    
    <Link to={`/product/${item.id}`} className="btn btn-outline-warning w-100">Buy Me</Link>
  </div>
</div>
                </div>
            ))): null}
              
            </motion.div>
        </div>
    </div>
  )
}

export default RelatedProducts