import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Data from './Data'
import About from './Components/About'
const App = () => {
  const[data,setData]=useState(Data)
  const[search, setSearch]=useState("")
  const[cart,setCart]=useState([]);
  const[amount,setAmount]=useState([]);

  function handleClick(item)
  {
          setCart([ item, ...cart])
          setAmount([item.amount,...amount])
  }
  console.log("==========")
  console.log(amount)
  
  console.log(data)
  return (
    <BrowserRouter>
      <Navbar cart={cart.length} setData={setData} setSearch={setSearch}></Navbar>
      <Routes>
        <Route path='/' element={<Home data={data} setData={setData} search={search} handleClick={handleClick}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} amount={amount} setAmount={setAmount}/>}/>
        <Route path='/about/:id' element={<About Data={data} handleClick={handleClick}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App