import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import StarRatingComponent from 'react-star-rating-component';
import Blogsection from '../components/Blogsection'
import Blogsectionone from '../components/Blogsectionone';
import Blogsectiontwo from '../components/Blogsectiontwo';
import Blogsectionthree from '../components/Blogsectionthree'

const Blogs = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Zepplin | Blogs</title>
            </Helmet>
            <Breadcrumb title='Blogs'/>
    <div className='blog home-hero2 py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className='filtersection mb-3'>
                        <h3 className="filter-title text-white">Category</h3>
                        <div className="filter-title">
                            <ul>
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
                                    <h5>Hail-Mary 2023</h5>
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
                <div className="col-9 d-flex gap-15 mb-3">
                    <div className="row">
                    <Blogsection/>
                    <Blogsectionone/>
                    <Blogsectiontwo/>
                    <Blogsectionthree/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogs