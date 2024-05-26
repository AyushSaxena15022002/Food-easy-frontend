import React, { useContext, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category, currPage, setCurrPage }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className='food-display-list'>
        {food_list
          .filter((item) => category === 'All' || item.category === category)
          .map((item, index) => {
            if (index >= (currPage - 1) * 8 && index < currPage * 8) {
              console.log(index, (currPage - 1) * 8, currPage * 8)
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            }
          })}
      </div>
      <div className='pagination'>
        <button
          className='pagi-button'
          onClick={() => setCurrPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          ‹
        </button>
        <button
          className='pagi-button'
          onClick={() => setCurrPage((prev) => prev + 1)}
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default FoodDisplay
