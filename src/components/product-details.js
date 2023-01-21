import React from 'react';
import Navbar from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from '../Pageview/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Faq from './section-components/faq-v1';
const Product_Details = () => {
    return <div>
        <Navbar />
        
        <ProductSlider />
        <ProductDetails />
        <Faq/>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details

