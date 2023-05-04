import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const Winterspecialthree = () => {
  return (
    <div className='col-4 mb-0'>
      <div className="winter-special-card">
        <div className='d-flex justify-content-between gap-10'>
          <div>
            <img src='images/jacket3.png' alt='jacket1'className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">The Velvet 70's</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={3}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 3,500 <br/></span>
            <strike className="text-white">KES 4,000</strike>
            </p>
            <div className="discounted d-flex align-items-center gap-10 py-1">
              <p className='mb-0 text-white'>
                <b>6</b>days
              </p>
              <div className="d-flex align-items-center gap-15 mt-2">
                <span className='badge rounded-circle-5 p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>2</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>3</span><br/>
                </div>
                </div>
                <div className="numofavailableproducts mt-2 ">
                  <p className='text-white mb-0'>Quantity: 7</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "50%" }}
                    aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                    </div>
                    </div>            
            </div>
            <Link className='button mt-4 px-3'>Flash sale!</Link>
          </div>
        </div>
<br/><br/>

<div className='d-flex justify-content-between gap-10'>
          <div>
            <img src='images/sweat1.png' alt='jacket1'className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">Baby Begels</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={4}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 900 <br/></span>
            <strike className="text-white">KES 1,100</strike>
            </p>
            <div className="discounted d-flex align-items-center gap-10 py-1">
              <p className='mb-0 text-white'>
                <b>3</b>days
              </p>
              <div className="d-flex align-items-center gap-15 mt-2">
                <span className='badge rounded-circle-5 p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>2</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>3</span><br/>
                </div>
                </div>
                <div className="numofavailableproducts mt-2 ">
                  <p className='text-white mb-0'>Quantity: 11</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "80%" }}
                    aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                    </div>
                    </div>            
            </div>
            <Link className='button mt-4 px-3'>Flash sale!</Link>
          </div>
        </div>
<br/><br/>

<div className='d-flex justify-content-between gap-10'>
          <div>
            <img src='images/ben2.png' alt='jacket1'className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">Elite Socials</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={3}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 250 <br/></span>
            <strike className="text-white">KES 400</strike>
            </p>
            <div className="discounted d-flex align-items-center gap-10 py-1">
              <p className='mb-0 text-white'>
                <b>8</b>days
              </p>
              <div className="d-flex align-items-center gap-15 mt-2">
                <span className='badge rounded-circle-5 p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>2</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>3</span><br/>
                </div>
                </div>
                <div className="numofavailableproducts mt-2 ">
                  <p className='text-white mb-0'>Quantity: 17</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "71%" }}
                    aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                    </div>
                    </div>            
            </div>
            <Link className='button mt-4 px-3'>Flash sale!</Link>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Winterspecialthree