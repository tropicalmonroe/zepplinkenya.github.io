import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import './LoginStyle.css'


const Forgotpassword = () => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | Forgot Password</title>
  </Helmet>
  <Breadcrumb title='Forgot-password?'/>
  <div className='Login py-5 home-hero1'>
            <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="login-card text-center p-3">
                    <h3 className='mb-3'>Password Reset</h3>
                    <p className="text-cente my-2 mb-4">We will send you an email to reset your password</p>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input type="email" name='email' 
                            placeholder='Email' className="form-control" />
                        </div>
                        
                        <div className='mb-3'>
                            
                            <div className="mt-4 d-flex flex-column justify-content-center gap-15 align-items-center">
                                <button className='button border-0' type='submit'>Submit</button>
                                <Link to='/login' className='button signup'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Forgotpassword