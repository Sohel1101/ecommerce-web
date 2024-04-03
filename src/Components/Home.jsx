import React from 'react'
import Card from './Card'
import './Card.css'
import './Home.css'
import Data from '../Data'
const Home = ({ data, search, handleClick, setData }) => {
  function filterResult1(carItem) {
    const newData = Data;
    const result = newData.filter((item) => { return item.category === carItem })
    setData(result)
  }
  function filterResult2(carItem) {
    const newData = Data;
    const result = newData.filter((item) => { return item.category === carItem })
    setData(result)
  }
  function filterResult3(carItem) {
    const newData = Data;
    const result = newData.filter((item) => { return item.category === carItem })
    setData(result)
  }
  function filterResult4(carItem) {
    const newData = Data;
    const result = newData.filter((item) => { return item.category === carItem })
    setData(result)
  }
  function filterResult5() {
    setData(Data)
  }
  return (
    <div>
      <div className='btncon'>
        <aside className='filterBtns'>
          <button onClick={() => filterResult1(`men's clothing`)}>Men</button>
          <button onClick={() => filterResult2(`women's clothing`)}>Women</button>
          <button onClick={() => filterResult3(`electronics`)}>Electronics</button>
          <button onClick={() => filterResult4(`jewelery`)}>Jewellary</button>
          <button onClick={() => filterResult5()}>All</button>

        </aside>
      </div>
      <div className='Home'>
        {
          data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((item) => {
            return (<Card handleClick={handleClick} key={item.id} item={item} />)
          })
        }
      </div>
    </div>
  )
}

export default Home