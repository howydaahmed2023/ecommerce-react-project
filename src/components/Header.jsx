import React from 'react'
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className='hero'>
        <motion.div className="card border-0 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
  <img src="https://i0.wp.com/fashion2apparel.com/wp-content/uploads/2023/02/fashion-trends.jpg?resize=600%2C400&quality=100&ssl=1" className="card-img" alt="background" height="500px"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center bg-transparent">
    <div className='container  bg-transparent'>
        <h5 className="card-title display-3 fw-bold mb-0 prata-regular text-info">Welcome to E-Commerce</h5>
        <p className="card-text lead fs-2 text-info">Discover our wide selection of products</p>
    </div>
    
  </div>
</motion.div>
    </div>
  )
}

export default Header