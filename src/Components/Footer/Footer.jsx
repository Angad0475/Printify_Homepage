import React from 'react'
import './Footer.scss';
import logo from '../../Assets/logo.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
function Footer() {
  return (
    <footer className='panel'>
      <div className='upper-panel'>
        <div className='footer-logo'>
        <img className='logo' src={logo} alt=''/>  
        <p className='logo_name'>Printify</p>     
        </div>
        

        <div className='links'>
          <li className='link'><FaFacebook className='symbol'/></li>
          <li className='link'><FaInstagram className='symbol'/></li>
          <li className='link'><FaLinkedinIn className='symbol'/></li>
          <li className='link'><FaXTwitter className='symbol'/></li>
          <li className='link'><FaYoutube className='symbol'/></li>
          <li className='link'><FaTiktok className='symbol'/></li>
          <li className='link'><FaRedditAlien className='symbol'/></li>
        </div>
      </div>

      <div className='middle-panel'>
        <div className='h'>
          <h2>Integrations</h2>
          <li className='other'>Shopify</li>
          <li className='other'>Etsy</li>
          <li className='other'>eBay</li>
          <li className='other'>Amazon</li>
          <li className='other'>TikTok Shop</li>
          <li className='other'>PrestaShop</li>
          <li className='other'>BigCommerce</li>
          <li className='other'>Wix</li>
          <li className='other'>WooCommerce</li>
          <li className='other'>Squarespace</li>
          <li className='other'>Printify API</li>
          <li className='other'>Printify Pop-Up Store</li>
          <li className='other'>Shutterstock</li>
        </div>

        <div className='h'>
          <h2>Discover</h2>

          <li className='other'> Blog</li> 
          <li className='other'>Guides</li>
          <li className='other'>Products</li>
          <li className='other'>Etsy print-on-demand</li>
          <li className='other'>Shopify print-on-demand</li>
          <li className='other'>Woocommerce print-on-demand</li>
          <li className='other'>Wix print-on-demand</li>
          <li className='other'>Squarespace print-on-demand</li>
          <li className='other'>Make Your Own Shirt</li>
          <li className='other'>Brands</li>
          <li className='other'>Pricing</li>
          <li className='other'>Shipping Rates</li>
          <li className='other'>Mockup Generator
          </li>
  
        </div>

        <div className='h'>
          <h2>Start selling</h2>
          
          <li className='other'>Custom T-shirts</li>
          <li className='other'>Custom Hoodies</li>
          <li className='other'>Custom Mugs</li>
          <li className='other'>Custom Socks</li>
          <li className='other'>Custom Backpacks</li>
          <li className='other'>Custom Branding</li>
          <li className='other'>Sell on Etsy</li>
          <li className='other'>Sell on Social Media</li>
          <li className='other'>Free T-shirt Designs</li>
          <li className='other'>Custom Products</li>
          <li className='other'>Custom All-Over-Print Hoodies</li>
          <li className='other'>Start a Clothing Line</li>
          <li className='other'>Start POD Business</li>
          <li className='other'>Bulk Orders</li>
          <li className='other'>Transfering To Printify</li>
        </div>

        <div className='h'>
          <h2>Printify</h2>

          <li className='other'>Print on Demand</li>
          <li className='other'>Print Providers</li>
          <li className='other'>Experts Program</li>
          <li className='other'>Printify Express Delivery</li>
          <li className='other'>Become a Partner</li>
          <li className='other'>About</li>
          <li className='other'>Printify Quality Promise</li>
          <li className='other'>Jobs</li>
          <li className='other'>Webinars</li>
          <li className='other'>Printing Profits Podcast</li>
          <li className='other'>Contact Us</li>
          <li className='other'>Affiliate</li>
          <li className='other'>Contact Sales</li>
          <li className='other'>POD Glossary</li>
          <li className='other'>Network Fulfillment Status
          </li>
          <li className='other'>Merchant Protection</li>
          <li className='other'>Security</li>
          <li className='other'>Sitemap</li>

        </div> 
      </div>

      <div className='lower-panel'>
        <div className='directions'>
          <li className='other_links'>Intellectual Property Policy</li>
          <li className='other_links'>Terms of Service</li>
          <li className='other_links'>Privacy Policy</li>
          <li className='other_links'>Security</li>

        </div>
        <div className='copyright'>
            <p>&copy;2024 Printify, Inc. All rights reserved.</p> 
        </div>
      </div>
    </footer>
  )
}
export default Footer;
