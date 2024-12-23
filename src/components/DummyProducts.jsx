import React from "react";

const DummyProducts = ({ product }) => {
  return (

    
      
        <div className="col-md-3 mb-4 ">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="img-fluid rounded-circle border border-danger"
            style={{ height: "200px" }}
          />
          <h5 className="text-center mt-2 prata-regular">{product.title}</h5>

          <h6 className="text-center prata-medium"> $ {product.price}</h6>
        </div>
      
  );
};

export default DummyProducts;
