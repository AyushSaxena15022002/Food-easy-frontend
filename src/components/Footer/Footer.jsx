import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img
            src={assets.logo}
            alt='Food-Easy Logo'
            style={{
              width: 'min(300px, 25vw)',
              height: '150px',
            }}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            itaque voluptates explicabo possimus esse, quod, aperiam doloremque
            perspiciatis quasi, quisquam labore. Ducimus repellat possimus est
            nesciunt, quia dolorem dolor totam!
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='Facebook_icon' />
            <img src={assets.twitter_icon} alt='Twitter_icon' />
            <img src={assets.linkedin_icon} alt='LinkedIn_icon' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get-In Touch</h2>
          <ul>
            <li>8882873072</li>
            <li>ayushsaxena339@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 © Food-Easy.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
