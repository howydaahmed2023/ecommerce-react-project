import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Products = ({ product }) => {
  return (
    <motion.div
      className="card col-3 mb-5 p-2 bg-dark mx-2  "
      style={{width:"16rem"}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        height="250px"
      />
      <div className="card-body">
        <h5 className="card-title mb-0 text-info">
          {" "}
          {product.title.substring(0, 12)}....
        </h5>
        <p className="card-text lead fw-bold"> price :${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="btn btn-outline-warning w-100"
        >
          Buy Me
        </Link>
      </div>
    </motion.div>
  );
};

export default Products;
