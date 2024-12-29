import React from "react";
import { motion } from "framer-motion";
const DummyProducts = ({ product }) => {
  return (

    
      
        <motion.div className="col-md-3 mb-4 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="img-fluid rounded-circle border border-info mb-2 p-2"
            style={{ height: "200px" }}
          />
          <h5 className="text-center mt-2 prata-regular">{product.title}</h5>

          <h6 className="text-center prata-regular"> $ {product.price}</h6>
        </motion.div>
      
  );
};

export default DummyProducts;
