import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'

const Privacypolicy = () => {
  return (
      <>
      <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | PrivacyPolicy</title>
  </Helmet>
  <Breadcrumb title='PrivacyPolicy'/>
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

export default Privacypolicy