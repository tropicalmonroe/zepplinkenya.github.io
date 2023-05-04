import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import './cartstyle.css'
import {AiOutlineDelete} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | Cart</title>
  </Helmet>
  <Breadcrumb title='Cart'/>

  <section className="cart home-hero2 py-5">
    <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className='cart-header py-3 d-flex align-content-center justify-content-between'>
                    <h4 className='cart-col-1 '>Product</h4>
                    <h4 className='cart-col-2'>Price</h4>
                    <h4 className='cart-col-3'>Quantity</h4>
                    <h4 className='cart-col-4'>Total</h4>
                </div>
                </div>
                <div className="col-12">
                <div className='cart-data mb-2 py-3 d-flex align-items-center justify-content-between'>
                    <div className='cart-col-1  align-items-center gap-15'>
                        <div className='w-75'><img src="images/bestpack1.jpg" className='img-fluid' alt="bestpack" /></div>
                        <h5 className='mt-3'>Mellow Monday 1</h5>
                        <p>Size: L</p>
                        <p>Color: Always black</p>
                    </div>
                    <div className='cart-col-2 '>
                        <h5 className="price ">KES 7500.00</h5>
                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div className='align-items-center'>
                            <input className='form-control'
                                min={1} 
                                max={15} 
                                style={{"width":"70px"}} 
                            type="number" 
                            name="" 
                            id="" />
                            </div>
                            <div className='w-50 p-3 text-danger '><AiOutlineDelete/></div>
                    </div>
                    <div className='cart-col-4'>
                    <h5 className="price ">KES 7500.00</h5>
                    </div>
                </div>
                <div className='cart-data mb-2 py-3 d-flex align-items-center justify-content-between'>
                    <div className='cart-col-1  align-items-center gap-15'>
                        <div className='w-75'><img src="images/bestpack5.png" className='img-fluid' alt="bestpack" /></div>
                        <h5 className='mt-3'>Mellow Monday 2</h5>
                        <p>Size: M</p>
                        <p>Color: Always black</p>
                    </div>
                    <div className='cart-col-2 '>
                        <h5 className="price ">KES 7500.00</h5>
                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div className='align-items-center'>
                            <input className='form-control'
                                min={1} 
                                max={15} 
                                style={{"width":"70px"}} 
                            type="number" 
                            name="" 
                            id="" />
                            </div>
                            <div className='w-50 p-3 text-danger '><AiOutlineDelete/></div>
                    </div>
                    <div className='cart-col-4'>
                    <h5 className="price ">KES 7500.00</h5>
                    </div>
                </div>
            </div>
            <div className="col-12 py-2 mt-4 d-flex justify-content-between align-items-center">
                <div className='d-flex justify-content-between align-items-baseline'>
                    <Link to='/' className='button '>Continue Shopping</Link>
                    </div>
                    <div className='d-flex flex-column justify-content-end'>
                        <h4>Subtotal: KES: 15,000</h4>
                        <p>Lorem, ipsum dolor sit amet ferendis.</p>
                        <Link to='/checkout' className='button'>CheckOut</Link>
                    </div>
                
            </div>
        </div>
    </div>
  </section>
    </>
  )
}

export default Cart