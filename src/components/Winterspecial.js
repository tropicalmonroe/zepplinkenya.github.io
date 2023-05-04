import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const Winterspecial = () => {
  return (
    <div className='col-4'>
      <div className="winter-special-card">
        <div className='d-flex justify-content-between gap-10'>
          <div>
            <img src='images/jacket1.png' alt='jacket1' className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">Summertime Sadness</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={4}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 4,500 <br/></span>
            <strike className="text-white">KES 5,500</strike>
            </p>
            <div className="discounted d-flex align-items-center gap-10 py-1">
              <p className='mb-0 text-white'>
                <b>10</b>days
              </p>
              <div className="d-flex align-items-center gap-15 mt-2">
                <span className='badge rounded-circle-5 p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>2</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>3</span>:
                </div>
                </div>
                <div className="numofavailableproducts mt-2">
                  <p className='text-white mb-0'>Quantity: 12</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "25%" }}
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
            <img src='images/sweat3.png' alt='jacket1' className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">SadnessPants</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={2}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 2,000 <br/></span>
            <strike className="text-white">KES 3,500</strike>
            </p>
            <div className="discounted d-flex align-items-center gap-10 py-1">
              <p className='mb-0 text-white'>
                <b>12</b>days
              </p>
              <div className="d-flex align-items-center gap-15 mt-2">
                <span className='badge rounded-circle-5 p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>2</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>3</span>:
                </div>
                </div>
                <div className="numofavailableproducts mt-2">
                  <p className='text-white mb-0'>Quantity: 22</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "15%" }}
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
            <img src='images/ben4.png' alt='jacket1' className='img-fluid' width="350" height="250"/>
          </div>
          <div className="winter-special-content">
            <h5 className="brand text-info">Pop-punk:3000</h5>
            <h6 className="title text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <StarRatingComponent
            starCount={5}
            emptyStarColor='#000'
            value={5}
            editing={true}
            />
            <p className="price mt-2"><span className="redprice">KES 450 <br/></span>
            <strike className="text-white">KES 600</strike>
            </p>
            <div className="discounted d-flex align-items-center gap-10 py-1">
              <p className='mb-0 text-white'>
                <b>10</b>days
              </p>
              <div className="d-flex align-items-center gap-15 mt-2">
                <span className='badge rounded-circle-5 p-3 bg-warning'>1</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>2</span>:
                <span className='badge rounded-circle-5 p-3 bg-warning'>3</span>:
                </div>
                </div>
                <div className="numofavailableproducts mt-2">
                  <p className='text-white mb-0'>Quantity: 32</p>
                  <div className="progress rounded-5">
                    <div className="progress-bar" 
                    role="progressbar" 
                    style={{width: "45%" }}
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

export default Winterspecial