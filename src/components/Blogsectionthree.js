import React from 'react'
import { Link } from 'react-router-dom'

const Blogsectionthree = () => {
  return (
    <div className='col-3'>
        <div className='blog-section'>
            <div className="blog-img">
                <img src='images/blog-4.jpg' className='img-fluid' alt='Blog1' width="324" height="249"/>
            </div>
            <div className="blog-content">
                <p className="Date py-1">20/04/2023</p>
                <h5 className='title'>Europe gothic chapter</h5>
                <p className="describe">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quod veniam eius ut. Nulla officia nesciunt aspernatur, amet illum minus nihil dolore odit, impedit ipsam veritatis itaque mollitia minima iure.</p>
                <Link to='/' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    
  )
}

export default Blogsectionthree