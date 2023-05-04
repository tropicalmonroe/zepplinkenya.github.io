import React from 'react'
import './Wishlist.css'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'

const Wishlist = () => {
  return (
    <>
    <Helmet>
  <meta charSet="utf-8" />
  <title>Zepplin | Favourite</title>
</Helmet>
<Breadcrumb title='Favourite Wishlist '/>
    <div className='wishlist home-hero1 py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="x" className='cross position-absolute img-fluid'/>
                        <div className="wishlist-card-image">
                            <img src="images/arrival2.png" alt="" className='img-fluid w-100'/>
                        </div>
                        <div className='bg-white px-2 py-3'>
                        <h5 className="title">Dr Martens 10Classic boots</h5>
                        <h6 className="price">KES 5,000.00</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="x" className='cross position-absolute img-fluid'/>
                        <div className="wishlist-card-image">
                            <img src="images/arrival3.png" alt="" className='img-fluid w-100'/>
                        </div>
                        <div className='bg-white px-2 py-3'>
                        <h5 className="title">Dr Martens 10Classic boots</h5>
                        <h6 className="price">KES 5,000.00</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="x" className='cross position-absolute img-fluid'/>
                        <div className="wishlist-card-image">
                            <img src="images/arrival4.png" alt="" className='img-fluid w-100'/>
                        </div>
                        <div className='bg-white px-2 py-3'>
                        <h5 className="title">Dr Martens 10Classic boots</h5>
                        <h6 className="price">KES 5,000.00</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="x" className='cross position-absolute img-fluid'/>
                        <div className="wishlist-card-image">
                            <img src="images/arrival2.png" alt="" className='img-fluid w-100'/>
                        </div>
                        <div className='bg-white px-2 py-3'>
                        <h5 className="title">Dr Martens 10Classic boots</h5>
                        <h6 className="price">KES 5,000.00</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Wishlist