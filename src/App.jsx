import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./EcommerceProject/Components/Home/Home";
import Navbar from "./EcommerceProject/Components/Navbar/Navbar";
import Cart from "./EcommerceProject/Components/Cart/Cart";
import About from "./EcommerceProject/Components/About/About";
import Footer from "./EcommerceProject/Components/Footer/Footer"
import Data from "./EcommerceProject/Data"
import {useState} from "react"
const App = () => {
  const[data,setData]=useState(Data)
  const[cart,setCart]=useState([])
  const[search, setSearch]=useState("")

  function handleClick(item){
    setCart([...cart,item])
  }
  return (
    <div className="App">
          
      <BrowserRouter>
          <Navbar setSearch={setSearch} data={data} setData={setData} size={cart.length}/>
      <Routes>
        <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/about/:aboutId' element={<About Data={Data} handleClick={handleClick}/>}/>
        {/* <Route path='/cancel' element={<Cancel/>}/> */}
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
