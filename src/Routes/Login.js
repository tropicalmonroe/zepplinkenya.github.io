import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import './LoginStyle.css'

const Login = () => {
  return (
    <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | Login</title>
  </Helmet>
  <Breadcrumb title='Login'/>
    <div className='Login py-5 home-hero2'>
        <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="login-card text-center p-3">
                    <h3 className='mb-3'>Login</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input type="email" name='email' 
                            placeholder='Email' className="form-control" />
                        </div>
                        <div>
                            <input type="password" name='password' 
                            placeholder='Password' className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <Link to='/forgot-password' className='forgot mt-4'>Forgot Password?</Link>
                            <div className="mt-4 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0'type='submit'>Login</button>
                                <Link to='/signup' className='button signup'>Sign Up</Link>
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

export default Login