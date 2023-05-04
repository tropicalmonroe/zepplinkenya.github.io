import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'

const Refundpolicy = () => {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | RefundPolicy</title>
  </Helmet>
  <Breadcrumb title='RefundPolicy'/>
  <section className='policies home-hero2 py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="terms-policy"></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Refundpolicy