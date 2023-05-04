import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Store from './Routes/Store';
import Blogs from './Routes/Blogs';
import CompareProduct from './Routes/CompareProduct';
import Wishlist from './Routes/Wishlist';
import Login from './Routes/Login';
import Forgotpassword from './Routes/Forgotpassword';
import Signup from './Routes/Signup';
import PasswordReject from './Routes/PasswordReject';
import Singleblogs from './Routes/Singleblogs';
import Privacypolicy from './Routes/Privacypolicy';
import Refundpolicy from './Routes/Refundpolicy';
import Shippingpolicy from './Routes/Shippingpolicy';
import Termsandcondition from './Routes/Termsandcondition';
import SingleProduct from './Routes/SingleProduct';
import Cart from './Routes/Cart';
import Checkout from './Routes/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<About />}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Store' element={<Store/>}/>
        <Route path='Blogs' element={<Blogs/>}/>
        <Route path='Blogs/:id' element={<Singleblogs/>}/>
        <Route path='compare-product' element={<CompareProduct/>}/>
        <Route path='Wishlist' element={<Wishlist/>}/>
        <Route path='Wishlist' element={<Wishlist/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='forgot-password' element={<Forgotpassword/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='reset-password' element={<PasswordReject/>}/>
        <Route path='PrivacyPolicy' element={<Privacypolicy/>}/>
        <Route path='RefundPolicy' element={<Refundpolicy/>}/>
        <Route path='ShippingPolicy' element={<Shippingpolicy/>}/>
        <Route path='TermsAndConditions' element={<Termsandcondition/>}/>
        <Route path='SingleProduct/:id' element={<SingleProduct/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>



      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
  }

export default App;
