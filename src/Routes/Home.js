import React from 'react'
import {Link} from 'react-router-dom'
import Marquee from "react-fast-marquee"
import './HomeStyle.css'
import Blogsection from '../components/Blogsection';
import Blogsectionone from '../components/Blogsectionone';
import Blogsectiontwo from '../components/Blogsectiontwo';
import Blogsectionthree from '../components/Blogsectionthree';
import Productcard from '../components/Productcard';
import Productcardone from '../components/Productcardone';
import Productcardtwo from '../components/Productcardtwo';
import Productcardthree from '../components/Productcardthree';
import Winterspecial from '../components/Winterspecial';
import Winterspecialtwo from '../components/Winterspecialtwo';
import Winterspecialthree from '../components/Winterspecialthree';
import {Helmet} from 'react-helmet'


const Home = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Zepplin</title>
            </Helmet>
    <section className="hero1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img src='images/banner6.jpg' className='img1 img-fluid rounded-3' alt='banner'/>
              <div className='main-banner-content  position-absolute'>
                <h4>1999 METAL COLLECTION.</h4>
                <h5>THE PSYCHSOCIAL : SLIPKNOT.</h5>
                <p>From Xs & S : KES 1000.00<br/><br/> M & L : KES 1200.00<br/><br/> XL : KES 1400.00*</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="other-banner position-relative p-3">
              <img src='images/banner5.jpg' className='img-fluid rounded-3' alt='banner'/>
              <div className='other-banner-content  position-absolute'>
                <h4>AC/DC COLLECTION.</h4>
                <h5>BACK IN BLACK.</h5>
              </div>
            </div>
            <div className="other-banner position-relative p-3">
              <img src='images/banner4.jpg' className='img-fluid rounded-3' alt='banner'/>
              <div className='other-banner-content  position-absolute'>
                <h4>GUNS 'N' ROSES STRIPES</h4>
                <h5>APPETITE<br/>FOR<br/>DISTRUCTIONs</h5>
              </div>
            </div>
            <div className="other-banner position-relative p-3">
              <img src='images/banner3.jpg' className='img-fluid rounded-3' alt='banner'/>
              <div className='other-banner-content  position-absolute'>
                <h4>New Arrival</h4>
                <h5>KISS<br/>E<span className='text-white'>DITION</span></h5>
              </div>
            </div>
            <div className="other-banner position-relative p-3">
              <img src='images/banner2.jpg' className='img-fluid rounded-3' alt='banner'/>
              <div className='other-banner-content  position-absolute'>
                <h4>WINTER COLLECTION.</h4>
                <h5>BLINK<span className='text-white'>-182</span></h5>
              </div>
            </div>
            </div>
          </div>
          <div className="col-6"></div>
          <div className="col-6"></div>


        </div>
      </div>
    </section>
    
    <section className="home-hero2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className='d-flex align-items-center gap-10'>
                <img src='images/service.png' alt='Delivery'/>
                <div>
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>For all orders over KES2500</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/service-02.png' alt='Discount'/>
                <div>
                  <h6>Daily Discount Offers</h6>
                  <p className='mb-0'>Save up to 25% off</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/service-03.png' alt='Customer service'/>
                <div>
                  <h6>24/7 Support</h6>
                  <p className='mb-0'>Shop with an expert guidance</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/service-04.png' alt='Affordable prices'/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get factory direct price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <img src='images/service-05.png' alt='Debit'/>
                <div>
                <h6>Secure Payment</h6>
                  <p className='mb-0'>100% protected payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='.home-hero2 py-5'>
      <div className="container-xxl">
      <div className="row">
      <div className="col-12">
      <div className="categories text-white d-flex align-items-center flex-wrap justify-content-between">
        <div className='d-flex gap-15 align-items-center'>
          <div>
            <h6>Bracelets</h6>
            <p>100+ categories</p>
          </div>
          <img src='images/bracelet1.jpg' alt='Anklet' width="225" height="150"/>
        </div>
        <div className='d-flex gap-15 align-items-center'>
          <div>
            <h6>Anklets</h6>
            <p>150+ categories</p>
          </div>
          <img src='images/anklet.jpg' alt='Anklet' width="225" height="150"/>
        </div><div className='d-flex gap-15 align-items-center'>
          <div>
            <h6>Chokers</h6>
            <p>85+ categories</p>
          </div>
          <img src='images/choker.jpg' alt='Chokers'width="225" height="150"/>
        </div><div className='d-flex gap-15 align-items-center'>
          <div>
            <h6>Rings</h6>
            <p>120+ categories</p>
          </div>
          <img src='images/rings.jpg' alt='Rings'width="225" height="150"/>
        </div>

        <div className='d-flex gap-15 align-items-center mt-4'>
          <div>
            <h6>Nose-Ring</h6>
            <p>180+ categories</p>
          </div>
          <img src='images/nosering.jpg' alt='Nosering' width="225" height="150"/>
        </div>
        <div className='d-flex gap-15 align-items-center mt-4'>
          <div>
            <h6>Stockings</h6>
            <p>65+ categories</p>
          </div>
          <img src='images/stockin.jpg' alt='Stockins' width="225" height="150"/>
        </div><div className='d-flex gap-15 align-items-center mt-4'>
          <div>
            <h6>Boots</h6>
            <p>150+ categories</p>
          </div>
          <img src='images/boots.jpg' alt='Boots'width="225" height="150"/>
        </div><div className='d-flex gap-15 align-items-center mt-4'>
          <div>
            <h6>Ear-piercing</h6>
            <p>140+ categories</p>
          </div>
          <img src='images/earring.jpg' alt='Earrings'width="225" height="150"/>
        </div>
      </div>
      </div>
      </div>
      </div>
      
    </section>

    <section className="new-arrivals py-5 home-hero2 bg-dark">
  <div className="container-xxl">
    <div className="row">
    <h3 className="Sectionheder text-white">New Arrivals</h3>
      <div className="col-3">
        
        <div className="high-bid  position-relative">
        <img src='images/arrival1.png' className='img-fluid' alt='famous'/>
        <div className="high-bid-content position-absolute">
          <h5>Top-product</h5>
          <br/>
          <h6 className='text-white'>Dr Martens 10 eye bex.<br/>Boots in black</h6>
          <br/>
          <p className='text-white'>KES: 5,000.00</p>
        </div>
        </div>
      </div>
      <div className="col-3">
        <div className="high-bid bg-dark position-relative">
        <img src='images/arrival2.png' className='img-fluid' alt='famous'/>
        <div className="high-bid-content position-absolute">
          <h5>Top-product</h5>
          <br/>
          <h6 className='text-secondary'>Dr Martens 10<br/> Classic boots</h6>
          <br/>
          <p className='text-black'>KES: 5,000.00</p>
        </div>
        </div>
      </div>
      <div className="col-3">
        <div className="high-bid position-relative">
        <img src='images/arrival3.png' className='img-fluid' alt='famous'/>
        <div className="high-bid-content position-absolute">
          <h5>Top-product</h5>
          <br/>
          <h6 className='text-secondary'>Dr Martens<br/>New classic</h6>
          <br/>
          <p className='text-black'>KES: 5,000.00</p>
        </div>
        </div>
      </div>
      <div className="col-3">
        <div className="high-bid position-relative">
        <img src='images/arrival4.png' className='img-fluid' alt='famous'/>
        <div className="high-bid-content position-absolute">
          <h5>Top-product</h5>
          <br/>
          <h6 className='text-secondary'>Dr Martens<br/>Orig<span className="text-white">inal</span></h6>
          <br/>
          <p className='text-black'>KES: 5,00<span className="text-white" >0.00</span></p>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="moving-wrapper  py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="inner-moving-wrapper card-wrapper bg-white p-3">
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src='images/ben1.png' alt='beannie' width="225" height="150"/>
                <div>
                  <p>Mercury</p>
                  <h5 className='align-items-center'>KES 350.00</h5>
                </div>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/ben2.png' alt='beannie' width="225" height="150"/>
                <div>
                  <p>Elite-socials</p>
                  <h5 className='align-items-center'>KES 250.00</h5>
                </div>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/ben3.png' alt='beannie' width="225" height="150"/>
                <div>
                  <p>Silver-Blacktterfly</p>
                  <h5 className='align-items-center'>KES 500.00</h5>
                </div>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/ben4.png' alt='beannie' width="225" height="150"/>
                <div>
                  <p>Pop-Punk:3000</p>
                  <h5 className='align-items-center'>KES 450.00</h5>
                </div>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/ben5.png' alt='beannie' width="225" height="150"/>
                <div>
                  <p>Happy-Skeleton</p>
                  <h5 className='align-items-center'>KES 650.00</h5>
                </div>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/ben6.png' alt='beannie' width="225" height="150"/>
                <div>
                  <p>Jughead-Black</p>
                  <h5 className='align-items-center'>KES 700.00</h5>
                </div>
              </div>
</Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blog py-5 home-hero2 ">
      <div className="container-xxl">
        <div className="col-12">
          <h3 className="Sectionheder text-white">Best Seller Packs</h3>
        </div>
        <div className="row">
          <Productcard/>
          <Productcardone/>
          <Productcardtwo/>
          <Productcardthree/>
        </div>
      </div>
    </section>

  <section className="winter-special py-5 home-hero2">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <h3 className="Sectionheder text-black">Winter picks for you!</h3>
        </div>
      </div>
      <div className="row">
        <Winterspecial/>
        <Winterspecialtwo/>
        <Winterspecialthree />
      </div>
    </div>
  </section>

    <section className="blog py-5 home-hero2 ">
      <div className="container-xxl">
        <div className="col-12">
          <h3 className="Sectionheder text-white">What's Trending?</h3>
        </div>
        <div className="row">
          <Blogsection/>
          <Blogsectionone/>
          <Blogsectiontwo/>
          <Blogsectionthree/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home