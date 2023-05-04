import React from 'react'
import './FooterStyle.css'
import {Link} from 'react-router-dom'
import {BsInstagram, BsGithub, BsTwitter, BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer className='py-4 p-5'>
      <div className='contailer-xxl'>
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-newsletter d-flex gap-15 align-items-center">
              <img src='images/newsletter.png' alt='news' />
              <h3 className='mb-0 text-white'>Sign up for the latest Newsletter.</h3>
              </div>
          </div>
              <div className="col-7">
                <div className='input-group'>
                      <input type="text" 
                      class="form-control py-1" 
                      placeholder="Email details please..." 
                      aria-label="Email details please..." 
                      aria-describedby="basic-addon2" />
                      <span class="input-group-text p-2" id="basic-addon2">
                        Subscribe
                      </span>
                  </div>
                </div>
            
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contact us</h4>
            <div className='text-white fs-6'>
              <address>11806,<br/>
                Nairobi, <br/>
                Kenya.<br/>
                Code: 00400
              </address>
              <a href="tel: +254712592154" className="text-white mt-2 d-block mb-1">
                +254712592154</a>
              <a href="emailto: shitsamajohn01@gmail.com" className="text-white mt-2 d-block mb-0">
                shitsamajohn01@gmail.com</a>
                <div className="social-icons mt-4 d-flex align-items-center gap-30">
                   {/* eslint-disable */}
                  <a className='text-white' href="http://www.instagram.com/tropicalmonroe" target="_blank">
                    
                    <BsInstagram/>
                  </a>
                  <a className='text-white' href="http://www.linkedin.com/in/shitsamajohn/" target="_blank">
                    <BsLinkedin/>
                  </a>
                  <a className='text-white' href="http://github.com/tropicalmonroe" target="_blank">
                    <BsGithub/>
                  </a>
                  <a className='text-white' href="http://twitter.com/la_monroe_" target="_blank">
                    <BsTwitter/>
                  </a>
                   {/* eslint-enable */}
                </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/PrivacyPolicy' className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to='/RefundPolicy' className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to='/ShippingPolicy' className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to='/TermsAndConditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
              <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Spring collection</Link>
              <Link className='text-white py-2 mb-1'>Summer collection</Link>
              <Link className='text-white py-2 mb-1'>Autumn collection</Link>
              <Link className='text-white py-2 mb-1'>Winter collection</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className="row">
          <div className="col-12">
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}: powered by Shitsama John{" "}</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer