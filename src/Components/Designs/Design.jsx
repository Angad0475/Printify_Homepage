import React from 'react'
import './Design.scss';
import piggy from '../../Assets/piggy.jpeg';
import rocket from '../../Assets/rocket.jpeg';
import phone from '../../Assets/phone.jpeg';
import design from'../../Assets/big_photo.jpeg';
import { IoIosArrowRoundForward } from "react-icons/io";

import custom_products from '../../Assets/custom_products.jpeg';

import on_your_terms from '../../Assets/onyour_terms.jpeg';

import fulfillment from '../../Assets/fulfillment.jpeg';

function Design() {
  return (
    <>
    <section className='designs'>
        <div className='img1'>
        <img className='i' src={piggy}alt=''/> 
        <p className='d'>Higher Profits</p>
        <p className='desc'>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
        </div>
        <div className="img2">
        <img className='i' src={rocket}alt=''/>
        <p className='d'>Robust Scaling</p>
        <p className='desc'>
        Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
        </p>
        </div>
        <div className="img3">
        <img className='i' src={phone}alt=''/>
        <p className='e'>Best Selection</p>
        <p className='desc1'>
        With 900+ products and top quality brands,you can choose the best products for your business.
        </p>
        </div>
    </section> 

    <section className='designs-2'>
        <div className='photo_container'>
            <img className='photo' src={design} alt=''/>
        </div>
        <div className='side_heading'>
            <h2 className='side_head'>Easily add your design to a wide range of products</h2>
            <p className='side_desc'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
            <p className='arrow'>All products<IoIosArrowRoundForward/></p>
        </div>

    </section>

    <section className='stickers'>
        <div className="sticker1">
        <img className='sticker' src={custom_products}alt=''/>
        <h2 className='sticker_head'><span>Create</span><br/>custom products</h2>
        <p className='sticker_desc'>Easily add your designs to a wide range of products using our free tools</p>
        </div>
        <div className="sticker2">
          <img className='sticker' src={on_your_terms} alt=''/>
          <h2 className='sticker_head'><span>Sell</span><br/>on your terms</h2>
          <p className='sticker_desc'>You choose the products, sale price, and where to sell</p>
        </div>
        <div className="sticker3">
          <img className='sticker' src={fulfillment} alt=''/>
          <h2 className='sticker_head'><span>We handle</span><br/>
          fulfillment</h2>
          <p className='sticker_desc'>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
        </div>
    </section>

    <section className='message'>
      <div className='message_box'>
        <h2 className='message_head'>Are you a large business looking<br/> for custom solutions?</h2>
        <div className='message_button'>
          <p className='message_content'>Talk to sales</p>
        </div>
      </div>
    </section>
    </>
  )
}
export default Design;