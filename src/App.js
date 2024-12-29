import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Search from "./pages/Search"
import Login from './pages/Login';
import SignupPage from './pages/SignupPage';
import "./App.css"

function App() {
  return (
    <div className='background-theme1'   >
     <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={<Home />} /> 
         <Route exact path="/home" element={<Home />} /> 
         <Route exact path="/products" element={<AllProducts />} /> 
         <Route exact path="/product/:id" element={<ProductDetail />} /> 
         <Route exact path="/cart" element={<Cart />} /> 
         <Route exact path="/about" element={<About />} /> 
         <Route path="/search/:query" element={<Search/>}/>
         <Route exact path="/login" element={<Login />} /> 
         <Route exact path="/signup" element={<SignupPage />} /> 






      


      
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
