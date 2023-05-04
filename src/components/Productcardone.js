import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link ,useLocation} from 'react-router-dom'


const Productcardone = (props) => {
  const {grid} = props;
  let location = useLocation();

  return (
    <>
    <div className={` ${location.pathname==="/store" ? `gr-${grid}` : "col-3"} `}>
        <div className="product-card">
            <div className="product-img">
                <img src='images/bestpack6.jpg' className='img-fluid' alt='Best-sellers' width="450" height="350"/>
                <img src='images/bestpack2.jpg' className='img-fluid' alt='Best-sellers' width="450" height="350"/>
            </div>
            <div className="product-details">
              <h6 className='brand py-3 mt-3'>Primark</h6>
              <h5 className='brand-title'>LittleVamp</h5>
              <StarRatingComponent
              starCount={5}
              emptyStarColor='#000'
              value={3}
              />
              <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati optio modi ducimus repudiandae rerum ullam, accusantium corrupti, quam reprehenderit accusamus error atque! Placeat fugit, autem id cupiditate excepturi commodi facilis!</p>
              <p className='price'>KES 5,500</p>
            </div>
            <div className="action-bar position-relative">
                <div className='d-flex flex-column gap-15'>
                    <Link>
                    <img src='images/add-cart.svg' alt='cart'/>
                    </Link>
                    <Link>
                    <img src='images/view.svg' alt='view'/>
                    </Link>
                    <Link>
                    <img src='images/prodcompare.svg' alt='compare'/>
                    </Link>
                    <div className="wishlist-icon position-relative">
                <Link>
                <img src='images/wish.svg' alt='wishlist'/>
                </Link>
            </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default Productcardone