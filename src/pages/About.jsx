import React from 'react'
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
         <div className="container">
      <motion.div className="row my-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="col-6">
          <img src="https://cdn.shopify.com/s/files/1/0479/4558/0694/files/chio-lecca-blog-que-es-fashion-week-en-nueva-york.jpg?v=1696870582" alt="" style={{width:"500px",height:"500px"}}/>
        </div>
        <div className="col-6">
            <h1 className='text-warning'>About Us</h1>
            <p className='text-info'>lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sagittis vel massa ut tristique. Sed euismod semper faucibus. Sed
                consectetur bibendum sapien, ut finibus nunc bibendum vel. Donec
                facilisi.ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sagittis vel massa ut tristique. Sed euismod semper faucibus. Sed
                consectetur bibendum sapien, ut finibus nunc bibendum vel. Donec
                facilisi.  facilisi.ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sagittis vel massa ut tristique. Sed euismod semper faucibus. Sed
                consectetur bibendum sapien, ut finibus nunc bibendum vel. Donec
                facilisi.
            </p>
            <h3 className='text-warning'>Our mission</h3>
            <p className='text-info'>lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sagittis vel massa ut tristique. Sed euismod semper faucibus. Sed
                consectetur bibendum sapien, ut finibus nunc bibendum vel. Donec
                facilisi.ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sagittis vel massa ut tristique. Sed euismod semper faucibus. Sed
                consectetur bibendum sapien, ut finibus nunc bibendum vel. Donec
                facilisi.  facilisi.ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sagittis vel massa ut tristique. Sed euismod semper faucibus. Sed
                consectetur bibendum sapien, ut finibus nunc bibendum vel. Donec
                facilisi.
            </p>
        </div>
      </motion.div>
    </div>
    </div>
  )
}

export default About