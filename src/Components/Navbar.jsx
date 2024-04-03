import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Data from '../Data'
const Navbar = ({ setData, setSearch, cart}) => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white',
        display: 'flex',
        justifyContent: 'space-around'

    };
    function filterResult1(carItem)
    {
        const newData=Data;
        const result=newData.filter((item)=>{return item.category===carItem})
        setData(result)
    }
    function filterResult2(carItem)
    {
        const newData=Data;
        const result=newData.filter((item)=>{return item.category===carItem})
        setData(result)
    }
    function filterResult3(carItem)
    {
        const newData=Data;
        const result=newData.filter((item)=>{return item.category===carItem})
        setData(result)
    }
    function filterResult4(carItem)
    {
        const newData=Data;
        const result=newData.filter((item)=>{return item.category===carItem})
        setData(result)
    }
    function filterResult5()
    {
        setData(Data)
    }
    return (
        <div className='Navbar'>
            <nav className='navbar'>
                <Link style={linkStyle} to={'/'}>
                    <div className="navdiv">
                        <h1>SHOP MORE</h1>
                    </div>
                </Link>

                <div className="navdiv">
                    <input type="search" placeholder='Search Your Product' onChange={(e) => setSearch(e.target.value)} />
                </div>

                <Link style={linkStyle} to={'/cart'}>
                    <div className="navdiv">
                        <h3>Cart<sup>{cart}</sup></h3>
                    </div>
                </Link>
            </nav>
            {/* <aside className='filterBtns'>
                <button onClick={()=>filterResult1(`men's clothing`)}>Men</button>
                <button onClick={()=>filterResult2(`women's clothing`)}>WoMen</button>
                <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
                <button onClick={()=>filterResult4(`jewelery`)}>Jewellary</button>
                <button onClick={()=>filterResult5()}>All</button>

            </aside> */}
        </div>
    )
}

export default Navbar