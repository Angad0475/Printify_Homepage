import React from 'react'
import './Design.scss';
import piggy from '../../Assets/piggy.jpeg';
import rocket from '../../Assets/rocket.jpeg';
import phone from '../../Assets/phone.jpeg';

function Design() {
  return (
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
  )
}
export default Design;