import React, { useState } from 'react';
import './Design.scss';
import piggy from '../../Assets/piggy.jpeg';
import rocket from '../../Assets/rocket.jpeg';
import phone from '../../Assets/phone.jpeg';
import design from'../../Assets/big_photo.jpeg';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import custom_products from '../../Assets/custom_products.jpeg';

import on_your_terms from '../../Assets/onyour_terms.jpeg';

import fulfillment from '../../Assets/fulfillment.jpeg';

function Design() {

  const stickers=[
    {
      imgSrc: custom_products,
      title: "create custom products",
      desc: "Easily add your designs to a wide range of products using our free tools",
    },
    {
      imgSrc: on_your_terms,
      title: "Sell on your terms",
      desc: "You choose the products, sale price, and where to sell",
    },
    {
      imgSrc: fulfillment,
      title: 'We handle fulfillment',
      desc: 'Once an order is placed, we automatically handle all the printing and delivery logistics',
    },
  ];
  const [currentIndex, setCurrentIndex]=useState(0);

  const handlePrev=()=>{
    if(currentIndex >0){
      setCurrentIndex(currentIndex-1);
    }
  };

  const handleNext=()=>{
    if(currentIndex<stickers.length-1){
      setCurrentIndex(currentIndex+1);
    }
  };
 
  const currentSticker=stickers[currentIndex];
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
        <img className='sticker' src={currentSticker.imgSrc}alt=''/>
        <h2 className='sticker_head'><span>{currentSticker.title.split(' ')[0]}</span><br/>{currentSticker.title.split(" ").slice(1).join(' ')}</h2>
        <p className='sticker_desc'>{currentSticker.desc}</p>
        </div>

        <div className='pagination'>
          <div>
          <FaArrowLeftLong onClick={handlePrev} disabled={currentIndex===0}/>
          </div>
          <div>
          <FaArrowRightLong onClick={handleNext} disabled={currentIndex=== stickers.length-1}/>
          </div>
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