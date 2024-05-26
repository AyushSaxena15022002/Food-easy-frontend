// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({ category, setCategory }) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our Menu !</h1>
//       <p className='explore-menu-text'>
//         Choose from a diverse menu featuring a delectable array of dishes. Our
//         mission is to satisfy your cravings and elevate your dining experience,
//         one delicious meal at a time
//       </p>
//       <div className='explore-menu-list'>
//         {menu_list.map((item, index) => {
//           return (
//             <div
//               onClick={() =>
//                 setCategory((prev) =>
//                   prev === item.menu_name ? 'All' : item.menu_name
//                 )
//               }
//               key={index}
//               className='explore-menu-list-item'
//             >
//               <img
//                 className={category === item.menu_name ? 'active' : ''}
//                 src={item.menu_image}
//                 alt={item.menu_name}
//               />
//               <p>{item.menu_name}</p>
//             </div>
//           )
//         })}
//       </div>
//       <hr />
//     </div>
//   )
// }

// export default ExploreMenu

import React, { useRef } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory, setCurrPage }) => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
  }

  const onClickHandler = (value) => {
    console.log(value)
    setCategory((prev) => {
      return prev === value ? 'All' : value
    })
    setCurrPage(1)
  }

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu!</h1>
      <div className='explore-menu-header'>
        <p className='explore-menu-text'>
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className='scroll-buttons'>
          <button className='scroll-button' onClick={scrollLeft}>
            ‹
          </button>
          <button className='scroll-button' onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>
      <div className='explore-menu-list' ref={scrollRef}>
        {menu_list.map((item, index) => (
          <div
            onClick={() => onClickHandler(item.menu_name)}
            //   setCategory((prev) => {

            //     return prev === item.menu_name ? 'All' : item.menu_name
            //   })
            // }
            key={index}
            className='explore-menu-list-item'
          >
            <img
              className={category === item.menu_name ? 'active' : ''}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
