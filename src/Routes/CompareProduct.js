import React from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import './CompareStyle.css'

const CompareProduct = () => {
  return (
  <> 
  <Helmet>
  <meta charSet="utf-8" />
  <title>Zepplin | Compare</title>
</Helmet>
<Breadcrumb title='Compare'/>
<div className="compare-product home-hero2 py-5">
    <div className="container-xxl">
        <div className="row">
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="x" className='cross position-absolute img-fluid'/>
                    <div className="product-card-img">
                        <img src="images/ben6.png" alt="ben1" className='img-fluid'/>
                    </div>
                    <div className="compare-products-details">
                        <h5 className="title py-1">Jughead-Black<br/> <i>Fall edition</i></h5>
                        <h6 className="price mb-5 mt-3">KES 700.00</h6>
                        <div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Brand</h5>
                                <p>Louis Vuitton</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Season</h5>
                                <p>Fall Collection</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>SKU</h5>
                                <p>SKUBEN6</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Size</h5>
                                <div className='d-flex gap-10'>
                                <p>Xs</p>
                                <p>M</p>
                                <p>L</p>
                                <p>Xl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="x" className='cross position-absolute img-fluid'/>
                    <div className="product-card-img">
                        <img src="images/ben2.png" alt="ben1" className='img-fluid'/>
                    </div>
                    <div className="compare-products-details">
                        <h5 className="title py-1">Elite-Socials<br/> <i>Fall edition</i></h5>
                        <h6 className="price mb-5 mt-3">KES 250.00</h6>
                        <div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Brand</h5>
                                <p>Zepplino</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Season</h5>
                                <p>Fall Collection</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>SKU</h5>
                                <p>SKUBEN2</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Size</h5>
                                <div className='d-flex gap-10'>
                                <p>Xs</p>
                                <p>M</p>
                                <p>L</p>
                                <p>Xl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="x" className='cross position-absolute img-fluid'/>
                    <div className="product-card-img">
                        <img src="images/ben3.png" alt="ben1" className='img-fluid' />
                    </div>
                    <div className="compare-products-details">
                        <h5 className="title py-1">Silver-Blacktterfly<br/> <i>Fall edition</i></h5>
                        <h6 className="price mb-5 mt-3">KES 500.00</h6>
                        <div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Brand</h5>
                                <p>Gucci</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Season</h5>
                                <p>Fall Collection</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>SKU</h5>
                                <p>SKUBEN3</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Size</h5>
                                <div className='d-flex gap-10'>
                                <p>Xs</p>
                                <p>M</p>
                                <p>L</p>
                                <p>Xl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="x" className='cross position-absolute img-fluid'/>
                    <div className="product-card-img">
                        <img src="images/ben4.png" alt="ben1" className='img-fluid'/>
                    </div>
                    <div className="compare-products-details">
                        <h5 className="title py-1">Pop-Punk:3000<br/> <i>Fall edition</i></h5>
                        <h6 className="price mb-5 mt-3">KES 450.00</h6>
                        <div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Brand</h5>
                                <p>Avril</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Season</h5>
                                <p>Fall Collection</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>SKU</h5>
                                <p>SKUBEN1</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                        </div><div>
                            <div className="product-detail py-4 mb-0">
                                <h5>Size</h5>
                                <div className='d-flex gap-10'>
                                <p>Xs</p>
                                <p>M</p>
                                <p>L</p>
                                <p>Xl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default CompareProduct