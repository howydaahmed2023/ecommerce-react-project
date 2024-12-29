import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useAddToCartMutation,
  useGetSingleProductQuery,
} from "../Redux/productApi";
import { Link } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';

const bag = {
  bagOne:
    "https://d3dqioy2sca31t.cloudfront.net/Projects/store/production/products/1732/product/copenhagen-crossbody-bag-navye552bd30695fd51ff109deee63dbc07c.jpg",
  bagTwo:
    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/118423/5.jpg?2014",
  bagThree: "https://m.media-amazon.com/images/I/41k2uXuAv1S._AC_UY350_.jpg",
};
const sizes = ["L", "M", "XL"];
const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);
  const [addToCart] = useAddToCartMutation();
  
  const [image, setImage] = useState("");
  const [productSize, setProductSize] = useState("");

  const [product, setProduct] = useState([]);
  const addProductToCart = (product) => {
    addToCart(product);
    setProduct({ ...product });
  };
  useEffect(() => {
    if (data) {
      setProduct(data);
      setImage(data.image);
    }
  }, [data]);

  console.log(data);
  return product ? (
    <div className="container py-5">
<ToastContainer/>
      <motion.div className="row py-5"
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="col-6">
          <div className="row">
            <div className="col-3 align-content-center  justify-content-center">
              <img
                src={bag.bagOne}
                onClick={() => setImage(bag.bagOne)}
                alt={product?.name}
                height="100px"
                width="100px"
              />
              <img
                src={bag.bagTwo}
                onClick={() => setImage(bag.bagTwo)}
                alt={product?.name}
                height="100px"
                width="100px"
              />
              <img
                src={bag.bagThree}
                onClick={() => setImage(bag.bagThree)}
                alt={product?.name}
                height="100px"
                width="100px"
              />
            </div>
            <div className="col-9 text-center ">
              <img
                src={image}
                alt={product?.name}
                height="350px"
                width="350px"
                
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <h4 className="text-uppercase text-black-50">{product?.category}</h4>
          <h1 className="display-5 text-info">{product?.title}</h1>
          <p className="lead fw-bold">
            Rating {product?.rating && product?.rating.rate}
            <i className="fa fa-star" />{" "}
          </p>
          <h3 className="display-6 fw-bold my-4">Price:${product.price} </h3>
          <p className="lead">{product.description} </p>
          <div className="mb-4">
            {sizes.map((item, index) => (
              <button
                className={`btn mx-2 btn-outline-warning ${
                  productSize === item ? " bg-success" : ""
                }`}
                key={index}
                onClick={() => setProductSize(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="btn btn-outline-info px-2 py-2"
            onClick={() => {addProductToCart(product)
                
                toast.success("product added to cart successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                
                    });
  
             } }
          >
            Add To Cart
          </button>
          <Link to="/cart" className="btn btn-info mx-2 px-3 py-2">
            Go To Cart
          </Link>
        </div>
      </motion.div>

      <RelatedProducts category={product?.category} />
    </div>
  ) : (
    <div className="invisible"></div>
  );
};

export default ProductDetail;
