import React from 'react'
import img from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>My Projects</h1>
                <p>Here I share successfully deployed several projects online by me, showcasing my proficiency in frontend development technologies. Leveraging my skills in HTML, CSS, JavaScript and React, I've created interactive and visually appealing websites that deliver seamless user experiences.These projects reflect my interest in frontend development and my commitment to staying up-to-date with the latest industry trends.Here i have used Contentful CMS to manage my content using API Calls.</p>
            </div>
            <div className="img-container">
                <img src={img} alt="Image Undraw" className='img' />
            </div>
        </div>
    </section>
  )
}

export default Hero