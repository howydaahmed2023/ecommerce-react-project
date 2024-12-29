import React from 'react'
import { motion } from "framer-motion";

const Title = ({text}) => {
  return (
    <div>
          <motion.div className="d-flex justify-content-center align-content-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
        <h4 className="text-center display-4 text-uppercase me-2 prata-regular">
          {text}
        </h4>
        <p
          className="align-self-center bg-info" 
          style={{ width: "80px", height: "10px" }}
        ></p>
      </motion.div>
    </div>
  )
}

export default Title