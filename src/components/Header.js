import React from 'react'
import './HeaderStyle.css'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
    <header className='top-header '>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'>
                <p className='text-white mb-0 ml-1'>
                  Free Shipping for Over 2,500 & Free Returns
                </p></div>
                <div className='col-6'>
                  <p className='text-end text-white mb-0'>
                    Hotline: <a className='text-white' href='+254712592154'>+254712592154</a>
                  </p>
                </div>
            </div>
        </div>
    </header>
    <header className='upper-header py-2'>
    <div className='container-xxl'>
            <div className='row align-items-center'>
              <div className='col-2 p-2'>
                <h2>
                <Link to='/'>
                Zepplin.
                </Link>
                </h2>
              </div>
              <div className='col-5'>
              <div className='input-group'>
  <input type="text" 
  class="form-control py-3" 
  placeholder="Product search..." 
  aria-label="Product search..." 
  aria-describedby="basic-addon2" />
  <span class="input-group-text p-3" id="basic-addon2">
    <BsSearch className='fs-6' />
  </span>
</div>
      </div>
        <div className='col-5'>
          <div className='upperlinks d-flex align-items-center'>
          <div>
            <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white'>
            <img src='images/compare.svg' alt='compare' />
            <p className='products mb-0'>Compare <br/>products</p>
            </Link>
          </div>
          <div>
            <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
            <img src='images/wishlist.svg' alt='wishlist' />
            <p className='products mb-0'>Favourite <br/>wishlist</p>
            </Link>
          </div>
          <div>
            <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
            <img src='images/user.svg' alt='Login' />
            <p className='products mb-0'>Login <br/>Account</p>
            </Link>
          </div>
          <div>
            <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
            <img src='images/cart.svg' alt='Cart' />
            <div className='products d-flex flex-column'>
              <span className='badge bg-white text-dark'>0</span>
              <p className='mb-0'>KES-50</p>
            </div>
            </Link>
            </div>
          </div>
        </div>
    </div>
  </div>
    </header>
    <header className='bottom-header py-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
              <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
  type="button" 
  data-bs-toggle="dropdown" 
  aria-expanded="false">
    <img src='images/menu.svg' alt='menu'/>
    <span className='me-5 d-inline-block'>Buyer's Choice</span>
  </button>
  <ul class="dropdown-menu">
    {/* eslint-disable */}
    <li><Link className="dropdown-item text-white" to=" ">Action
    </Link>
    </li>
    <li><Link className="dropdown-item text-white" to=" ">Another action
    </Link>
    </li>
    <li><Link className="dropdown-item text-white" to=" ">Something else here
    </Link>
    </li>
  </ul>
</div>
    {/* eslint-enable */}
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink className='text-white'to='/'>Home</NavLink>
                  <NavLink className='text-white' to='/store'>Store</NavLink>
                  <NavLink className='text-white' to='/blogs'>Blogs</NavLink>
                  <NavLink className='text-white' to='/contact'>Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header