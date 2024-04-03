import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({ item, handleClick }) => {
    const { title, price, description, image, rating } = item
    return (
        <div className='cardDiv'>
            <div>
                <center>
                <div className='imgDiv'>
                <Link to={`/about/${item.id}`}>
                    <img src={image}  alt="" className='imgs' />
                </Link>
                </div>
                </center>
                <p className='cardItem_title'>{title}</p>
                <p className='cardItem p1'>Price: Rs {price}</p>
                <p className='cardItem p2'>Rating: {rating.rate}</p>
                <button className='btn' onClick={()=>handleClick(item)}>Add cart</button>
            </div>
        </div>
    )
}

export default Card