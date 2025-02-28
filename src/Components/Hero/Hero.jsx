import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" />
    <h1><span>I'm Perpetual Okan,</span>frontend developer based in Nigeria</h1>
    <p>I am a frontend developer from Edo, Nigeria, 
      with two years of experience in building responsive and interactive web applications
       using HTML, CSS, JavaScript, and React.

</p>
    <div className="hero-action">
        <div className="hero-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero
