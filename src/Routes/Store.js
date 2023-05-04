import React, { useState } from 'react'
import './storestyle.css'
import Breadcrumb from '../components/Breadcrumb'
import {Helmet} from 'react-helmet'
import StarRatingComponent from 'react-star-rating-component';
import Productcard from '../components/Productcard';
import Productcardone from '../components/Productcardone';


const Store = () => {
    const [grid, setGrid] = useState(4);

return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Zepplin | Store</title>
            </Helmet>
    <Breadcrumb title='Store'/>

    <div className="main-store .home-hero2 py-5 bg-white">
        <div className="container-xxl">
            <div className="row">
                <div className="col 3">
                    <div className='filtersection mb-3'>
                        <h3 className="filter-title text-white">Category</h3>
                        <div className="filter-title">
                            <ul className='text-white'>
                                <li>Bracelets</li>
                                <li>Anklets</li>
                                <li>Chokers</li>
                                <li>Rings</li>
                                <li>Nose-Ring</li>
                                <li>Stockings</li>
                                <li>Boots</li>
                                <li>Ear-piercing</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filtersection mb-3'>
                        <h3 className="filter-title text-white">Filter By</h3>
                        <div className='sub-title text-white'>
                            <h6>Available</h6>
                            <div className="form-check">
                                <input className="form-input" type="checkbox" value="" id="" />
                                <label className="form-label" for="">In-stock</label>
                            </div>
                            <div className="form-check">
                                <input className="form-input" type="checkbox" value="" id="" />
                                <label className="form-label" for="">Out-of-stock</label>
                            </div>
                        </div>

                        <div className='sub-title text-white'>
                            <h6>Price</h6>
                            <div className=' d-flex gap-10'>
                            <div className="form-floating mb-3 text-secondary">
                        <input type="email" className="form-control py-1" 
                        id="floatingInput" 
                        placeholder="From:"/>
                        <label htmlFor="floatingInput1">From</label>
                        </div>
                        <div className="form-floating text-secondary">
                        <input type="password" 
                        className="form-control py-1" 
                        id="floatingPassword" 
                        placeholder="To:"/>
                        <label htmlFor="floatingInput2">To</label>
                        </div>
                        </div>
                        </div>

                        <div className='sub-title text-white'>
                            <h6>Sizes</h6>
                            <div className="form-check">
                                <input className="form-input" type="checkbox" value="" id="" />
                                <label className="form-label" htmlFor="">XS</label>
                            </div>
                            <div className="form-check">
                                <input className="form-input" type="checkbox" value="" id="color-1" />
                                <label className="form-label" htmlFor="color-1">S</label>
                            </div>
                            <div className="form-check">
                                <input className="form-input" type="checkbox" value="" id="color-1" />
                                <label className="form-label" htmlFor="color-1">M</label>
                            </div>
                            <div className="form-check">
                                <input className="form-input" type="checkbox" value="" id="color-1" />
                                <label className="form-label" htmlFor="color-1">L</label>
                            </div>
                            <div className="form-check">
                                <input className="form-input" type="checkbox" value="" id="color-1" />
                                <label className="form-label" htmlFor="color-1">XL</label>
                            </div>
                        </div>
                    </div>

                    <div className='filtersection mb-3'>
                        <h3 className="filter-title text-white">Shop Tags</h3>
                        <div>
                            <div className="shop-tags gap-10 d-flex flex-wrap align-items-center">
                                <span className="badge bg-secondary mt-2 rounded-3 py-2 px-2">Boots</span>
                                <span className="badge bg-secondary mt-2 rounded-3 py-2 px-2">Bracelets</span>
                                <span className="badge bg-secondary mt-2 rounded-3 py-2 px-2">Anklets</span>
                                <span className="badge bg-secondary mt-2 rounded-3 py-2 px-2">Chokers</span>
                                <span className="badge bg-secondary mt-2 rounded-3 py-2 px-2">Rings</span>
                                <span className="badge bg-secondary mt-2 rounded-3 py-2 px-2">Nose-Ring</span>
                                <span className="badge bg-secondary mt-2 rounded-3 py-2 px-2">Stockings</span>
                                <span className="badge bg-secondary mt-2 rounded-3 py-2 px-2">Ear-piercing</span>
                            </div>
                        </div>
                    </div>
                    <div className='filtersection mb-3'>
                        <h3 className="filter-title text-white">Suggested</h3>
                        <div>
                            <div className="random-products d-flex">
                                <div className="w-75 gap-15 text-white">
                                    <img src='images/stockin.jpg' className='m-2' alt='' width="450" height="100"/>
                                    <h5>SwedXXx</h5>
                                    <StarRatingComponent
                                    starCount={5}
                                    emptyStarColor='#000'
                                    value={5}
                                    editing={true}
                                    />
                                    <p>KES 3500.00</p>
                                </div>
                                <div className="w-75 gap-15 text-white align-items-center">
                                    <img src="images/choker.jpg" className='m-2' alt="" width="450" height="100"/>
                                    <h5>Hail-Mary</h5>
                                    <StarRatingComponent
                                    starCount={5}
                                    emptyStarColor='#000'
                                    value={5}
                                    editing={true}
                                    />
                                    <p>KES 2,500.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center gap-10'>
                            <div className="mb-0 d-flex"><p className='text-white mb-0'>Sort By:</p></div>
                            <select name="" id="" className="form-control form-select">
                                <option value="Manual">Featured</option>
                                <option value="best-selling" selected='selected'>Best Seller</option>
                                <option value="Ascending order">Alphabetical: A-Z</option>
                                <option value="Descending order">Alphabetical: Z-A</option>
                                <option value="Price-ascending">Price: Low to High</option>
                                <option value="Price-descending">Price: High to Low</option>
                                <option value="created-ascending">Date: Old to New</option>
                                <option value="created-descending">Date: New to Old</option>
                            </select>
                        </div>
                        <div className='d-flex gap-15 align-items-center'>
                            <div className='Products-count text-white'>22 Available</div>
                            <div className="d-flex align-items-center gap-10 grid">
                                <img onClick={()=>{setGrid(3);}} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                                <img onClick={()=>{setGrid(4);}} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                                <img onClick={()=>{setGrid(6);}} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                                <img onClick={()=>{setGrid(12);}} src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products-list pb-5">
                    <div className="d-flex gap-10 flex-wrap">
                    <Productcard grid={grid}/>
                    <Productcardone grid={grid}/>
                    
                    </div>

                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Store