import React from 'react'
import './Footer.css'
import okan from '../../assets/okan.png'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={okan} alt="" />
            <p>I am a frontend developer from, Nigeria with <br />2  years of experience in companies  like <br /> Microsoft, Tesla and Apple. </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2025 Okan Perpetual. All rights reserved</p>
        <div className="footer-bottom-right">
        <p>Terms of Services</p>  
        <p>Privacy policy</p>  
        <p>Connect with me</p>  
        </div>
      </div>
    </div>
  )
}

export default Footer
