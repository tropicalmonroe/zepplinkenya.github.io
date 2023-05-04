import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | Sign-Up</title>
  </Helmet>
  <Breadcrumb title='Sign-up'/>
  <div className='Login py-5 home-hero1'>
    <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="login-card text-center p-3">
                    <h3 className='mb-3'>Create an account</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                    <div>
                            <input type="text" name='name' 
                            placeholder='Name' className="form-control" />
                        </div>
                        <div>
                            <input type="email" name='email' 
                            placeholder='Email' className="form-control" />
                        </div>
                        <div>
                            <input type="tel" name='mobile' 
                            placeholder='Mobile number' className="form-control" />
                        </div>
                        <div>
                            <input type="password" name='password' 
                            placeholder='Password' className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <div className="mt-4 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0'>Create</button>
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
    );
};

export default Signup