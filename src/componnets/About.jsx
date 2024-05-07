import React from 'react'
import AboutImg from "../assets/images/about-img.jpg"

const About = () => {
  return (
    <>
    <section className='about' id='about'>
        <h1 className='heading'>
            <span>about</span> us
        </h1>
        <div className="row">
            <div className="image">
                <img src={AboutImg} alt="" />
            </div>
            <div className="content">
                <h3>What Makes Our Food Special?</h3>
                <p>A fiery and lethal combination of hot & garlic dip, jalapenos, mushrooms, olives and capsicum. [Fat-8.4 per 100 g, Protein-13.1 per 100 g, Carbohydrate-43.1 per 100 g, Sugar-2.6 per 100 g, Calories-300.5 k. cal]Nutritional information per 100g</p>
                <p>A classic cheesy Margherita. Cant go wrong. [Fat-14.3 per 100 g, Protein-12.6 per 100 g, Carbohydrate-39.2 per 100 g, Sugar-0 per 100 g, Calories-336 k.cal]Nutritional information per 100g</p>
                <a href="#" className='btn'>Learn More</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default About