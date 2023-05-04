import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import './ContactStyle.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsTelephone, BsInfoCircle} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Zepplin | Contact</title>
            </Helmet>
            <Breadcrumb title='Contact'/>
    <div className='contact-info home-hero2 py-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          {/*eslint-disable*/}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.586819266772!2d36.91064058261719!3d-1.2987135839875565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f136bf30c5c95%3A0xf2976014d91600bb!2sNyayo%20Estate%20Court%20781!5e0!3m2!1sen!2ske!4v1682498602189!5m2!1sen!2ske" 
          width="600" 
          height="450" 
          className='border-0 w-100'
          allowfullscreen=""
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade">
           </iframe>
          </div>
                    {/*eslint-enable*/}

          <div className="col-12 mt-5">
            <div className="contact-info2 d-flex justify-content-between">
              <div>

                <h3 className="contact-title text-white mb-4">Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                    <input type="email" className="form-control" placeholder='john123@example.com' />
                    </div>
                    <div>
                    <input type="tel" className="form-control" placeholder='+254123456..' />
                    </div>
                    <div>
                    <textarea type="text" className="w-100 form-control" placeholder='comments'
                    cols={20}
                    rows={5}></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                </form>
              </div>
              <div>

                <h3 className="contact-title text-white ps-5">Get in touch </h3>
                <div>
                  <ul className='py-3 ps-5'>
                    <li className='mb-4 d-flex align-items-center gap-15'>
                      <AiOutlineHome className='fs-5'/>
                      <address className='mb-0 text-white'>11806 - 00400,<br/>Nairobi, Kenya</address>
                    </li>
                    <li className='mb-4 d-flex align-items-center gap-15'>
                    <BsTelephone className='fs-5'/>
                    <a href="tel:+254712345678">+254712345678</a>
                    </li>
                    <li className='mb-4 d-flex align-items-center gap-15'>
                    <HiOutlineMail className='fs-5'/>
                    <a href="emailto:shitsama01@gmail.com">shitsama01@gmail.com</a>
                    </li>
                    <li className='mb-4 d-flex align-items-center gap-15'>
                      <BsInfoCircle className='fs-5'/>
                      <p className='mb-0 text-white'>Monday-Friday, 8 am–7 pm<br/> Saturday, 8 am–6 pm<br/>Sunday & Public Holiday, Closed</p>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact