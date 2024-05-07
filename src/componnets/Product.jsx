import React from 'react'
import { product } from '../Data'

const Product = () => {
  return (
    <>
    <section className='products' id='product'>
        <h1 className='heading'>
            our <span>products</span>
        </h1>
        <div className="box-container">
            {
                product.map((item,index)=>(
                    <div className="box">
                        <div className="icons">
                            <a href="#" className='fas fa-shopping-cart'></a>
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <div className="image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="content">
                            <h3>fresh coffee</h3>
                            <div className="stars">
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star-half-alt'></i>
                            </div>
                            <div className="price">
                                599 Rs <span>799 Rs</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default Product