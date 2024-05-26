import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const [category, setCategory] = useState('All')
  const [currPage, setCurrPage] = useState(1)
  return (
    <div>
      <Header />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
        setCurrPage={setCurrPage}
      />
      <FoodDisplay
        category={category}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
    </div>
  )
}

export default Home
