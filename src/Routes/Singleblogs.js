import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'


const Singleblogs = () => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | East Asia Issa `Vibe`</title>
  </Helmet>
  <Breadcrumb title='East Asia Issa `Vibe`'/>
  <div className='blog home-hero2 py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to='/blogs' className='fs-5 d-flex align-items-center gap-10'><BsFillArrowLeftCircleFill/> Go back</Link>
                        <h3 className="title">East Asia Issa `Vibe`</h3>
                        <img src="images/blogbig.jpg" className='img-fluid w-100 my-4' alt="blog" />
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus atque consequuntur error consectetur voluptate quam commodi. Quos sapiente necessitatibus, odit molestias dignissimos excepturi harum, est amet eligendi, optio quasi!</p>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Singleblogs