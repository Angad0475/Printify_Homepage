import React from 'react'
import { TiTick } from "react-icons/ti";
import './Hero.scss';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import shirt from '../../Assets/shirt.jpeg';
import girl from '../../Assets/girl.png.jpeg';

function Hero() {
  return (
    <section className='hero'>
      <div className='heading'>
        <h1 className='heading-title'>
            Create and sell <br/>
            custom products
        </h1>
        <ul className='description'>
            <li><TiTick className='d'/>100% Free to use</li>
            <li><TiTick className='d'/>900+ High-Quality Products</li>
            <li><TiTick className='d'/>Largest global print network</li>
        </ul>
     
     <div className='box'>
     <div className='start_box'>
       <p className='start'>Start for free</p>
     </div>
      <div className='work_box'>
        <p className='work'><MdOutlineSlowMotionVideo/>How it works?</p>
      </div>
     </div>
     <p className='line'>Trusted by over 8M sellers around the world</p>
     </div>

     <div className='hero_image'>
        <img  className='shirt'src={shirt} alt=''/>
        <img className='girl' src={girl} alt=''/>

     </div>
    </section>
  )
}
export default Hero;
