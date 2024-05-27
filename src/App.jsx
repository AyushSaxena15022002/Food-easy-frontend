// import React, { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import Footer from './components/Footer/Footer'
// // import LoginPopup from './LoginPopup/LoginPopup'
// import LoginPopup from './components/LoginPopup/LoginPopup'
// import Verify from './pages/Verify/Verify'
// import MyOrder from './pages/MyOders/MyOrder'

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false)
//   return (
//     <>
//       {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
//       <div className='app'>
//         <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/order' element={<PlaceOrder />} />
//           <Route path='/verify' element={<Verify />} />
//           <Route path='/myorders' element={<MyOrder />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrder from './pages/MyOders/MyOrder'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <BrowserRouter>
          <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/myorders' element={<MyOrder />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App
