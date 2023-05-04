import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
  const { title } = props;
  return (
    <div className='breadcrumb py-4 mb-0'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center text-white'>
              <Link to='/'>Home &nbsp;</Link> / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb