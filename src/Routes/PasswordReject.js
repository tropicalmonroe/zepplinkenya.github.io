import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'

const PasswordReject = () => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | Password-Reset</title>
  </Helmet>
  <Breadcrumb title='Password-Reset'/>
  <div className='Login py-5 home-hero1'>
    <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="login-card text-center p-3">
                    <h3 className='mb-3'>Reset Password</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input type="password" name='password' 
                            placeholder='Password' className="form-control" />
                        </div>
                        <div>
                            <input type="password" name='confpassword' 
                            placeholder='Confirm Password' className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <div className="mt-4 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0'>Confirm</button>
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

export default PasswordReject