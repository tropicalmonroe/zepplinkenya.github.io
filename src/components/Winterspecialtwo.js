import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const Winterspecialtwo = () => {
  return (
    <div className='col-4'>
      <div className="winter-special-card">
        <div className='d-flex justify-content-between gap-10'>
          <div>
            <img src='images/jacket2.png' alt='jacket1' className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">The Black Angel</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={5}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 4,000 <br/></span>
            <strike className="text-white">KES 5,000</strike>
            </p>
            <div className="discounted d-flex align-items-center gap-10 py-1">
              <p className='mb-0 text-white'>
                <b>4</b>days
              </p>
              <div className="d-flex align-items-center gap-15 mt-2">
                <span className='badge rounded-circle-5 p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>2</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>3</span><br/>
                </div>
                </div>
                <div className="numofavailableproducts mt-2">
                  <p className='text-white mb-0'>Quantity: 5</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "75%" }}
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
            <img src='images/sweat2.png' alt='jacket1' className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">Cargo Angel</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={5}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 1,000 <br/></span>
            <strike className="text-white">KES 1,800</strike>
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
                <div className="numofavailableproducts mt-2">
                  <p className='text-white mb-0'>Quantity: 15</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "60%" }}
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
            <img src='images/ben6.png' alt='jacket1' className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">Jughead-black</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={5}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 700 <br/></span>
            <strike className="text-white">KES 800</strike>
            </p>
            <div className="discounted d-flex align-items-center gap-10 py-1">
              <p className='mb-0 text-white'>
                <b>14</b>days
              </p>
              <div className="d-flex align-items-center gap-15 mt-2">
                <span className='badge rounded-circle-5 p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>2</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>3</span><br/>
                </div>
                </div>
                <div className="numofavailableproducts mt-2">
                  <p className='text-white mb-0'>Quantity: 25</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "54%" }}
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
<br/><br/>

<div/>
<div/>
</div>
  )
}

export default Winterspecialtwo