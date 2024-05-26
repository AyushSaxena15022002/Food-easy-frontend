import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')
  const { url } = useContext(StoreContext)
  const navigate = useNavigate()

  console.log('Hey Verify Component')
  const verifyPayment = async () => {
    try {
      let v = '/api/order/verify'
      console.log({ url, v, success, orderId })

      const response = await axios.post(url + '/api/order/verify', {
        success,
        orderId,
      })
      if (response.data.success) {
        console.log('Payment verified')
        navigate('/myorders')
      } else {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      navigate('/')
    }
  }

  useEffect(() => {
    console.log('Checking the flow : Verifying component')
    verifyPayment()
  }, [])

  return (
    <div className='verify'>
      <div className='spinner'></div>
    </div>
  )
}

export default Verify
