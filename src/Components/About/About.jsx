import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT SUNSHINE DAYCARE</h3>
        <h2>Guiding Tomorrow's childern with Love and Care, Today</h2>
        <p>Embark on an enriching educational adventure tailored for your little ones at our daycare. Our innovative programs are crafted to nurture young minds, fostering growth, creativity, and a love for learning from the earliest age.</p>
        <p>With a curriculum designed to engage through play, exploration, and hands-on activities, we empower children with the foundational skills they need.</p>
        <p>Our dedication provides personalized attention and guidance, ensuring each child receives the support they need to thrive. Whether your child is discovering their ABCs, exploring the wonders of childhood, or building social skills through interactive play, our daycare is committed to creating a safe, stimulating environment where every child can flourish.</p>
      </div>
    </div>
  )
}

export default About
