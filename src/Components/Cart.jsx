import React, { useEffect, useState } from 'react'
import './Cart.css'
const Cart = ({cart,setCart,setAmount,amount}) => {
  const[price,setPrice]=useState(0);
  const[qty,setQty]=useState(1);
  
  
  // console.log("===============")
  // console.log(amount)
   function handlePrice()
   {
          let ans=0
          cart.map((item,i)=>ans+=item.price*amount[i])
          setPrice(ans)
   }

   useEffect(()=>{
    handlePrice();
   })

  function handleDelete(id)
  {
     const del=cart.filter((item)=>item.id!==id)
     setCart(del)
  }
  function handleInc(i){
    console.log(amount[i]);
    let inc=amount[i]+1;
    amount[i]=inc;
    console.log(amount[i]);
    setAmount([...amount,amount[i]])
  }

  function handleDec(i){
    console.log(amount[i]);
    let inc=amount[i]-1;
    if(inc<1)
    {
      inc=1;
    }
    amount[i]=inc;
    console.log(amount[i]);
    setAmount([...amount,amount[i]])
  }
 
  return (
    <div className='tablebox'>
      <table className="styled-table">
        <thead>
          <tr style={{textAlign:'center'}}>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Price</b></td>
            <td><b>Incre</b></td>
            <td><b>Qty</b></td>
            <td><b>Decr</b></td>
            <td><b>Remove</b></td>

          </tr>
        </thead>

        <tbody>
          {
            cart.map((item,i)=>{
             return(
              <> 
              <tr key={item.id}  style={{textAlign:'center'}}>
              <td><img src={item.image} height={'200px'} alt="" /></td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td><button onClick={()=>handleInc(i)}>+</button></td>
              <td>{amount[`${i}`]}</td>
              <td><button onClick={()=>handleDec(i)}>-</button></td>
              <td><button onClick={()=>handleDelete(item.id)}>Remove</button></td>
            </tr>
              </>
             )
            })
          }
          </tbody>
          <tfoot>
            <tr style={{textAlign:'center'}}>
              <th scope="row" colSpan={2}>Totals</th>
              <td>{price}</td>
            </tr>
          </tfoot>
        
      </table>
    </div>
  )
}

export default Cart