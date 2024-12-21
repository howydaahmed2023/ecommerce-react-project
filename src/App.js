import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'
import AllProducts from './pages/AllProducts';

function App() {
  return (
    <div >
     <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={<Home />} /> 
         <Route exact path="/home" element={<Home />} /> 
         <Route exact path="/products" element={<AllProducts />} /> 

      


      
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
