import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import {
  useDeleteFromCartMutation,
  useGetSingleCartQuery,
  useGetSingleProductQuery,
} from "../Redux/productApi";
import Title from "../components/Title";
import { ToastContainer, toast } from "react-toastify";
const Cart = () => {
  const { id } = useParams();
  const { data: cartItem } = useGetSingleCartQuery(id);
  const { data: productData } = useGetSingleProductQuery(5);
  const [deleteFromCart] = useDeleteFromCartMutation();
  
  

  
  useEffect(() => {
    
   
      
    
  }, [productData]);

  return (
    <div className="container">
      <ToastContainer />
      <div className="row ">
        <Title text={"Your Cart"} />
      </div>
      <div className="row">
        {cartItem
          ? cartItem.products.map((item, index) => {
              return (
                <div key={index} className="mb-5  text-light p-5">
                  <p className="mb-3 text-info">{productData.title}</p>
                  <div className=" d-flex justify-content-around align-items-center fw-bold fs-3">
                    <img
                      src={productData.image}
                      alt={productData.title}
                      width="90px"
                      height="90px"
                    />
                    <p>Price: ${productData.price}</p>
                    <p>
                      Quantity:{" "}
                      <span className="" onClick={() => item.quantity + 1}>
                        -
                      </span>{" "}
                      <span className="mx-2">{item.quantity}</span>{" "}
                      <span className="">+</span>
                    </p>
                    <p>Total: ${productData.price * item.quantity}</p>
                  </div>
                  <button
                    className="btn btn-outline-warning  mt-3 ms-5"
                    onClick={() => {deleteFromCart(item.id)
                        toast.success("product deleted from cart successfully", {
                                          position: "top-right",
                                          autoClose: 5000,
                                          hideProgressBar: false,
                                          closeOnClick: false,
                                          pauseOnHover: true,
                                          draggable: true,
                                          progress: undefined,
                                          theme: "dark",
                                      
                                          });
                    }}
                  >
                    Remove from cart
                  </button>
                

                </div>
              );
            })
          : null}
      </div>
      
    </div>
  );
};

export default Cart;
