import React, { useState } from 'react'
import {Helmet} from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb'
import StarRatingComponent from 'react-star-rating-component';
import './singleproducts.css'
import ReactImageZoom from 'react-image-zoom';
import { Link } from 'react-router-dom';
import {FcLike} from 'react-icons/fc'
import {MdOutlineCompareArrows} from 'react-icons/md'



const SingleProduct = () => {
    const props = {width: 595, height: 595, zoomWidth: 500, img:"https://ninjacosmico.com/wp-content/uploads/2022/07/darkgrungelook-820x1024.jpeg"};
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
    const [orderedProduct, setorderedProduct] = useState(true)
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Zepplin | MellowMonday</title>
  </Helmet>
  <Breadcrumb title='MellowMonday'/>

    <div className='main-product py-5 home-hero1'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <div className="main-product-img">
                        <div>
                        <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="other-product-img align-items-start d-flex flex-wrap py-3">
                        <div><img src="https://i.pinimg.com/564x/91/69/57/9169576e82fba30908bb0340723a1ac5.jpg" className='img-fluid' alt=""  /></div>
                        <div><img src="https://i.pinimg.com/564x/91/69/57/9169576e82fba30908bb0340723a1ac5.jpg" className='img-fluid' alt=""  /></div>
                        <div><img src="https://i.pinimg.com/564x/91/69/57/9169576e82fba30908bb0340723a1ac5.jpg" className='img-fluid' alt=""  /></div>
                        <div><img src="https://i.pinimg.com/564x/91/69/57/9169576e82fba30908bb0340723a1ac5.jpg" className='img-fluid' alt=""  /></div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="main-product-details">
                        <div className="border-bottom">
                            <h3 className='title mb-3'>Mellow Monday Fit Collection</h3>
                        </div>
                        <div className="border-bottom">
                            <p className="price text-center mt-3 mb-5">KES 7,500.00</p>
                            <div className="d-flex align-items-center justify-content-between">
                            <StarRatingComponent
                        starCount={5}
                        starColor='#FF5733'
                        emptyStarColor='#000'
                        value={5}
                        editing={false}
                        renderStarIconHalf={false}
                        />
                        <p className="mb-0">(21 reviews)</p>
                            </div>
                            <a className='mt-3' href="#review">Write review</a>
                        </div>
                        <div className="border-bottom py-4 ">
                            <div className='d-flex align-items-center gap-15 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Type:</h3> <p className='product-data mb-0'>Spring Season</p>
                            </div>
                            <div className='d-flex align-items-center gap-15 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Brand:</h3> <p className='product-data  mb-0'>New Yorker</p>
                            </div>
                            <div className='d-flex align-items-center gap-15 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Category:</h3> <p className='product-data  mb-0'>Spring Collection</p>
                            </div>
                            <div className='d-flex align-items-center gap-15 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Tags:</h3> <p className='product-data  mb-0'>Jeans, Sneakers, Stockins</p>
                            </div>
                            <div className='d-flex align-items-center gap-15 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Availability:</h3> <p className='product-data  mb-0'>In-stock</p>
                            </div>
                            <div className='d-flex flex-column gap-15 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading mt-3'>Sizes:</h3>
                                <div className='d-flex flex-wrap gap-15'>
                                    <span className="badge bg-secondary mt-1 mb-1">Xs</span>
                                    <span className="badge bg-secondary mt-1 mb-1">S</span>
                                    <span className="badge bg-secondary mt-1 mb-1">M</span>
                                    <span className="badge bg-secondary mt-1 mb-1">L</span>
                                    <span className="badge bg-secondary mt-1 mb-1">Xl</span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center flex-row gap-15 mt-5 my-2 mb-3'>
                                <h3 className='product-heading '>Quantity:</h3>
                                <div className=''><input type="Number" 
                                name='' 
                                min={1} 
                                max={15} 
                                style={{"width":"70px"}} 
                                className='form-control' id='' /></div>
                                <div className='d-flex align-items-center gap-10 ms-3'><Link to='/cart' className='button border-0'type='submit'>Add Cart</Link>
                                <Link to='/signup' className='button signup'>Buy Now</Link></div>
                            </div>
                            <div className="d-flex align-tems-center gap-15 mt-5">
                                <div><a href="/compare-product"><MdOutlineCompareArrows/>Add to compare</a></div>
                                <div><a href="/wishlist"><FcLike/>Add to wishlist</a></div>
                            </div>
                            
                            <div className='d-flex align-items-center gap-30 mt-5 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Shipping and returns:</h3> <p className='product-data mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero incidunt, doloribus deleniti explicabo fugit totam assumenda, dicta aspernatur atque error voluptate eius blanditiis quibusdam! Minus quo ullam quidem eius.</p>
                            </div>
                            <div className='d-flex align-items-center gap-30 mt-5 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Materials:</h3> <p className='product-data mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero incidunt, doloribus deleniti explicabo fugit totam assumenda, dicta aspernatur atque error voluptate eius blanditiis quibusdam! Minus quo ullam quidem eius.</p>
                            </div>
                            <div className='d-flex align-items-center gap-30 mt-5 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Dimensions:</h3> <p className='product-data mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero incidunt, doloribus deleniti explicabo fugit totam assumenda, dicta aspernatur atque error voluptate eius blanditiis quibusdam! Minus quo ullam quidem eius.</p>
                            </div>
                            <div className='d-flex align-items-center gap-30 mt-5 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Care instructions:</h3> <p className='product-data mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero incidunt, doloribus deleniti explicabo fugit totam assumenda, dicta aspernatur atque error voluptate eius blanditiis quibusdam! Minus quo ullam quidem eius.</p>
                            </div>
                            <div className='d-flex align-items-center gap-30 mt-5 my-2 mb-3 justify-content-between'>
                                <h3 className='product-heading'>Share:</h3>
                                <a href="javascript:void(0);" onClick={()=>{copyToClipboard("https://pin.it/3Tskyv0")}}>click to copy</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6"></div>
            </div>
        </div>
        <section className="blog py-5 home-hero2 ">
      <div className="container-xxl">
        <div className="col-12">
          <h3 className="Sectionheder text-white">New York's finest</h3>
        </div>
        <div className="row">
          
        </div>
      </div>
      <div className="description home-hero2 py-5 ">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="p-3">
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non delectus fugiat ad autem labore ullam? Perspiciatis reprehenderit ipsa distinctio rem quod, incidunt harum cum dolorum. Totam fuga sint consequatur mollitia?</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    <section className="reviews home-hero2 py-5">
        <div className="container-xxl">
            <div className="col-12">
                <div className="review-inner">
                <div className="head-review d-flex justify-content-between align-items-end">
                    <div>
                        <h4 className='mb-3'>Customer Review</h4>
                        <div className='mb-5 d-flex align-items-center gap-10'>
                        <StarRatingComponent
                        starCount={5}
                        starColor='#FF5733'
                        emptyStarColor='#000'
                        value={5}
                        editing={false}
                        renderStarIconHalf={false}
                        />
                        <p className="mb-0">Based on reviews</p>
                        </div>
                        </div>
                        {
                            orderedProduct&& (<div>
                                <a className='text-secondary text-decoration-underline' href="">Write a review</a>
                            </div>
                        )}
                        </div>
                        <div id='review' className="review-form mt-5">
                            <h4 className='mb-3'>Write A review</h4>
                        <form action='' className='d-flex flex-column gap-15'>
                    <div className='justify-content-between'>
                    <StarRatingComponent
                        starCount={5}
                        starColor='#FF5733'
                        emptyStarColor='#000'
                        value={4}
                        editing={true}
                        />
                        </div>
                    <div>
                    <textarea type="text" className="w-100 form-control" placeholder='comments'
                    cols={20}
                    rows={5}></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit</button>
                    </div>
                </form>
                        </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default SingleProduct