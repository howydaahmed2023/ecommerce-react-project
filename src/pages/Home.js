import React,{useEffect} from "react";
import Header from "../components/Header";
import Products from "../components/Product";
import Title from "../components/Title";
import { useGetProductsQuery } from "../Redux/productApi";
import Subscribe from "../components/Subscribe";
import { useGetDummyProductsQuery } from '../Redux/dummyApi'

import 'react-loading-skeleton/dist/skeleton.css'
import DummyProducts from "../components/DummyProducts";

const Home = () => {
  const { data, isError, isLoading } = useGetProductsQuery();
  const {data:products} = useGetDummyProductsQuery()
  console.log(products)
  
  useEffect(() => {
    
  
    
  }, [products]);
  
  

  
  
 
  return (
    <div>
      <Header />
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
           <Title text={'latest collection'}/>
          </div>
        </div>
       
        <div className="row justify-content-around ">
          {isError ? (
            <div>Error loading</div>
          ) : isLoading ? (<>
          Loading ..........
            </>
          ) : data ? (
            data.slice(0,12).map((product, index) => {
              return <Products product={product} key={index} />;
            })
          ) : null}
        </div>
        <div className="row mt-5  p-3">
          <Title text={"latest accessories"}/>
          {products ? (products.products.slice(0,15).map((product,index)=>{
            return (<DummyProducts key={index} product={product}/>)
          })) :null}
        </div>
      </div>
      <Subscribe/>
    </div>
  );
};

export default Home;
